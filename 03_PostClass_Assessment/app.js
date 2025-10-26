// ==================== 全局变量 ====================
let currentStudent = {
    name: '',
    id: '',
    theta: 0.0,
    se: 1.0,
    answeredQuestions: [],
    testStartTime: null,
    scores: {
        correctness: [],
        quality: [],
        performance: []
    }
};

let questionBank = [];
let currentQuestionType = 'choice';

// ==================== IRT算法核心 ====================
class IRTEngine {
    static calculateProbability(theta, a, b, c) {
        const exponent = a * (theta - b);
        return c + (1 - c) / (1 + Math.exp(-exponent));
    }

    static calculateInformation(theta, a, b, c) {
        const P = this.calculateProbability(theta, a, b, c);
        const numerator = Math.pow(a, 2) * Math.pow(P - c, 2) * (1 - P);
        const denominator = Math.pow(1 - c, 2) * P * (1 - P);
        return denominator !== 0 ? numerator / denominator : 0;
    }

    static updateTheta(currentTheta, currentSE, question, isCorrect) {
        const { a, b, c } = question.irt;
        const P = this.calculateProbability(currentTheta, a, b, c);
        
        const odds = P !== 0 && P !== 1 ? P / (1 - P) : 1;
        
        let newTheta;
        if (isCorrect) {
            newTheta = currentTheta + currentSE * Math.log(odds);
        } else {
            newTheta = currentTheta - currentSE * Math.log(odds);
        }
        
        newTheta = Math.max(-3, Math.min(3, newTheta));
        
        const information = this.calculateInformation(currentTheta, a, b, c);
        const newSE = Math.sqrt(1 / (information + 1 / Math.pow(currentSE, 2)));
        
        return { theta: newTheta, se: newSE };
    }

    static getAbilityLevel(theta) {
        if (theta < -1.0) return { level: '初学者', class: 'ability-beginner' };
        if (theta < 0.0) return { level: '入门', class: 'ability-intermediate' };
        if (theta < 1.0) return { level: '熟练', class: 'ability-advanced' };
        return { level: '精通', class: 'ability-expert' };
    }
}

// ==================== 代码评判引擎 ====================
class CodeJudgeEngine {
    static async judgeCode(code, testCases, expectedComplexity) {
        const result = {
            overall: 0,
            correctness: { score: 0, details: '' },
            quality: { score: 0, details: '' },
            performance: { score: 0, details: '' },
            bestPractices: { score: 0, details: '' },
            feedback: '',
            suggestions: []
        };

        result.correctness = await this.testCorrectness(code, testCases);
        result.quality = this.analyzeQuality(code);
        result.performance = this.analyzePerformance(code, expectedComplexity);
        result.bestPractices = this.checkBestPractices(code);
        
        result.overall = Math.round(
            result.correctness.score * 0.4 +
            result.quality.score * 0.3 +
            result.performance.score * 0.2 +
            result.bestPractices.score * 0.1
        );
        
        result.feedback = this.generateFeedback(result);
        result.suggestions = this.generateSuggestions(result, code);
        
        return result;
    }

    static async testCorrectness(code, testCases) {
        let passedTests = 0;
        const failedTests = [];

        try {
            for (let testCase of testCases) {
                try {
                    const func = new Function('input', code + '\nreturn result;');
                    const output = func(testCase.input);
                    
                    if (JSON.stringify(output) === JSON.stringify(testCase.expected)) {
                        passedTests++;
                    } else {
                        failedTests.push({
                            input: testCase.input,
                            expected: testCase.expected,
                            actual: output
                        });
                    }
                } catch (e) {
                    failedTests.push({
                        input: testCase.input,
                        error: e.message
                    });
                }
            }
        } catch (e) {
            return {
                score: 0,
                details: `代码存在语法错误: ${e.message}`,
                passedTests: 0,
                totalTests: testCases.length,
                failedTests: failedTests
            };
        }

        const score = (passedTests / testCases.length) * 100;
        
        return {
            score: score,
            details: `通过 ${passedTests}/${testCases.length} 个测试用例`,
            passedTests: passedTests,
            totalTests: testCases.length,
            failedTests: failedTests
        };
    }

    static analyzeQuality(code) {
        let score = 100;
        const issues = [];

        const lines = code.split('\n').filter(line => line.trim() !== '');
        if (lines.length < 3) {
            score -= 10;
            issues.push('代码过于简单，可能缺少必要的逻辑');
        }

        const badVarNames = code.match(/\b[a-z]\b/g);
        if (badVarNames && badVarNames.length > 3) {
            score -= 15;
            issues.push('变量命名不够清晰，建议使用有意义的变量名');
        }

        const commentLines = code.split('\n').filter(line => line.trim().startsWith('#'));
        if (commentLines.length === 0 && lines.length > 10) {
            score -= 10;
            issues.push('代码缺少注释，建议添加关键逻辑的说明');
        }

        const indentIssues = lines.filter(line => {
            const spaces = line.match(/^\s*/)[0].length;
            return spaces % 4 !== 0 && line.trim() !== '';
        });
        if (indentIssues.length > 0) {
            score -= 10;
            issues.push('代码缩进不规范，应使用4个空格');
        }

        if (!code.includes('def ') && lines.length > 15) {
            score -= 10;
            issues.push('建议将复杂逻辑封装成函数');
        }

        return {
            score: Math.max(0, score),
            details: issues.length > 0 ? issues.join('; ') : '代码质量良好',
            issues: issues
        };
    }

