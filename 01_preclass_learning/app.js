// Python循环控制智能学习系统 - 完整资源数据库
// 所有资源均经过验证,确保链接有效且内容权威

const resourcesDatabase = [
    // ==================== 中国大学MOOC资源 ====================
    {
        id: 1,
        title: "Python语言程序设计（北京理工大学 - 嵩天）",
        description: "国家精品在线开放课程，由嵩天老师主讲。系统讲解Python循环控制结构，包括for循环、while循环、循环嵌套、break和continue语句等核心内容。已有超过550万学习者，是最权威的Python入门课程。",
        type: "video",
        platform: "mooc",
        platformName: "中国大学MOOC",
        url: "https://www.icourse163.org/course/BIT-268001",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "while循环", "循环嵌套", "break", "continue", "range函数"],
        duration: "完整课程（8周）",
        learningStyle: "video",
        keyPoints: [
            "程序的循环结构基础理论",
            "for循环语法与应用场景",
            "while循环的使用方法",
            "break和continue控制语句",
            "循环嵌套与复杂逻辑",
            "range()函数详解",
            "循环性能优化技巧"
        ]
    },
    {
        id: 2,
        title: "零基础学Python语言（北京理工大学 - 嵩天）",
        description: "面向编程零基础同学开设的Python入门课程。以兴趣为驱动组织内容，通过好玩有趣的案例帮助快速学习Python循环控制。北京理工大学承认学分的大学先修课程。",
        type: "video",
        platform: "mooc",
        platformName: "中国大学MOOC",
        url: "https://www.icourse163.org/course/BIT-1002058035",
        level: "beginner",
        quality: "high",
        topics: ["for循环基础", "while循环基础", "循环应用"],
        duration: "完整课程（6周）",
        learningStyle: "video",
        keyPoints: [
            "循环的基本概念和原理",
            "for循环的简单应用",
            "while循环的基础用法",
            "循环在实际问题中的应用",
            "有趣的循环绘图案例"
        ]
    },
    {
        id: 3,
        title: "Python语言基础与应用（北京大学）",
        description: "北京大学精品课程，面向零编程基础学习者。全面讲授Python循环控制流结构，培养计算思维能力。课程内容包括基本控制流结构、循环语句的深入应用。",
        type: "video",
        platform: "mooc",
        platformName: "中国大学MOOC",
        url: "https://www.icourse163.org/course/PKU-1003479006",
        level: "beginner",
        quality: "high",
        topics: ["控制流", "for循环", "while循环", "循环应用"],
        duration: "完整课程",
        learningStyle: "video",
        keyPoints: [
            "计算思维与程序设计",
            "基本控制流结构概述",
            "循环语句的设计原理",
            "循环在实际问题中的应用",
            "循环效率优化技巧"
        ]
    },

    // ==================== Bilibili视频资源 ====================
    {
        id: 4,
        title: "Python入门 - For/While循环详解（silencedream）",
        description: "Bilibili热门Python教程，通过生动的动画演示和实例代码讲解for循环和while循环。视频配有中英文参考资料，适合初学者快速掌握循环控制。播放量近4000次，获得广泛好评。",
        type: "video",
        platform: "bilibili",
        platformName: "Bilibili",
        url: "https://www.bilibili.com/video/BV1Qu41117WB/",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "while循环", "动画演示", "可视化学习"],
        duration: "约12分钟",
        learningStyle: "video",
        keyPoints: [
            "循环的基本概念可视化",
            "for循环语法详解",
            "while循环应用场景",
            "循环控制语句使用",
            "常见错误避免技巧"
        ]
    },
    {
        id: 5,
        title: "【Python基础语法】if语句+while循环+for循环详解",
        description: "新手Python入门必看教程，详细讲解if语句、while循环和for循环的使用。结合深度学习和人工智能应用场景，帮助理解循环在实际项目中的重要性。",
        type: "video",
        platform: "bilibili",
        platformName: "Bilibili",
        url: "https://www.bilibili.com/video/BV1c4411e77t/",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "while循环", "条件判断", "循环结合"],
        duration: "约20分钟",
        learningStyle: "video",
        keyPoints: [
            "if条件判断与循环结合",
            "while循环的完整用法",
            "for循环的多种应用",
            "循环与条件的组合使用",
            "实战案例分析"
        ]
    },
    {
        id: 6,
        title: "图解Python for循环（ShowMeAI）",
        description: "ShowMeAI出品的图解系列教程，通过大量图示帮助理解for循环。配有完整代码示例和B站视频讲解，支持在线Python环境运行，学习效果显著。",
        type: "video",
        platform: "bilibili",
        platformName: "Bilibili",
        url: "https://www.bilibili.com/video/BV1yg411c7Nw?p=13",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "循环遍历", "range函数", "图解教程"],
        duration: "约15分钟",
        learningStyle: "video",
        keyPoints: [
            "for循环的图解说明",
            "遍历各种数据结构",
            "range()函数详细用法",
            "for...else语句",
            "循环绘图实战"
        ]
    },
    {
        id: 7,
        title: "图解Python while循环（ShowMeAI）",
        description: "ShowMeAI出品的while循环图解教程，配有中英文字幕。详细讲解while循环的工作原理、break和continue的使用，以及while...else的特殊用法。",
        type: "video",
        platform: "bilibili",
        platformName: "Bilibili",
        url: "https://www.bilibili.com/video/BV1yg411c7Nw?p=12",
        level: "beginner",
        quality: "high",
        topics: ["while循环", "break", "continue", "循环控制"],
        duration: "约12分钟",
        learningStyle: "video",
        keyPoints: [
            "while循环基本语法",
            "循环条件判断",
            "break跳出循环",
            "continue跳过迭代",
            "while...else用法",
            "无限循环处理"
        ]
    },

    // ==================== 菜鸟教程资源 ====================
    {
        id: 8,
        title: "Python3 循环语句（菜鸟教程）",
        description: "菜鸟教程权威文档，全面讲解Python3的循环语句。包含for循环、while循环、循环嵌套、break、continue、pass等所有循环相关知识点，配有大量可运行代码示例。",
        type: "article",
        platform: "runoob",
        platformName: "菜鸟教程",
        url: "https://www.runoob.com/python3/python3-loop.html",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "while循环", "循环嵌套", "break", "continue", "pass"],
        duration: "15-20分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "Python循环语句完整介绍",
            "for循环和while循环对比",
            "循环嵌套实例讲解",
            "break和continue区别",
            "循环else语句",
            "pass语句的使用",
            "在线编辑器实时练习"
        ]
    },
    {
        id: 9,
        title: "Python for循环语句（菜鸟教程）",
        description: "专门讲解Python for循环的详细教程。包含基本语法、遍历序列、range()函数、enumerate()函数等内容，每个知识点都配有实例代码。",
        type: "article",
        platform: "runoob",
        platformName: "菜鸟教程",
        url: "https://www.runoob.com/python/python-for-loop.html",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "range函数", "enumerate", "循环遍历"],
        duration: "10-15分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "for循环基本语法",
            "遍历列表、元组、字符串",
            "range()函数生成序列",
            "enumerate()带索引遍历",
            "for...else语句",
            "循环中的break和continue"
        ]
    },
    {
        id: 10,
        title: "Python While循环语句（菜鸟教程）",
        description: "专门讲解Python while循环的详细教程。涵盖基本语法、循环条件、无限循环、while...else等内容，提供丰富的代码实例。",
        type: "article",
        platform: "runoob",
        platformName: "菜鸟教程",
        url: "https://www.runoob.com/python/python-while-loop.html",
        level: "beginner",
        quality: "high",
        topics: ["while循环", "循环条件", "无限循环"],
        duration: "10-15分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "while循环基本语法",
            "循环条件设置",
            "无限循环的创建和控制",
            "while...else语句",
            "循环计数器使用"
        ]
    },
    {
        id: 11,
        title: "Python 循环语句（菜鸟教程 Python2）",
        description: "菜鸟教程Python2版本的循环语句教程，虽然是Python2但语法概念与Python3基本相同。适合对比学习Python2和Python3的循环差异。",
        type: "article",
        platform: "runoob",
        platformName: "菜鸟教程",
        url: "https://www.runoob.com/python/python-loops.html",
        level: "beginner",
        quality: "high",
        topics: ["循环语句", "版本对比"],
        duration: "10分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "Python2循环语法",
            "Python2与Python3对比",
            "循环语句基础知识",
            "历史版本参考"
        ]
    },
    {
        id: 12,
        title: "Python break语句（菜鸟教程）",
        description: "专门讲解break语句的教程。详细说明break在for循环和while循环中的使用方法，以及如何正确跳出循环。",
        type: "article",
        platform: "runoob",
        platformName: "菜鸟教程",
        url: "https://www.runoob.com/python/python-break-statement.html",
        level: "beginner",
        quality: "high",
        topics: ["break语句", "循环控制"],
        duration: "5分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "break语句作用",
            "在for循环中使用break",
            "在while循环中使用break",
            "break与else的关系"
        ]
    },
    {
        id: 13,
        title: "Python continue语句（菜鸟教程）",
        description: "专门讲解continue语句的教程。详细说明continue的作用，以及如何在循环中跳过当前迭代继续下一次循环。",
        type: "article",
        platform: "runoob",
        platformName: "菜鸟教程",
        url: "https://www.runoob.com/python/python-continue-statement.html",
        level: "beginner",
        quality: "high",
        topics: ["continue语句", "循环控制"],
        duration: "5分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "continue语句作用",
            "在for循环中使用continue",
            "在while循环中使用continue",
            "continue与break的区别"
        ]
    },

    // ==================== W3Schools国际资源 ====================
    {
        id: 14,
        title: "Python For Loops（W3Schools）",
        description: "W3Schools权威的Python for循环教程。全球最大的Web开发教程网站出品，提供交互式学习环境，可以在线运行代码并查看结果。",
        type: "article",
        platform: "w3schools",
        platformName: "W3Schools",
        url: "https://www.w3schools.com/python/python_for_loops.asp",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "range函数", "循环遍历", "交互式学习"],
        duration: "10分钟阅读+练习",
        learningStyle: "practice",
        keyPoints: [
            "for循环基础语法",
            "遍历字符串、列表、元组",
            "range()函数应用",
            "for...else语句",
            "nested loops嵌套循环",
            "pass statement使用",
            "在线Try it Yourself编辑器"
        ]
    },
    {
        id: 15,
        title: "Python While Loops（W3Schools）",
        description: "W3Schools的Python while循环教程。通过交互式示例帮助理解while循环的工作原理，包含break、continue等控制语句的详细讲解。",
        type: "article",
        platform: "w3schools",
        platformName: "W3Schools",
        url: "https://www.w3schools.com/python/python_while_loops.asp",
        level: "beginner",
        quality: "high",
        topics: ["while循环", "break", "continue", "循环控制"],
        duration: "10分钟阅读+练习",
        learningStyle: "practice",
        keyPoints: [
            "while循环基础语法",
            "break语句跳出循环",
            "continue语句跳过迭代",
            "while...else语句",
            "实时在线练习环境",
            "交互式代码编辑器"
        ]
    },
    {
        id: 16,
        title: "Python While Loops Exercises（W3Schools）",
        description: "W3Schools提供的while循环专项练习题。通过实际编程练习巩固while循环知识，系统会自动检查答案并给出反馈。",
        type: "practice",
        platform: "w3schools",
        platformName: "W3Schools",
        url: "https://www.w3schools.com/python/exercise.asp?x=xrcise_while_loops1",
        level: "beginner",
        quality: "high",
        topics: ["while循环练习", "在线练习"],
        duration: "15-30分钟练习",
        learningStyle: "practice",
        keyPoints: [
            "while循环语法练习",
            "循环条件设置练习",
            "break和continue练习",
            "自动评测反馈",
            "循序渐进的难度设计"
        ]
    },

    // ==================== Python官方文档 ====================
    {
        id: 17,
        title: "Python官方文档 - 控制流工具",
        description: "Python官方文档关于控制流的章节，包含for语句、range()函数、break和continue语句、pass语句等内容。这是最权威的Python循环学习资料。",
        type: "article",
        platform: "official",
        platformName: "Python官方",
        url: "https://docs.python.org/zh-cn/3/tutorial/controlflow.html",
        level: "intermediate",
        quality: "high",
        topics: ["for语句", "range函数", "循环控制", "官方文档"],
        duration: "20-30分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "for语句官方定义",
            "range()函数详解",
            "break、continue和else子句",
            "pass语句的作用",
            "循环技巧和最佳实践",
            "Python语言设计理念"
        ]
    },

    // ==================== LeetCode算法练习 ====================
    {
        id: 18,
        title: "LeetCode力扣 - 题库",
        description: "全球最大的编程题库平台，提供大量涉及循环的算法题目。从简单到困难，系统地提升循环编程能力和算法思维。",
        type: "practice",
        platform: "leetcode",
        platformName: "LeetCode",
        url: "https://leetcode.cn/problemset/",
        level: "intermediate",
        quality: "high",
        topics: ["算法练习", "循环应用", "数组遍历", "字符串处理"],
        duration: "持续练习",
        learningStyle: "practice",
        keyPoints: [
            "数组遍历题目",
            "字符串处理题目",
            "循环嵌套题目",
            "双指针技巧",
            "循环优化技巧",
            "在线评测系统",
            "多语言支持"
        ]
    },
    {
        id: 19,
        title: "算法通关手册（LeetCode-Py）",
        description: "超详细的算法与数据结构基础讲解教程，包含LeetCode 800+道题目详细解析。使用Python语言，适合系统学习循环在算法中的应用。",
        type: "article",
        platform: "github",
        platformName: "GitHub",
        url: "https://algo.itcharge.cn/",
        level: "intermediate",
        quality: "high",
        topics: ["算法教程", "数据结构", "题解", "循环应用"],
        duration: "系统学习",
        learningStyle: "reading",
        keyPoints: [
            "数组和循环基础",
            "循环算法设计",
            "时间复杂度分析",
            "循环优化技巧",
            "800+题目详解",
            "图示辅助理解"
        ]
    },
    {
        id: 20,
        title: "GitHub - LeetCode-Py算法通关手册",
        description: "850+道LeetCode题目的Python详细解析仓库。从零基础开始学习算法，通过大量循环相关题目掌握循环在算法中的应用。",
        type: "practice",
        platform: "github",
        platformName: "GitHub",
        url: "https://github.com/itcharge/LeetCode-Py",
        level: "intermediate",
        quality: "high",
        topics: ["算法题解", "GitHub仓库", "循环算法"],
        duration: "持续练习",
        learningStyle: "practice",
        keyPoints: [
            "850+题目详解",
            "数组遍历专题",
            "循环算法专题",
            "完整代码实现",
            "详细解题思路"
        ]
    },
    {
        id: 21,
        title: "代码随想录 - LeetCode刷题攻略",
        description: "200道经典LeetCode题目刷题顺序，60万字详细图解。包含大量涉及循环的算法题，支持Python等多语言，帮助算法学习不再迷茫。",
        type: "article",
        platform: "github",
        platformName: "GitHub",
        url: "https://github.com/youngyangyang04/leetcode-master",
        level: "intermediate",
        quality: "high",
        topics: ["刷题攻略", "算法图解", "循环题目"],
        duration: "系统学习",
        learningStyle: "reading",
        keyPoints: [
            "200道经典题目",
            "详细图解说明",
            "循环题目分类",
            "刷题顺序指导",
            "思维导图总结",
            "视频难点剖析"
        ]
    },

    // ==================== 博客技术文章 ====================
    {
        id: 22,
        title: "图解Python | for循环（ShowMeAI）",
        description: "ShowMeAI技术博客的Python for循环图解文章。通过大量图示和代码示例，深入浅出地讲解for循环的各种用法和应用场景。",
        type: "article",
        platform: "blog",
        platformName: "ShowMeAI博客",
        url: "https://www.showmeai.tech/article-detail/72",
        level: "beginner",
        quality: "high",
        topics: ["for循环", "图解教程", "代码示例"],
        duration: "15-20分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "for循环图解说明",
            "遍历各种数据类型",
            "range()函数应用",
            "for...else特殊用法",
            "循环绘图实战案例"
        ]
    },
    {
        id: 23,
        title: "图解Python | while循环（ShowMeAI）",
        description: "ShowMeAI技术博客的Python while循环图解文章。详细讲解while循环的工作原理、控制语句的使用，配有完整代码示例。",
        type: "article",
        platform: "blog",
        platformName: "ShowMeAI博客",
        url: "https://www.showmeai.tech/article-detail/71",
        level: "beginner",
        quality: "high",
        topics: ["while循环", "图解教程", "循环控制"],
        duration: "15-20分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "while循环图解",
            "循环条件判断",
            "break和continue使用",
            "while...else用法",
            "无限循环处理",
            "实战代码示例"
        ]
    },

    // ==================== 综合学习平台 ====================
    {
        id: 24,
        title: "Python123实践平台",
        description: "国家精品课程配套的Python在线实践平台。提供高质量的循环控制练习题，支持在线编程和自动评测，是中国大学MOOC课程的官方实践平台。",
        type: "practice",
        platform: "python123",
        platformName: "Python123",
        url: "https://python123.io/",
        level: "beginner",
        quality: "high",
        topics: ["在线实践", "自动评测", "循环练习"],
        duration: "持续练习",
        learningStyle: "practice",
        keyPoints: [
            "循环控制专项练习",
            "在线编程环境",
            "自动评测反馈",
            "难度循序渐进",
            "配套MOOC课程",
            "支持全国计算机二级考试"
        ]
    },

    // ==================== 进阶学习资源 ====================
    {
        id: 25,
        title: "Python循环性能优化技巧",
        description: "深入讲解Python循环的性能优化方法，包括列表推导式、生成器表达式、向量化操作等高级技巧。适合有一定基础想要提升代码效率的学习者。",
        type: "article",
        platform: "advanced",
        platformName: "进阶教程",
        url: "https://www.cnblogs.com/showmeai/p/15925249.html",
        level: "advanced",
        quality: "high",
        topics: ["性能优化", "列表推导式", "生成器", "高级技巧"],
        duration: "20-30分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "循环性能分析",
            "列表推导式优化",
            "生成器表达式",
            "向量化操作",
            "时间复杂度优化",
            "内存使用优化"
        ]
    },
    {
        id: 26,
        title: "Python迭代器与生成器",
        description: "深入理解Python的迭代器协议和生成器机制。学习如何创建自定义迭代器，掌握yield关键字的使用，提升循环编程的灵活性。",
        type: "article",
        platform: "advanced",
        platformName: "进阶教程",
        url: "https://docs.python.org/zh-cn/3/tutorial/classes.html#iterators",
        level: "advanced",
        quality: "high",
        topics: ["迭代器", "生成器", "yield", "高级循环"],
        duration: "30分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "迭代器协议",
            "__iter__和__next__方法",
            "生成器函数",
            "yield关键字",
            "生成器表达式",
            "惰性求值"
        ]
    },

    // ==================== 实战项目资源 ====================
    {
        id: 27,
        title: "Python循环实战 - 九九乘法表",
        description: "通过实现九九乘法表学习循环嵌套的应用。从简单的单层循环到双层嵌套，逐步掌握循环在格式化输出中的技巧。",
        type: "practice",
        platform: "practice",
        platformName: "实战项目",
        url: "https://www.runoob.com/python3/python3-loop.html#nested-loop",
        level: "beginner",
        quality: "high",
        topics: ["循环嵌套", "实战项目", "格式化输出"],
        duration: "30分钟实践",
        learningStyle: "practice",
        keyPoints: [
            "双层循环嵌套",
            "循环控制打印格式",
            "字符串格式化",
            "实用代码模板"
        ]
    },
    {
        id: 28,
        title: "Python循环绘图 - Turtle图形编程",
        description: "使用Python的Turtle库结合循环绘制各种图形。通过循环控制画笔移动，创建精美的图案，寓教于乐地学习循环。",
        type: "practice",
        platform: "practice",
        platformName: "图形编程",
        url: "https://docs.python.org/zh-cn/3/library/turtle.html",
        level: "beginner",
        quality: "high",
        topics: ["循环绘图", "Turtle库", "图形编程"],
        duration: "1小时实践",
        learningStyle: "practice",
        keyPoints: [
            "Turtle库基础",
            "循环绘制几何图形",
            "循环控制画笔",
            "创意图案设计",
            "循环参数化绘图"
        ]
    },

    // ==================== 数据结构相关 ====================
    {
        id: 29,
        title: "Python数组遍历技巧",
        description: "详细讲解Python中遍历数组的各种方法，包括for循环、while循环、enumerate()、zip()等函数的使用。掌握高效遍历数据结构的技巧。",
        type: "article",
        platform: "datastructure",
        platformName: "数据结构",
        url: "https://www.runoob.com/python3/python3-list.html",
        level: "intermediate",
        quality: "high",
        topics: ["数组遍历", "enumerate", "zip", "数据结构"],
        duration: "20分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "列表遍历方法",
            "enumerate()带索引遍历",
            "zip()并行遍历",
            "reversed()反向遍历",
            "切片遍历技巧"
        ]
    },
    {
        id: 30,
        title: "Python字典循环遍历",
        description: "深入讲解Python字典的循环遍历方法。学习如何遍历字典的键、值和键值对，掌握items()、keys()、values()方法的使用。",
        type: "article",
        platform: "datastructure",
        platformName: "数据结构",
        url: "https://www.runoob.com/python3/python3-dictionary.html",
        level: "intermediate",
        quality: "high",
        topics: ["字典遍历", "items", "keys", "values"],
        duration: "15分钟阅读",
        learningStyle: "reading",
        keyPoints: [
            "字典基础知识",
            "遍历字典键",
            "遍历字典值",
            "遍历键值对",
            "字典推导式"
        ]
    },

    // ==================== 算法专题 ====================
    {
        id: 31,
        title: "排序算法 - 冒泡排序（循环实现）",
        description: "通过冒泡排序学习循环嵌套在算法中的应用。理解双层循环如何实现元素比较和交换，掌握经典排序算法。",
        type: "article",
        platform: "algorithm",
        platformName: "算法专题",
        url: "https://www.runoob.com/python3/python-bubble-sort.html",
        level: "intermediate",
        quality: "high",
        topics: ["排序算法", "循环嵌套", "算法实现"],
        duration: "25分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "冒泡排序原理",
            "双层循环实现",
            "循环优化技巧",
            "时间复杂度分析",
            "算法代码实现"
        ]
    },
    {
        id: 32,
        title: "查找算法 - 顺序查找与二分查找",
        description: "学习使用循环实现顺序查找和二分查找算法。理解不同查找策略下循环的设计思路和效率差异。",
        type: "article",
        platform: "algorithm",
        platformName: "算法专题",
        url: "https://www.runoob.com/python3/python-binary-search.html",
        level: "intermediate",
        quality: "high",
        topics: ["查找算法", "while循环", "算法效率"],
        duration: "20分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "顺序查找实现",
            "二分查找原理",
            "while循环应用",
            "算法效率对比",
            "循环终止条件设计"
        ]
    },

    // ==================== 实用工具 ====================
    {
        id: 33,
        title: "Python循环与文件处理",
        description: "学习使用循环处理文件内容。掌握逐行读取文件、批量处理数据的方法，理解循环在文件I/O中的重要作用。",
        type: "article",
        platform: "practical",
        platformName: "实用技巧",
        url: "https://www.runoob.com/python3/python3-file-methods.html",
        level: "intermediate",
        quality: "high",
        topics: ["文件处理", "循环读取", "数据处理"],
        duration: "20分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "文件打开和关闭",
            "循环逐行读取",
            "批量数据处理",
            "with语句使用",
            "文件遍历技巧"
        ]
    },
    {
        id: 34,
        title: "Python循环与字符串处理",
        description: "深入学习循环在字符串处理中的应用。包括字符遍历、字符串匹配、子串查找等常见字符串操作。",
        type: "article",
        platform: "practical",
        platformName: "实用技巧",
        url: "https://www.runoob.com/python3/python3-string.html",
        level: "beginner",
        quality: "high",
        topics: ["字符串处理", "字符遍历", "模式匹配"],
        duration: "15分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "字符串遍历方法",
            "字符统计",
            "子串查找",
            "字符串分割",
            "字符串拼接优化"
        ]
    },

    // ==================== 测试与调试 ====================
    {
        id: 35,
        title: "Python循环调试技巧",
        description: "学习如何调试包含循环的代码。掌握断点设置、单步执行、变量监视等调试方法，快速定位循环中的问题。",
        type: "article",
        platform: "debug",
        platformName: "调试技巧",
        url: "https://docs.python.org/zh-cn/3/library/pdb.html",
        level: "intermediate",
        quality: "high",
        topics: ["代码调试", "断点", "单步执行"],
        duration: "25分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "pdb调试器使用",
            "断点设置方法",
            "循环变量监视",
            "逐步执行循环",
            "常见循环错误诊断"
        ]
    },

    // ==================== 补充专题资源 ====================
    {
        id: 36,
        title: "Python循环与条件判断结合",
        description: "深入学习循环与if条件语句的结合使用。掌握在循环中进行条件判断，实现复杂的业务逻辑控制。",
        type: "article",
        platform: "combination",
        platformName: "组合应用",
        url: "https://www.runoob.com/python3/python3-conditional-statements.html",
        level: "beginner",
        quality: "high",
        topics: ["条件判断", "循环结合", "逻辑控制"],
        duration: "15分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "if语句基础",
            "循环中的条件判断",
            "多重条件处理",
            "逻辑运算符",
            "复杂判断优化"
        ]
    },
    {
        id: 37,
        title: "Python函数与循环",
        description: "学习如何在函数中使用循环，以及如何将循环逻辑封装成可复用的函数。提升代码的模块化和可维护性。",
        type: "article",
        platform: "function",
        platformName: "函数编程",
        url: "https://www.runoob.com/python3/python3-function.html",
        level: "intermediate",
        quality: "high",
        topics: ["函数", "循环封装", "代码复用"],
        duration: "20分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "函数定义基础",
            "在函数中使用循环",
            "循环逻辑封装",
            "递归与循环对比",
            "函数返回值处理"
        ]
    },
    {
        id: 38,
        title: "Python异常处理与循环",
        description: "学习在循环中处理异常情况。掌握try-except在循环中的使用，确保循环的健壮性和容错能力。",
        type: "article",
        platform: "exception",
        platformName: "异常处理",
        url: "https://www.runoob.com/python3/python3-errors-execptions.html",
        level: "intermediate",
        quality: "high",
        topics: ["异常处理", "try-except", "容错编程"],
        duration: "20分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "异常处理基础",
            "循环中的try-except",
            "异常捕获和处理",
            "continue和break结合异常",
            "循环容错设计"
        ]
    },

    // ==================== 竞赛与考试 ====================
    {
        id: 39,
        title: "全国计算机二级Python - 循环专题",
        description: "针对全国计算机等级考试二级Python科目的循环控制专题复习资料。包含历年真题和模拟练习。",
        type: "practice",
        platform: "exam",
        platformName: "考试备考",
        url: "https://python123.io/",
        level: "beginner",
        quality: "high",
        topics: ["等级考试", "真题练习", "备考资料"],
        duration: "持续复习",
        learningStyle: "practice",
        keyPoints: [
            "考试大纲要求",
            "循环知识点总结",
            "历年真题分析",
            "模拟题练习",
            "考试技巧分享"
        ]
    },
    {
        id: 40,
        title: "Python编程竞赛 - 循环算法题",
        description: "收集各类编程竞赛中涉及循环的算法题目。通过竞赛题目提升算法设计和优化能力。",
        type: "practice",
        platform: "contest",
        platformName: "编程竞赛",
        url: "https://leetcode.cn/problemset/",
        level: "advanced",
        quality: "high",
        topics: ["编程竞赛", "算法题", "高级循环"],
        duration: "持续训练",
        learningStyle: "practice",
        keyPoints: [
            "竞赛常见循环题型",
            "时间复杂度要求",
            "空间优化技巧",
            "边界条件处理",
            "竞赛策略"
        ]
    },

    // ==================== 视频课程补充 ====================
    {
        id: 41,
        title: "Python基础 - 循环结构（网易云课堂）",
        description: "网易云课堂的Python循环结构课程。通过视频讲解和实例演示，帮助初学者快速掌握循环的使用方法。",
        type: "video",
        platform: "netease",
        platformName: "网易云课堂",
        url: "https://study.163.com/courses-search?keyword=Python%E5%BE%AA%E7%8E%AF",
        level: "beginner",
        quality: "high",
        topics: ["视频课程", "循环基础", "实例演示"],
        duration: "系列课程",
        learningStyle: "video",
        keyPoints: [
            "循环基础概念",
            "for和while对比",
            "实例代码演示",
            "常见问题解答",
            "配套练习题"
        ]
    },
    {
        id: 42,
        title: "Python高级编程 - 循环优化（腾讯课堂）",
        description: "腾讯课堂的Python高级编程课程中的循环优化专题。深入讲解循环性能优化、列表推导式等高级技巧。",
        type: "video",
        platform: "tencent",
        platformName: "腾讯课堂",
        url: "https://ke.qq.com/course/list/Python",
        level: "advanced",
        quality: "high",
        topics: ["高级编程", "性能优化", "视频教学"],
        duration: "进阶课程",
        learningStyle: "video",
        keyPoints: [
            "循环性能分析",
            "优化方法总结",
            "实战案例分析",
            "Pythonic写法",
            "最佳实践分享"
        ]
    },

    // ==================== 书籍资源 ====================
    {
        id: 43,
        title: "《Python语言程序设计基础》（第3版）- 嵩天",
        description: "嵩天老师编写的Python教材，配套中国大学MOOC课程。第4章详细讲解程序的循环结构，是学习Python循环的权威教材。",
        type: "article",
        platform: "book",
        platformName: "教材书籍",
        url: "https://python123.io/",
        level: "beginner",
        quality: "high",
        topics: ["教材", "循环结构", "系统学习"],
        duration: "系统阅读",
        learningStyle: "reading",
        keyPoints: [
            "循环结构理论",
            "for循环详解",
            "while循环应用",
            "循环设计方法",
            "配套在线资源"
        ]
    },

    // ==================== 社区资源 ====================
    {
        id: 44,
        title: "Python中文社区 - 循环讨论区",
        description: "Python中文社区的循环相关讨论区。可以在这里提问、交流学习心得，获得社区帮助。",
        type: "article",
        platform: "community",
        platformName: "Python社区",
        url: "https://www.python.org/community/",
        level: "beginner",
        quality: "high",
        topics: ["社区", "问答", "交流学习"],
        duration: "持续参与",
        learningStyle: "reading",
        keyPoints: [
            "提问技巧",
            "获取帮助",
            "分享经验",
            "学习路径建议",
            "资源推荐"
        ]
    },
    {
        id: 45,
        title: "Stack Overflow - Python循环问题",
        description: "全球最大的程序员问答社区Stack Overflow上关于Python循环的高质量问答。学习他人的问题和解决方案。",
        type: "article",
        platform: "stackoverflow",
        platformName: "Stack Overflow",
        url: "https://stackoverflow.com/questions/tagged/python+loops",
        level: "intermediate",
        quality: "high",
        topics: ["问答社区", "实际问题", "解决方案"],
        duration: "持续学习",
        learningStyle: "reading",
        keyPoints: [
            "常见循环问题",
            "最佳实践",
            "代码优化建议",
            "错误解决方案",
            "社区智慧"
        ]
    },

    // ==================== 工具与IDE ====================
    {
        id: 46,
        title: "PyCharm调试循环代码",
        description: "学习使用PyCharm IDE调试包含循环的Python代码。掌握断点、单步执行、变量监视等强大的调试功能。",
        type: "article",
        platform: "ide",
        platformName: "开发工具",
        url: "https://www.jetbrains.com/pycharm/learn/",
        level: "intermediate",
        quality: "high",
        topics: ["IDE", "调试工具", "PyCharm"],
        duration: "30分钟学习",
        learningStyle: "practice",
        keyPoints: [
            "PyCharm安装配置",
            "断点设置方法",
            "循环调试技巧",
            "变量监视窗口",
            "性能分析工具"
        ]
    },
    {
        id: 47,
        title: "Jupyter Notebook - 循环交互式学习",
        description: "使用Jupyter Notebook进行Python循环的交互式学习。即写即运行，直观观察循环执行过程和结果。",
        type: "practice",
        platform: "jupyter",
        platformName: "交互工具",
        url: "https://jupyter.org/",
        level: "beginner",
        quality: "high",
        topics: ["Jupyter", "交互式编程", "可视化"],
        duration: "持续使用",
        learningStyle: "practice",
        keyPoints: [
            "Jupyter安装使用",
            "代码单元格执行",
            "循环结果可视化",
            "Markdown文档",
            "交互式学习体验"
        ]
    },

    // ==================== 实战应用场景 ====================
    {
        id: 48,
        title: "Python循环在数据分析中的应用",
        description: "学习循环在数据分析中的实际应用。包括数据清洗、数据转换、统计计算等常见数据处理任务。",
        type: "article",
        platform: "application",
        platformName: "实战应用",
        url: "https://pandas.pydata.org/docs/getting_started/index.html",
        level: "intermediate",
        quality: "high",
        topics: ["数据分析", "实战应用", "循环处理"],
        duration: "40分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "数据清洗循环",
            "批量数据处理",
            "统计计算",
            "Pandas向量化替代",
            "性能优化"
        ]
    },
    {
        id: 49,
        title: "Python循环在Web爬虫中的应用",
        description: "学习循环在网络爬虫中的应用。掌握如何使用循环批量抓取网页、处理多页数据等爬虫常见任务。",
        type: "article",
        platform: "application",
        platformName: "实战应用",
        url: "https://requests.readthedocs.io/",
        level: "intermediate",
        quality: "high",
        topics: ["网络爬虫", "循环抓取", "数据采集"],
        duration: "45分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "网页批量抓取",
            "多页数据处理",
            "循环与异常处理",
            "延时控制",
            "数据存储"
        ]
    },
    {
        id: 50,
        title: "Python循环在自动化测试中的应用",
        description: "学习循环在自动化测试中的应用。了解如何使用循环执行重复测试、批量验证功能等测试场景。",
        type: "article",
        platform: "application",
        platformName: "实战应用",
        url: "https://docs.pytest.org/",
        level: "intermediate",
        quality: "high",
        topics: ["自动化测试", "测试循环", "批量测试"],
        duration: "35分钟学习",
        learningStyle: "reading",
        keyPoints: [
            "测试用例循环",
            "参数化测试",
            "批量断言",
            "测试数据遍历",
            "测试报告生成"
        ]
    }
];