    static analyzePerformance(code, expectedComplexity) {
        let score = 100;
        const issues = [];

        const nestedLoopsDepth = this.estimateNestedDepth(code);

        if (nestedLoopsDepth >= 3) {
            score = 60;
            issues.push('存在3层或更多嵌套循环，时间复杂度较高 (O(n³)或更高)');
        } else if (nestedLoopsDepth === 2) {
            score = 80;
            issues.push('存在2层嵌套循环，时间复杂度为 O(n²)');
        } else if (nestedLoopsDepth === 1) {
            score = 95;
            issues.push('时间复杂度为 O(n)，性能良好');
        }

        if (code.match(/for .* in .*:\s*for .* in .* range\(len/)) {
            score -= 10;
            issues.push('可以使用 enumerate() 代替 range(len())');
        }

        if (code.includes('append') && !code.includes('[') && code.includes('for')) {
            issues.push('可以考虑使用列表推导式提高效率');
        }

        return {
            score: Math.max(0, score),
            details: issues.join('; ') || '性能表现良好',
            estimatedComplexity: this.estimateComplexity(nestedLoopsDepth),
            issues: issues
        };
    }

    static estimateNestedDepth(code) {
        const lines = code.split('\n');
        let maxDepth = 0;
        let currentDepth = 0;

        for (let line of lines) {
            if (line.trim().startsWith('for ') || line.trim().startsWith('while ')) {
                currentDepth++;
                maxDepth = Math.max(maxDepth, currentDepth);
            }
            if (line.trim() && !line.trim().startsWith(' ') && currentDepth > 0) {
                currentDepth = Math.max(0, currentDepth - 1);
            }
        }

        return maxDepth;
    }

    static estimateComplexity(depth) {
        const complexities = ['O(1)', 'O(n)', 'O(n²)', 'O(n³)', 'O(n⁴)'];
        return complexities[Math.min(depth, complexities.length - 1)];
    }

    static checkBestPractices(code) {
        let score = 100;
        const issues = [];

        if (code.includes('range(len(') && !code.includes('enumerate')) {
            score -= 20;
            issues.push('建议使用 enumerate() 代替 range(len())');
        }

        if (code.length > 100 && !code.includes('try') && !code.includes('except')) {
            score -= 15;
            issues.push('建议添加异常处理 (try-except)');
        }

        const hasListComp = code.includes('[') && code.includes('for') && code.includes('in');
        if (!hasListComp && code.includes('.append(')) {
            issues.push('可以考虑使用列表推导式');
        }

        if (code.includes('sum') || code.includes('max') || code.includes('min')) {
            issues.push('很好地使用了Python内置函数');
        }

        return {
            score: Math.max(0, score),
            details: issues.join('; ') || '遵循了Python最佳实践',
            issues: issues
        };
    }

    static generateFeedback(result) {
        let feedback = '';

        if (result.overall >= 90) {
            feedback = '🎉 优秀！你的代码质量很高，功能正确，性能良好。';
        } else if (result.overall >= 80) {
            feedback = '👍 很好！代码基本符合要求，还有一些小地方可以优化。';
        } else if (result.overall >= 70) {
            feedback = '✅ 不错！代码能够运行，但在代码质量或性能方面还有提升空间。';
        } else if (result.overall >= 60) {
            feedback = '💪 继续努力！代码存在一些问题，建议重点关注功能正确性。';
        } else {
            feedback = '📚 需要加强！建议回顾基础知识，多加练习。';
        }

        return feedback;
    }

    static generateSuggestions(result, code) {
        const suggestions = [];

        if (result.correctness.score < 100) {
            suggestions.push({
                priority: 'high',
                text: '优先修复功能问题，确保所有测试用例通过',
                details: result.correctness.details
            });
        }

        if (result.quality.score < 80) {
            suggestions.push({
                priority: 'medium',
                text: '改善代码质量：' + (result.quality.issues[0] || '注意代码规范'),
                details: result.quality.details
            });
        }

        if (result.performance.score < 80) {
            suggestions.push({
                priority: 'medium',
                text: '优化性能：' + (result.performance.issues[0] || '考虑降低时间复杂度'),
                details: result.performance.details
            });
        }

        if (result.bestPractices.score < 90) {
            suggestions.push({
                priority: 'low',
                text: '学习Python最佳实践，使代码更Pythonic',
                details: result.bestPractices.details
            });
        }

        if (suggestions.length === 0) {
            suggestions.push({
                priority: 'low',
                text: '继续保持！可以尝试更多算法优化技巧',
                details: '你的代码已经很好了'
            });
        }

        return suggestions;
    }
}

// ==================== 题库数据 ====================
function initializeQuestionBank() {
    questionBank = [
        // 选择题
        {
            id: 'q001',
            type: 'choice',
            concept: 'for循环',
            difficulty: 'easy',
            question: '以下哪个选项可以正确输出1到5的数字？',
            options: [
                'for i in range(5): print(i)',
                'for i in range(1, 6): print(i)',
                'for i in range(1, 5): print(i)',
                'for i in [1, 2, 3, 4, 5, 6]: print(i)'
            ],
            correct: 1,
            explanation: 'range(1, 6)会生成1到5的序列，包含1但不包含6',
            irt: { a: 1.2, b: -1.5, c: 0.25 }
        },
        {
            id: 'q002',
            type: 'choice',
            concept: 'for循环',
            difficulty: 'easy',
            question: 'range(10)会生成多少个数字？',
            options: ['9个', '10个', '11个', '不确定'],
            correct: 1,
            explanation: 'range(10)生成0到9共10个数字',
            irt: { a: 1.0, b: -1.2, c: 0.25 }
        },
        {
            id: 'q003',
            type: 'choice',
            concept: 'for循环',
            difficulty: 'medium',
            question: '以下代码的输出结果是什么？\nfor i in range(2, 10, 3):\n    print(i, end=" ")',
            options: ['2 5 8', '2 5 8 11', '3 6 9', '2 4 6 8'],
            correct: 0,
            explanation: 'range(2, 10, 3)从2开始，步长为3，到10之前，生成2, 5, 8',
            irt: { a: 1.5, b: -0.5, c: 0.25 }
        },
        {
            id: 'q006',
            type: 'choice',
            concept: 'while循环',
            difficulty: 'easy',
            question: '以下哪个while循环会无限执行？',
            options: [
                'i = 0\nwhile i < 10:\n    print(i)\n    i += 1',
                'i = 0\nwhile i < 10:\n    print(i)',
                'i = 10\nwhile i > 0:\n    print(i)\n    i -= 1',
                'i = 0\nwhile False:\n    print(i)'
            ],
            correct: 1,
            explanation: '选项B中i的值从未改变，条件永远为True，形成死循环',
            irt: { a: 1.1, b: -1.0, c: 0.25 }
        },
        {
            id: 'q007',
            type: 'choice',
            concept: 'while循环',
            difficulty: 'medium',
            question: '以下代码会输出多少次"Hello"？\ni = 0\nwhile i < 5:\n    print("Hello")\n    i += 2',
            options: ['2次', '3次', '5次', '无限次'],
            correct: 1,
            explanation: 'i的值为0, 2, 4时满足条件，共输出3次',
            irt: { a: 1.4, b: -0.2, c: 0.25 }
        },
        {
            id: 'q010',
            type: 'choice',
            concept: 'break/continue',
            difficulty: 'medium',
            question: '以下代码的输出是什么？\nfor i in range(5):\n    if i == 3:\n        break\n    print(i, end=" ")',
            options: ['0 1 2', '0 1 2 3', '0 1 2 4', '1 2 3'],
            correct: 0,
            explanation: '当i等于3时break跳出循环，所以只输出0, 1, 2',
            irt: { a: 1.5, b: 0.0, c: 0.25 }
        },
        {
            id: 'q011',
            type: 'choice',
            concept: 'break/continue',
            difficulty: 'medium',
            question: '以下代码的输出是什么？\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i, end=" ")',
            options: ['0 1 3 4', '0 1 2 3 4', '0 1', '2'],
            correct: 0,
            explanation: 'continue跳过当前迭代，当i为2时跳过，输出0, 1, 3, 4',
            irt: { a: 1.4, b: 0.1, c: 0.25 }
        },
        {
            id: 'q013',
            type: 'choice',
            concept: 'break/continue',
            difficulty: 'hard',
            question: '以下代码会输出什么？\nfor i in range(3):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)',
            options: [
                '(0,0) (1,0) (2,0)',
                '(0,0) (0,1) (1,0) (1,1) (2,0) (2,1)',
                '(0,0)',
                '(0,0) (1,0) (1,1) (2,0) (2,1) (2,2)'
            ],
            correct: 0,
            explanation: '内层循环在j=1时break，所以每次外层循环只输出j=0的情况',
            irt: { a: 1.8, b: 0.8, c: 0.25 }
        },
        {
            id: 'q014',
            type: 'choice',
            concept: '嵌套循环',
            difficulty: 'medium',
            question: '以下代码会执行多少次print语句？\nfor i in range(3):\n    for j in range(4):\n        print("*")',
            options: ['3次', '4次', '7次', '12次'],
            correct: 3,
            explanation: '外层循环3次，内层循环4次，总共3×4=12次',
            irt: { a: 1.3, b: 0.3, c: 0.25 }
        },
        {
            id: 'q016',
            type: 'choice',
            concept: '嵌套循环',
            difficulty: 'hard',
            question: '以下哪个代码可以打印出九九乘法表的第一行（1×1到1×9）？',
            options: [
                'for i in range(1, 10):\n    print(f"1×{i}={i}")',
                'for i in range(9):\n    print(f"1×{i}={i}")',
                'for i in range(1, 9):\n    print(f"1×{i}={1*i}")',
                'for i in range(10):\n    print(f"1×{i}={i}")'
            ],
            correct: 0,
            explanation: 'range(1, 10)生成1到9，符合九九乘法表的要求',
            irt: { a: 1.6, b: 0.6, c: 0.25 }
        },
        {
            id: 'q017',
            type: 'choice',
            concept: '循环优化',
            difficulty: 'hard',
            question: '以下哪种方式效率最高？',
            options: [
                'result = []\nfor i in range(100):\n    result.append(i*2)',
                'result = [i*2 for i in range(100)]',
                'result = list(map(lambda x: x*2, range(100)))',
                '三种方式效率相同'
            ],
            correct: 1,
            explanation: '列表推导式通常比for循环+append更快，比map稍快或相当',
            irt: { a: 1.7, b: 1.2, c: 0.25 }
        },
        {
            id: 'q019',
            type: 'choice',
            concept: '循环优化',
            difficulty: 'hard',
            question: '优化建议：计算sum([i**2 for i in range(1000000)])时，以下哪种方式更好？',
            options: [
                '不需要优化',
                '使用sum(i**2 for i in range(1000000))生成器表达式',
                '使用numpy数组',
                '使用多线程'
            ],
            correct: 1,
            explanation: '生成器表达式使用惰性求值，内存占用更少，对于大数据集更高效',
            irt: { a: 1.8, b: 1.5, c: 0.25 }
        },

        // 判断题
        {
            id: 'q004',
            type: 'judge',
            concept: 'for循环',
            difficulty: 'easy',
            question: '判断题：for循环只能遍历数字序列，不能遍历字符串。',
            correct: false,
            explanation: 'for循环可以遍历任何可迭代对象，包括字符串、列表、元组等',
            irt: { a: 1.0, b: -1.0, c: 0.5 }
        },
        {
            id: 'q005',
            type: 'judge',
            concept: 'for循环',
            difficulty: 'medium',
            question: '判断题：enumerate()函数可以同时获取列表的索引和值。',
            correct: true,
            explanation: 'enumerate()返回索引和值的元组，常用于需要同时使用索引和元素的场景',
            irt: { a: 1.3, b: -0.3, c: 0.5 }
        },
        {
            id: 'q008',
            type: 'judge',
            concept: 'while循环',
            difficulty: 'easy',
            question: '判断题：while循环必须有确定的循环次数。',
            correct: false,
            explanation: 'while循环基于条件，循环次数可以是不确定的，取决于条件何时变为False',
            irt: { a: 1.0, b: -0.8, c: 0.5 }
        },
        {
            id: 'q009',
            type: 'judge',
            concept: 'while循环',
            difficulty: 'medium',
            question: '判断题：while True配合break可以实现至少执行一次的循环。',
            correct: true,
            explanation: 'while True创建无限循环，配合break可以在满足条件时退出，保证至少执行一次',
            irt: { a: 1.2, b: 0.2, c: 0.5 }
        },
        {
            id: 'q012',
            type: 'judge',
            concept: 'break/continue',
            difficulty: 'medium',
            question: '判断题：break可以同时跳出多层嵌套循环。',
            correct: false,
            explanation: 'break只能跳出当前所在的循环，要跳出多层循环需要使用其他方法（如标志变量）',
            irt: { a: 1.3, b: 0.5, c: 0.5 }
        },
        {
            id: 'q015',
            type: 'judge',
            concept: '嵌套循环',
            difficulty: 'hard',
            question: '判断题：嵌套循环的时间复杂度通常至少是O(n²)。',
            correct: true,
            explanation: '两层嵌套循环通常是O(n²)，三层是O(n³)，以此类推',
            irt: { a: 1.5, b: 1.0, c: 0.5 }
        },
        {
            id: 'q018',
            type: 'judge',
            concept: '循环优化',
            difficulty: 'hard',
            question: '判断题：在循环中频繁调用函数会降低性能。',
            correct: true,
            explanation: '函数调用有开销，在循环中频繁调用会影响性能，应该尽量将计算移到循环外',
            irt: { a: 1.4, b: 1.0, c: 0.5 }
        },

        // 编程题
        {
            id: 'q020',
            type: 'coding',
            concept: 'for循环',
            difficulty: 'easy',
            question: '编写程序：使用for循环计算1到10的和，将结果赋值给变量result',
            hint: '使用range(1, 11)遍历1到10的数字',
            testCases: [
                { input: null, expected: 55, description: '1+2+3+...+10 = 55' }
            ],
            starterCode: '# 计算1到10的和\nresult = 0\n# 在这里写你的代码\n',
            expectedComplexity: 'O(n)',
            irt: { a: 1.5, b: -0.5, c: 0 }
        },
        {
            id: 'q021',
            type: 'coding',
            concept: 'while循环',
            difficulty: 'medium',
            question: '编写程序：使用while循环找出第一个大于100的2的幂次，将结果赋值给变量result',
            hint: '从2的0次方开始，每次乘以2，直到结果大于100',
            testCases: [
                { input: null, expected: 128, description: '2^7 = 128 是第一个大于100的2的幂' }
            ],
            starterCode: '# 找出第一个大于100的2的幂次\nresult = 1\n# 在这里写你的代码\n',
            expectedComplexity: 'O(log n)',
            irt: { a: 1.6, b: 0.3, c: 0 }
        },
        {
            id: 'q022',
            type: 'coding',
            concept: '嵌套循环',
            difficulty: 'hard',
            question: '编写程序：使用嵌套循环打印一个5行的直角三角形（每行的星号数等于行号），将每行的字符串存储在列表result中',
            hint: '外层循环控制行数，内层循环控制每行的星号数',
            testCases: [
                { 
                    input: null, 
                    expected: ['*', '**', '***', '****', '*****'],
                    description: '第1行1个星，第2行2个星，以此类推'
                }
            ],
            starterCode: '# 打印直角三角形\nresult = []\n# 在这里写你的代码\n',
            expectedComplexity: 'O(n²)',
            irt: { a: 1.8, b: 1.0, c: 0 }
        },
        {
            id: 'q023',
            type: 'coding',
            concept: 'break/continue',
            difficulty: 'medium',
            question: '编写程序：在1到20中找出所有能被3整除但不能被6整除的数字，存储在列表result中',
            hint: '使用for循环遍历，用continue跳过不符合条件的数字',
            testCases: [
                { 
                    input: null, 
                    expected: [3, 9, 15],
                    description: '3, 9, 15能被3整除但不能被6整除'
                }
            ],
            starterCode: '# 找出符合条件的数字\nresult = []\n# 在这里写你的代码\n',
            expectedComplexity: 'O(n)',
            irt: { a: 1.7, b: 0.5, c: 0 }
        },
        {
            id: 'q024',
            type: 'coding',
            concept: '循环优化',
            difficulty: 'hard',
            question: '编写程序：使用列表推导式生成1到100中所有偶数的平方，存储在列表result中',
            hint: '列表推导式格式：[expression for item in iterable if condition]',
            testCases: [
                { 
                    input: null, 
                    expected: [4, 16, 36, 64, 100],
                    description: '2²=4, 4²=16, 6²=36...'
                }
            ],
            starterCode: '# 生成偶数的平方\nresult = None  # 在这里使用列表推导式\n',
            expectedComplexity: 'O(n)',
            irt: { a: 1.9, b: 1.3, c: 0 }
        }
    ];
}

// ==================== UI控制函数 ====================
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionName).classList.add('active');
    
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    if (sectionName === 'practice') {
        showQuestionType(currentQuestionType);
    } else if (sectionName === 'analysis') {
        loadAnalysisData();
    }
}

function showQuestionType(type) {
    currentQuestionType = type;
    
    document.querySelectorAll('.sub-nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('choiceQuestions').classList.add('hidden');
    document.getElementById('judgeQuestions').classList.add('hidden');
    document.getElementById('codingQuestions').classList.add('hidden');
    
    if (type === 'choice') {
        document.getElementById('choiceQuestions').classList.remove('hidden');
        renderQuestionsByType('choice');
    } else if (type === 'judge') {
        document.getElementById('judgeQuestions').classList.remove('hidden');
        renderQuestionsByType('judge');
    } else if (type === 'coding') {
        document.getElementById('codingQuestions').classList.remove('hidden');
        renderQuestionsByType('coding');
    }
}

function renderQuestionsByType(type) {
    const questions = questionBank.filter(q => q.type === type);
    const containerId = type + 'Questions';
    const container = document.getElementById(containerId);
    
    let html = `<div class="summary-section">
        <h3 style="color: #667eea;">📝 ${getQuestionTypeText(type)}（共${questions.length}题）</h3>
        <p style="margin-top: 10px;">请完成以下所有题目，每题都有"提交答案"按钮</p>
    </div>`;
    
    questions.forEach((question, index) => {
        html += renderSingleQuestion(question, index + 1);
    });
    
    container.innerHTML = html;
}

function renderSingleQuestion(question, number) {
    let html = `
        <div class="question-card" id="card-${question.id}">
            <div class="question-header">
                <span class="question-number">第 ${number} 题</span>
                <span class="question-difficulty difficulty-${question.difficulty}">
                    ${getDifficultyText(question.difficulty)}
                </span>
            </div>
            
            <div style="background: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
                <strong>📍 知识点：</strong>${question.concept}
            </div>
            
            <div class="question-text">${question.question}</div>
    `;
    
    if (question.type === 'choice') {
        html += '<div class="options">';
        question.options.forEach((option, index) => {
            html += `
                <div class="option" onclick="selectOption('${question.id}', ${index})">
                    ${String.fromCharCode(65 + index)}. ${option}
                </div>
            `;
        });
        html += '</div>';
    } else if (question.type === 'judge') {
        html += `
            <div class="options">
                <div class="option" onclick="selectOption('${question.id}', true)">✓ 正确</div>
                <div class="option" onclick="selectOption('${question.id}', false)">✗ 错误</div>
            </div>
        `;
    } else if (question.type === 'coding') {
        if (question.hint) {
            html += `<div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0;">
                💡 <strong>提示：</strong>${question.hint}
            </div>`;
        }
        html += `
            <div class="code-editor">
                <label style="display: block; margin-bottom: 10px; font-weight: bold;">
                    请在下方编写代码：
                </label>
                <textarea id="code-${question.id}" placeholder="在这里输入你的Python代码...">${question.starterCode || ''}</textarea>
            </div>
        `;
    }
    
    html += `
        <div class="result-card" id="result-${question.id}"></div>
        <div class="question-controls">
            <button class="btn btn-primary" onclick="submitAnswer('${question.id}')">提交答案</button>
        </div>
        </div>
    `;
    
    return html;
}

function getQuestionTypeText(type) {
    const types = {
        'choice': '选择题',
        'judge': '判断题',
        'coding': '编程题'
    };
    return types[type] || type;
}

function getDifficultyText(difficulty) {
    const levels = {
        'easy': '简单',
        'medium': '中等',
        'hard': '困难'
    };
    return levels[difficulty] || difficulty;
}

function selectOption(questionId, answer) {
    const card = document.getElementById(`card-${questionId}`);
    const options = card.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.remove('selected'));
    
    if (typeof answer === 'number') {
        options[answer].classList.add('selected');
        card.setAttribute('data-answer', answer);
    } else {
        const index = answer === true ? 0 : 1;
        options[index].classList.add('selected');
        card.setAttribute('data-answer', answer);
    }
}