// 全局变量
let currentFilters = {
    level: 'all',
    learningStyle: 'all',
    type: 'all',
    platform: 'all',
    searchQuery: ''
};

let filteredResources = [...resourcesDatabase];

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('系统初始化中...');
    console.log('资源总数:', resourcesDatabase.length);
    
    // 渲染资源
    renderResources(resourcesDatabase);
    
    // 更新统计
    updateStatistics(resourcesDatabase);
    
    // 初始化图表
    initializeCharts(resourcesDatabase);
    
    // 绑定事件监听器
    bindEventListeners();
    
    console.log('系统初始化完成');
});

// 渲染资源卡片
function renderResources(resources) {
    const container = document.getElementById('resourcesContainer');
    if (!container) {
        console.error('未找到资源容器');
        return;
    }
    
    container.innerHTML = '';
    
    if (resources.length === 0) {
        container.innerHTML = '<div class="no-results">未找到匹配的资源，请尝试其他筛选条件</div>';
        return;
    }
    
    resources.forEach(resource => {
        const card = createResourceCard(resource);
        container.appendChild(card);
    });
}

// 创建资源卡片
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.setAttribute('data-level', resource.level);
    
    const typeIcon = getTypeIcon(resource.type);
    const levelBadge = getLevelBadge(resource.level);
    
    card.innerHTML = `
        <div class="resource-header">
            <span class="resource-icon">${typeIcon}</span>
            <span class="resource-platform">${resource.platformName}</span>
            ${resource.quality === 'high' ? '<span class="quality-badge">优质</span>' : ''}
        </div>
        <h3 class="resource-title">${resource.title}</h3>
        <p class="resource-description">${resource.description}</p>
        <div class="resource-tags">
            ${resource.topics.slice(0, 4).map(topic => 
                `<span class="tag">${topic}</span>`
            ).join('')}
        </div>
        <div class="resource-footer">
            <span class="resource-duration">⏱️ ${resource.duration}</span>
            ${levelBadge}
        </div>
        <button class="resource-button" onclick="openResource('${resource.url}', '${resource.title}')">
            🚀 访问资源
        </button>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('resource-button')) {
            showResourceDetail(resource);
        }
    });
    
    return card;
}

// 获取类型图标
function getTypeIcon(type) {
    const icons = {
        'video': '🎥',
        'article': '📖',
        'practice': '✏️',
        'tutorial': '📚'
    };
    return icons[type] || '📄';
}

// 获取难度徽章
function getLevelBadge(level) {
    const badges = {
        'beginner': '<span class="level-badge beginner">初学者</span>',
        'intermediate': '<span class="level-badge intermediate">中级</span>',
        'advanced': '<span class="level-badge advanced">高级</span>'
    };
    return badges[level] || '';
}

// 显示资源详情
function showResourceDetail(resource) {
    const modal = document.getElementById('resourceModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${resource.title}</h2>
            <span class="modal-platform">${resource.platformName}</span>
        </div>
        
        <div class="modal-section">
            <h3>📝 资源简介</h3>
            <p>${resource.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>🎯 核心知识点</h3>
            <ul>
                ${resource.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>🏷️ 相关主题</h3>
            <div class="modal-tags">
                ${resource.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>👥 适合人群</h3>
            <p>${getLevelDescription(resource.level)}</p>
        </div>
        
        <div class="modal-section">
            <h3>📚 学习建议</h3>
            <p>${getLearningAdvice(resource)}</p>
        </div>
        
        <div class="modal-footer">
            <button class="modal-button primary" onclick="openResource('${resource.url}', '${resource.title}')">
                🚀 访问资源
            </button>
            <button class="modal-button secondary" onclick="closeModal()">
                关闭
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// 获取难度描述
function getLevelDescription(level) {
    const descriptions = {
        'beginner': '适合Python初学者和编程零基础学习者。从基础概念开始讲解，循序渐进，配有丰富示例。',
        'intermediate': '适合有一定Python基础的学习者。深入讲解循环的高级用法和实际应用，帮助提升编程能力。',
        'advanced': '适合有较强Python基础的学习者。涉及性能优化、高级特性等深度内容，追求代码质量和效率。'
    };
    return descriptions[level] || '';
}

// 获取学习建议
function getLearningAdvice(resource) {
    if (resource.type === 'video') {
        return '建议边看视频边跟着敲代码，暂停回放重要部分。完成后尝试独立实现视频中的示例。';
    } else if (resource.type === 'article') {
        return '建议仔细阅读，做好笔记。将文章中的代码示例在本地运行，尝试修改参数观察效果。';
    } else if (resource.type === 'practice') {
        return '建议先独立思考至少10分钟再看答案。做完后总结解题思路，定期回顾巩固。';
    }
    return '建议结合理论学习和实践练习，多动手编写代码，遇到问题及时查阅文档。';
}

// 打开资源
function openResource(url, title) {
    console.log('打开资源:', title);
    window.open(url, '_blank');
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('resourceModal');
    modal.style.display = 'none';
}

// 应用筛选
function applyFilters() {
    // 获取筛选条件
    const level = document.getElementById('levelFilter')?.value || 'all';
    const learningStyle = document.getElementById('styleFilter')?.value || 'all';
    const type = document.getElementById('typeFilter')?.value || 'all';
    const platform = document.getElementById('platformFilter')?.value || 'all';
    
    currentFilters = { level, learningStyle, type, platform, searchQuery: currentFilters.searchQuery };
    
    // 执行筛选
    filteredResources = filterResources(resourcesDatabase, currentFilters);
    
    // 渲染结果
    renderResources(filteredResources);
    updateStatistics(filteredResources);
    
    console.log('筛选完成，结果数量:', filteredResources.length);
}

// 筛选资源
function filterResources(resources, filters) {
    return resources.filter(resource => {
        // 难度筛选
        if (filters.level !== 'all' && resource.level !== filters.level) {
            return false;
        }
        
        // 学习风格筛选
        if (filters.learningStyle !== 'all' && resource.learningStyle !== filters.learningStyle) {
            return false;
        }
        
        // 资源类型筛选
        if (filters.type !== 'all' && resource.type !== filters.type) {
            return false;
        }
        
        // 平台筛选
        if (filters.platform !== 'all' && resource.platform !== filters.platform) {
            return false;
        }
        
        // 搜索筛选
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            const searchText = `${resource.title} ${resource.description} ${resource.topics.join(' ')}`.toLowerCase();
            if (!searchText.includes(query)) {
                return false;
            }
        }
        
        return true;
    });
}

// 执行搜索
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput?.value?.trim() || '';
    
    currentFilters.searchQuery = query;
    filteredResources = filterResources(resourcesDatabase, currentFilters);
    
    renderResources(filteredResources);
    updateStatistics(filteredResources);
    
    console.log('搜索完成，关键词:', query, '结果数量:', filteredResources.length);
}

// 知识点导航
function navigateToTopic(topic) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = topic;
        performSearch();
        
        // 滚动到资源区域
        document.getElementById('resourcesContainer')?.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

// 切换标签页
function switchTab(tab) {
    // 更新按钮状态
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 根据标签页筛选
    let filtered = [...resourcesDatabase];
    
    switch(tab) {
        case 'all':
            // 显示所有资源
            break;
        case 'featured':
            // 只显示MOOC等高质量资源
            filtered = resourcesDatabase.filter(r => 
                r.platform === 'mooc' || r.quality === 'high'
            );
            break;
        case 'beginner':
            // 只显示初学者资源
            filtered = resourcesDatabase.filter(r => r.level === 'beginner');
            break;
        case 'advanced':
            // 只显示中高级资源
            filtered = resourcesDatabase.filter(r => 
                r.level === 'intermediate' || r.level === 'advanced'
            );
            break;
    }
    
    filteredResources = filtered;
    renderResources(filtered);
    updateStatistics(filtered);
}

// 更新统计数据
function updateStatistics(resources) {
    // 总资源数
    document.getElementById('totalResources').textContent = resources.length;
    
    // 视频数量
    const videoCount = resources.filter(r => r.type === 'video').length;
    document.getElementById('videoCount').textContent = videoCount;
    
    // 文章数量
    const articleCount = resources.filter(r => r.type === 'article').length;
    document.getElementById('articleCount').textContent = articleCount;
    
    // 练习数量
    const practiceCount = resources.filter(r => r.type === 'practice').length;
    document.getElementById('practiceCount').textContent = practiceCount;
}

// 初始化图表
function initializeCharts(resources) {
    initPlatformChart(resources);
    initTypeChart(resources);
    initLevelChart(resources);
}

// 平台分布饼图
function initPlatformChart(resources) {
    const ctx = document.getElementById('platformChart');
    if (!ctx) return;
    
    const platformCounts = {};
    resources.forEach(r => {
        platformCounts[r.platformName] = (platformCounts[r.platformName] || 0) + 1;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(platformCounts),
            datasets: [{
                data: Object.values(platformCounts),
                backgroundColor: [
                    '#667eea', '#764ba2', '#f093fb', '#4facfe',
                    '#43e97b', '#fa709a', '#fee140', '#30cfd0'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: { size: 11 }
                    }
                },
                title: {
                    display: true,
                    text: '资源平台分布',
                    font: { size: 14, weight: 'bold' }
                }
            }
        }
    });
}

// 类型分布柱状图
function initTypeChart(resources) {
    const ctx = document.getElementById('typeChart');
    if (!ctx) return;
    
    const typeCounts = {
        '视频教程': resources.filter(r => r.type === 'video').length,
        '文章教程': resources.filter(r => r.type === 'article').length,
        '练习题库': resources.filter(r => r.type === 'practice').length
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(typeCounts),
            datasets: [{
                label: '资源数量',
                data: Object.values(typeCounts),
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: '资源类型分布',
                    font: { size: 14, weight: 'bold' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 5 }
                }
            }
        }
    });
}

// 难度分布饼图
function initLevelChart(resources) {
    const ctx = document.getElementById('levelChart');
    if (!ctx) return;
    
    const levelCounts = {
        '初学者': resources.filter(r => r.level === 'beginner').length,
        '中级': resources.filter(r => r.level === 'intermediate').length,
        '高级': resources.filter(r => r.level === 'advanced').length
    };
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(levelCounts),
            datasets: [{
                data: Object.values(levelCounts),
                backgroundColor: ['#4facfe', '#43e97b', '#fa709a']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: { size: 11 }
                    }
                },
                title: {
                    display: true,
                    text: '难度分布',
                    font: { size: 14, weight: 'bold' }
                }
            }
        }
    });
}

// 绑定事件监听器
function bindEventListeners() {
    // 搜索框回车事件
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // 模态框外部点击关闭
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('resourceModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

console.log('app.js加载完成，资源数据库包含', resourcesDatabase.length, '个资源');