async function submitAnswer(questionId) {
    const question = questionBank.find(q => q.id === questionId);
    if (!question) return;
    
    const card = document.getElementById(`card-${questionId}`);
    let userAnswer;
    let isCorrect = false;
    
    if (question.type === 'choice') {
        userAnswer = parseInt(card.getAttribute('data-answer'));
        if (isNaN(userAnswer)) {
            alert('请选择一个答案');
            return;
        }
        isCorrect = (userAnswer === question.correct);
    } else if (question.type === 'judge') {
        const answerStr = card.getAttribute('data-answer');
        if (!answerStr) {
            alert('请选择一个答案');
            return;
        }
        userAnswer = answerStr === 'true';
        isCorrect = (userAnswer === question.correct);
    } else if (question.type === 'coding') {
        const code = document.getElementById(`code-${question.id}`).value.trim();
        if (!code) {
            alert('请输入代码');
            return;
        }
        userAnswer = code;
        
        showLoadingResult(questionId);
        
        const judgeResult = await CodeJudgeEngine.judgeCode(
            code,
            question.testCases,
            question.expectedComplexity
        );
        
        currentStudent.scores.correctness.push(judgeResult.correctness.score);
        currentStudent.scores.quality.push(judgeResult.quality.score);
        currentStudent.scores.performance.push(judgeResult.performance.score);
        
        showCodingResult(questionId, judgeResult);
        
        isCorrect = judgeResult.correctness.score >= 80;
    }
    
    const options = card.querySelectorAll('.option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    currentStudent.answeredQuestions.push({
        questionId: question.id,
        concept: question.concept,
        difficulty: question.difficulty,
        type: question.type,
        correct: isCorrect,
        userAnswer: userAnswer,
        timestamp: new Date()
    });
    
    const updated = IRTEngine.updateTheta(
        currentStudent.theta,
        currentStudent.se,
        question,
        isCorrect
    );
    currentStudent.theta = updated.theta;
    currentStudent.se = updated.se;
    
    if (question.type !== 'coding') {
        showResult(questionId, question, isCorrect);
    }
    
    card.querySelector('.question-controls').innerHTML = 
        '<p style="color: #28a745; font-weight: bold;">✓ 已提交</p>';
}

function showResult(questionId, question, isCorrect) {
    const resultCard = document.getElementById(`result-${questionId}`);
    resultCard.className = 'result-card show ' + (isCorrect ? 'result-correct' : 'result-incorrect');
    
    let html = `
        <div style="font-size: 1.3em; margin-bottom: 15px;">
            ${isCorrect ? '✅ 回答正确！' : '❌ 回答错误'}
        </div>
    `;
    
    if (!isCorrect && question.type === 'choice') {
        html += `
            <div style="margin-bottom: 10px;">
                <strong>正确答案：</strong>
                ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}
            </div>
        `;
        
        const card = document.getElementById(`card-${questionId}`);
        const options = card.querySelectorAll('.option');
        options.forEach((opt, idx) => {
            if (idx === question.correct) {
                opt.classList.add('correct');
            }
            if (opt.classList.contains('selected') && idx !== question.correct) {
                opt.classList.add('incorrect');
            }
        });
    } else if (!isCorrect && question.type === 'judge') {
        html += `
            <div style="margin-bottom: 10px;">
                <strong>正确答案：</strong>${question.correct ? '正确' : '错误'}
            </div>
        `;
    }
    
    if (question.explanation) {
        html += `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
                <strong>📖 解析：</strong>${question.explanation}
            </div>
        `;
    }
    
    html += `
        <div style="margin-top: 15px; padding: 15px; background: ${isCorrect ? '#d4edda' : '#fff3cd'}; border-radius: 8px;">
            <strong>📈 能力值更新：</strong>${currentStudent.theta.toFixed(2)} 
            (${isCorrect ? '↑' : '↓'})
        </div>
    `;
    
    resultCard.innerHTML = html;
}

function showLoadingResult(questionId) {
    const resultCard = document.getElementById(`result-${questionId}`);
    resultCard.className = 'result-card show';
    resultCard.innerHTML = '<div class="loading">正在评判代码...</div>';
}

function showCodingResult(questionId, judgeResult) {
    const resultCard = document.getElementById(`result-${questionId}`);
    
    let resultClass = 'result-partial';
    if (judgeResult.overall >= 85) resultClass = 'result-correct';
    else if (judgeResult.overall < 60) resultClass = 'result-incorrect';
    
    resultCard.className = 'result-card show ' + resultClass;
    
    let html = `
        <div class="score-display" style="color: ${judgeResult.overall >= 85 ? '#28a745' : judgeResult.overall >= 60 ? '#ffc107' : '#dc3545'};">
            总分：${judgeResult.overall} / 100
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0;">
            <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #667eea;">
                    ${judgeResult.correctness.score.toFixed(0)}
                </div>
                <div style="font-size: 0.9em; color: #666; margin-top: 5px;">功能正确性</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #667eea;">
                    ${judgeResult.quality.score.toFixed(0)}
                </div>
                <div style="font-size: 0.9em; color: #666; margin-top: 5px;">代码质量</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #667eea;">
                    ${judgeResult.performance.score.toFixed(0)}
                </div>
                <div style="font-size: 0.9em; color: #666; margin-top: 5px;">性能表现</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #667eea;">
                    ${judgeResult.bestPractices.score.toFixed(0)}
                </div>
                <div style="font-size: 0.9em; color: #666; margin-top: 5px;">最佳实践</div>
            </div>
        </div>
        
        <div class="feedback-section">
            <h3>💬 综合评价</h3>
            <p>${judgeResult.feedback}</p>
        </div>
        
        <div class="feedback-section">
            <h3>📋 详细反馈</h3>
            <ul>
                <li><strong>功能测试：</strong>${judgeResult.correctness.details}</li>
                <li><strong>代码质量：</strong>${judgeResult.quality.details}</li>
                <li><strong>性能分析：</strong>${judgeResult.performance.details}</li>
                <li><strong>最佳实践：</strong>${judgeResult.bestPractices.details}</li>
            </ul>
        </div>
    `;
    
    if (judgeResult.suggestions.length > 0) {
        html += '<div class="feedback-section"><h3>💡 改进建议</h3><div class="suggestions-list">';
        judgeResult.suggestions.forEach(suggestion => {
            html += `
                <div class="suggestion-item">
                    <strong>[${suggestion.priority === 'high' ? '⚠️ 高优先级' : suggestion.priority === 'medium' ? '⚡ 中优先级' : '💡 建议'}]</strong> 
                    ${suggestion.text}
                </div>
            `;
        });
        html += '</div></div>';
    }
    
    resultCard.innerHTML = html;
}

function startTest() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentId').value.trim();
    
    if (!name || !id) {
        alert('请输入姓名和学号');
        return;
    }
    
    currentStudent.name = name;
    currentStudent.id = id;
    currentStudent.theta = 0.0;
    currentStudent.se = 1.0;
    currentStudent.answeredQuestions = [];
    currentStudent.testStartTime = new Date();
    currentStudent.scores = {
        correctness: [],
        quality: [],
        performance: []
    };
    
    initializeQuestionBank();
    
    document.getElementById('practice').classList.add('active');
    document.getElementById('welcome').classList.remove('active');
    document.getElementById('analysis').classList.remove('active');
    
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-tab')[1].classList.add('active');
    
    showQuestionType('choice');
}

function loadAnalysisData() {
    if (currentStudent.answeredQuestions.length === 0) {
        document.getElementById('analysisContent').innerHTML = `
            <div style="text-align: center; padding: 60px;">
                <p style="font-size: 1.2em; color: #666;">还没有测试数据，请先完成练习</p>
                <button class="btn btn-primary" onclick="showSection('welcome')" style="margin-top: 20px;">
                    开始练习
                </button>
            </div>
        `;
        document.getElementById('analysisContent').classList.remove('hidden');
        document.getElementById('analysisLoading').classList.add('hidden');
        return;
    }
    
    document.getElementById('analysisLoading').classList.remove('hidden');
    document.getElementById('analysisContent').classList.add('hidden');
    
    setTimeout(() => {
        generateAnalysisReport();
        document.getElementById('analysisLoading').classList.add('hidden');
        document.getElementById('analysisContent').classList.remove('hidden');
    }, 1000);
}

function generateAnalysisReport() {
    const content = document.getElementById('analysisContent');
    
    const totalQuestions = currentStudent.answeredQuestions.length;
    const correctCount = currentStudent.answeredQuestions.filter(a => a.correct).length;
    const accuracy = (correctCount / totalQuestions * 100).toFixed(1);
    
    const conceptStats = {};
    currentStudent.answeredQuestions.forEach(answer => {
        if (!conceptStats[answer.concept]) {
            conceptStats[answer.concept] = { total: 0, correct: 0 };
        }
        conceptStats[answer.concept].total++;
        if (answer.correct) conceptStats[answer.concept].correct++;
    });
    
    const conceptMastery = {};
    for (let concept in conceptStats) {
        conceptMastery[concept] = (conceptStats[concept].correct / conceptStats[concept].total * 100).toFixed(1);
    }
    
    let html = `
        <h2 style="color: #667eea; text-align: center; margin-bottom: 30px;">
            📊 ${currentStudent.name} 的学习分析报告
        </h2>
        
        <div class="stats-grid">
            <div class="stat-card">
                <h3>${totalQuestions}</h3>
                <p>完成题目</p>
            </div>
            <div class="stat-card">
                <h3>${accuracy}%</h3>
                <p>正确率</p>
            </div>
            <div class="stat-card">
                <h3>${currentStudent.theta.toFixed(2)}</h3>
                <p>能力值(θ)</p>
            </div>
            <div class="stat-card">
                <h3>${IRTEngine.getAbilityLevel(currentStudent.theta).level}</h3>
                <p>能力等级</p>
            </div>
        </div>
        
        <div class="chart-container">
            <h3>📚 知识点掌握度分析</h3>
            <canvas id="knowledgeChart"></canvas>
        </div>
        
        <div class="chart-container">
            <h3>📖 各知识点详细表现</h3>
            <div style="margin-top: 20px;">
    `;
    
    for (let concept in conceptStats) {
        const stats = conceptStats[concept];
        const mastery = conceptMastery[concept];
        const color = mastery >= 80 ? '#28a745' : mastery >= 60 ? '#ffc107' : '#dc3545';
        
        html += `
            <div style="margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <strong style="font-size: 1.1em;">${concept}</strong>
                    <span style="color: ${color}; font-weight: bold;">${mastery}% (${stats.correct}/${stats.total})</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${mastery}%; background: ${color};">
                        ${mastery}%
                    </div>
                </div>
            </div>
        `;
    }
    
    html += `
            </div>
        </div>
        
        <div class="chart-container">
            <h3>📝 题型表现分析</h3>
            <canvas id="typeChart"></canvas>
        </div>
    `;
    
    if (currentStudent.scores.correctness.length > 0) {
        html += `
        <div class="chart-container">
            <h3>💻 编程题多维度评分</h3>
            <canvas id="codingScoreChart"></canvas>
        </div>
        `;
    }
    
    const weakConcepts = Object.entries(conceptMastery)
        .filter(([_, score]) => parseFloat(score) < 70)
        .sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]));
    
    if (weakConcepts.length > 0) {
        html += `
        <div class="chart-container" style="background: #fff3cd;">
            <h3 style="color: #856404;">⚠️ 薄弱知识点与建议</h3>
            <div style="margin-top: 20px;">
        `;
        
        weakConcepts.forEach(([concept, score]) => {
            const suggestions = getConceptSuggestions(concept);
            html += `
                <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #ffc107;">
                    <h4 style="color: #856404; margin-bottom: 10px;">
                        ${concept} (掌握度: ${score}%)
                    </h4>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                        ${suggestions.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        
        html += `
            </div>
        </div>
        `;
    } else {
        html += `
        <div class="chart-container" style="background: #d4edda;">
            <h3 style="color: #155724;">🎉 恭喜！所有知识点掌握良好</h3>
            <p style="margin-top: 15px; font-size: 1.1em;">
                你已经很好地掌握了循环控制的各个知识点，建议：
            </p>
            <ul style="margin: 20px 0 0 30px; line-height: 1.8;">
                <li>尝试更复杂的综合练习，提升问题解决能力</li>
                <li>学习循环的性能优化技巧</li>
                <li>探索递归与循环的结合使用</li>
                <li>参与实际项目，应用所学知识</li>
            </ul>
        </div>
        `;
    }
    
    html += `
    <div class="chart-container">
        <h3>📅 个性化学习计划</h3>
        ${generateStudyPlan(weakConcepts, conceptMastery)}
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
        <button class="btn btn-primary" onclick="restartTest()">
            再次测试
        </button>
    </div>
    `;
    
    content.innerHTML = html;
    
    setTimeout(() => {
        drawKnowledgeChart(conceptMastery);
        drawTypeChart();
        if (currentStudent.scores.correctness.length > 0) {
            drawCodingScoreChart();
        }
    }, 100);
}

function restartTest() {
    currentStudent.answeredQuestions = [];
    currentStudent.theta = 0.0;
    currentStudent.se = 1.0;
    currentStudent.scores = {
        correctness: [],
        quality: [],
        performance: []
    };
    
    document.getElementById('practice').classList.add('active');
    document.getElementById('analysis').classList.remove('active');
    
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-tab')[1].classList.add('active');
    
    showQuestionType('choice');
}

function getConceptSuggestions(concept) {
    const suggestions = {
        'for循环': [
            '复习for循环的基本语法：for item in sequence',
            '练习使用range()函数的不同参数',
            '学习遍历不同数据结构（列表、字符串、字典）',
            '掌握enumerate()函数的使用'
        ],
        'while循环': [
            '理解while循环的条件判断机制',
            '注意避免死循环，确保条件会改变',
            '练习使用while循环处理不确定次数的问题',
            '学习while True配合break的使用模式'
        ],
        'break/continue': [
            '理解break和continue的区别',
            '练习在合适的场景使用break提前退出',
            '掌握continue跳过当前迭代的技巧',
            '注意break只能跳出当前循环'
        ],
        '嵌套循环': [
            '从二重循环开始练习，逐步增加复杂度',
            '理解内外循环的执行顺序',
            '练习使用嵌套循环解决实际问题（如矩阵操作）',
            '注意嵌套循环的性能影响'
        ],
        '循环优化': [
            '学习列表推导式代替简单循环',
            '了解生成器表达式的内存优势',
            '掌握使用内置函数（sum, map, filter）优化循环',
            '学习避免不必要的重复计算'
        ]
    };
    
    return suggestions[concept] || ['多做练习题，巩固基础知识'];
}

function generateStudyPlan(weakConcepts, allConcepts) {
    if (weakConcepts.length === 0) {
        return `
            <div style="padding: 20px;">
                <p style="font-size: 1.1em; margin-bottom: 20px;">
                    🌟 你的基础已经很扎实了！建议进行以下提升：
                </p>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                    <h4 style="margin-bottom: 15px;">第1周：进阶练习</h4>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                        <li>每天完成2-3道中等难度的综合题</li>
                        <li>预计时间：每天30-45分钟</li>
                    </ul>
                </div>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 15px;">
                    <h4 style="margin-bottom: 15px;">第2周：性能优化</h4>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                        <li>学习时间复杂度分析</li>
                        <li>练习代码优化技巧</li>
                        <li>预计时间：每天45-60分钟</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    let plan = '<div style="padding: 20px;">';
    
    weakConcepts.slice(0, 3).forEach(([concept, score], index) => {
        const day = index === 0 ? '今天' : index === 1 ? '明天' : '第3天';
        const time = index === 0 ? 30 : index === 1 ? 45 : 60;
        
        plan += `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 15px;">
                <h4 style="margin-bottom: 15px; color: #667eea;">
                    ${day}：重点攻克「${concept}」
                </h4>
                <ul style="margin-left: 20px; line-height: 1.8;">
                    <li>观看相关教学视频（15分钟）</li>
                    <li>完成5道针对性练习题（${time-15}分钟）</li>
                    <li>总结易错点和心得体会</li>
                </ul>
                <div style="margin-top: 10px; color: #666;">
                    ⏱️ 预计用时：${time}分钟
                </div>
            </div>
        `;
    });
    
    plan += `
        <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <h4 style="margin-bottom: 15px; color: #1976d2;">
                第4-7天：综合复习与提升
            </h4>
            <ul style="margin-left: 20px; line-height: 1.8;">
                <li>每天完成一套综合练习（包含所有知识点）</li>
                <li>重点关注之前的薄弱环节</li>
                <li>每天预计时间：60分钟</li>
            </ul>
        </div>
    </div>
    `;
    
    return plan;
}

function drawKnowledgeChart(conceptMastery) {
    const ctx = document.getElementById('knowledgeChart');
    if (!ctx) return;
    
    const labels = Object.keys(conceptMastery);
    const data = Object.values(conceptMastery).map(v => parseFloat(v));
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '掌握度 (%)',
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function drawTypeChart() {
    const ctx = document.getElementById('typeChart');
    if (!ctx) return;
    
    const typeStats = {
        'choice': { total: 0, correct: 0 },
        'judge': { total: 0, correct: 0 },
        'coding': { total: 0, correct: 0 }
    };
    
    currentStudent.answeredQuestions.forEach(answer => {
        if (typeStats[answer.type]) {
            typeStats[answer.type].total++;
            if (answer.correct) typeStats[answer.type].correct++;
        }
    });
    
    const labels = [];
    const totals = [];
    const corrects = [];
    
    for (let type in typeStats) {
        if (typeStats[type].total > 0) {
            const typeNames = {
                'choice': '选择题',
                'judge': '判断题',
                'coding': '编程题'
            };
            labels.push(typeNames[type]);
            totals.push(typeStats[type].total);
            corrects.push(typeStats[type].correct);
        }
    }
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '总题数',
                    data: totals,
                    backgroundColor: 'rgba(102, 126, 234, 0.6)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 1
                },
                {
                    label: '答对数',
                    data: corrects,
                    backgroundColor: 'rgba(40, 167, 69, 0.6)',
                    borderColor: 'rgba(40, 167, 69, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function drawCodingScoreChart() {
    const ctx = document.getElementById('codingScoreChart');
    if (!ctx) return;
    
    const avgCorrectness = currentStudent.scores.correctness.reduce((a, b) => a + b, 0) / currentStudent.scores.correctness.length;
    const avgQuality = currentStudent.scores.quality.reduce((a, b) => a + b, 0) / currentStudent.scores.quality.length;
    const avgPerformance = currentStudent.scores.performance.reduce((a, b) => a + b, 0) / currentStudent.scores.performance.length;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['功能正确性', '代码质量', '性能表现'],
            datasets: [{
                label: '平均分数',
                data: [avgCorrectness, avgQuality, avgPerformance],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.6)',
                    'rgba(255, 193, 7, 0.6)',
                    'rgba(40, 167, 69, 0.6)'
                ],
                borderColor: [
                    'rgba(102, 126, 234, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(40, 167, 69, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initializeQuestionBank();
    console.log('智能练习系统已加载');
});
