// ============================================
// 配置部分 - API密钥
// ============================================
// 通义千问API密钥 - 可以在这里修改
const QIANWEN_API_KEY = 'sk-ba855231ac554d328ebceff41c69ce42';
const QIANWEN_API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';

// ============================================
// 核心概念数据
// ============================================
const concepts = {
    'for': {
        title: 'for循环',
        icon: '🔄',
        description: '遍历序列的每个元素',
        detail: `
<h3>📖 for循环详解</h3>

<div class="explanation">
<p><span class="highlight">for循环</span>用于遍历序列（如列表、字符串、range对象）中的每个元素。</p>
</div>

<h4>基本语法：</h4>
<div class="code-block"><pre><span class="keyword">for</span> <span class="function">变量</span> <span class="keyword">in</span> <span class="function">序列</span>:
    <span class="comment"># 循环体</span>
    <span class="function">执行语句</span></pre></div>

<h4>示例1：遍历列表</h4>
<div class="code-block"><pre><span class="comment"># 遍历水果列表</span>
fruits = [<span class="string">'苹果'</span>, <span class="string">'香蕉'</span>, <span class="string">'橙子'</span>]

<span class="keyword">for</span> fruit <span class="keyword">in</span> fruits:
    <span class="function">print</span>(<span class="string">f"我喜欢吃</span>{fruit}<span class="string">"</span>)
    
<span class="comment"># 输出：
# 我喜欢吃苹果
# 我喜欢吃香蕉
# 我喜欢吃橙子</span></pre></div>

<h4>示例2：使用range()函数</h4>
<div class="code-block"><pre><span class="comment"># 打印0到4的数字</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">5</span>):
    <span class="function">print</span>(<span class="string">f"第</span>{i}<span class="string">次循环"</span>)
    
<span class="comment"># 输出：
# 第0次循环
# 第1次循环  
# 第2次循环
# 第3次循环
# 第4次循环</span></pre></div>

<h4>示例3：遍历字符串</h4>
<div class="code-block"><pre><span class="comment"># 遍历字符串中的每个字符</span>
text = <span class="string">"Python"</span>

<span class="keyword">for</span> char <span class="keyword">in</span> text:
    <span class="function">print</span>(char, <span class="function">end</span>=<span class="string">" "</span>)
    
<span class="comment"># 输出：P y t h o n</span></pre></div>

<div class="info-box">
<strong>💡 使用场景：</strong>
<ul>
<li>遍历列表、元组、字典等容器</li>
<li>重复执行固定次数的操作</li>
<li>处理文件的每一行</li>
</ul>
</div>

<div class="success-box">
<strong>✅ 最佳实践：</strong>
<ul>
<li>变量命名要有意义（如用fruit而不是i）</li>
<li>能用for就优先用for，代码更简洁</li>
<li>使用enumerate()同时获取索引和值</li>
</ul>
</div>
`
    },
    'while': {
        title: 'while循环',
        icon: '⚡',
        description: '根据条件重复执行',
        detail: `
<h3>📖 while循环详解</h3>

<div class="explanation">
<p><span class="highlight">while循环</span>会在条件为真时持续执行循环体，直到条件变为假。</p>
</div>

<h4>基本语法：</h4>
<div class="code-block"><pre><span class="keyword">while</span> <span class="function">条件</span>:
    <span class="comment"># 循环体</span>
    <span class="function">执行语句</span></pre></div>

<h4>示例1：计数循环</h4>
<div class="code-block"><pre><span class="comment"># 从0数到4</span>
count = <span class="number">0</span>

<span class="keyword">while</span> count < <span class="number">5</span>:
    <span class="function">print</span>(<span class="string">f"当前计数：</span>{count}<span class="string">"</span>)
    count += <span class="number">1</span>
    
<span class="comment"># 输出：
# 当前计数：0
# 当前计数：1
# 当前计数：2
# 当前计数：3
# 当前计数：4</span></pre></div>

<h4>示例2：累加求和</h4>
<div class="code-block"><pre><span class="comment"># 计算1到10的和</span>
total = <span class="number">0</span>
num = <span class="number">1</span>

<span class="keyword">while</span> num <= <span class="number">10</span>:
    total += num
    num += <span class="number">1</span>
    
<span class="function">print</span>(<span class="string">f"1到10的和是：</span>{total}<span class="string">"</span>)

<span class="comment"># 输出：1到10的和是：55</span></pre></div>

<h4>示例3：条件循环</h4>
<div class="code-block"><pre><span class="comment"># 找到第一个大于100的2的幂</span>
power = <span class="number">1</span>
n = <span class="number">0</span>

<span class="keyword">while</span> power <= <span class="number">100</span>:
    power = <span class="number">2</span> ** n
    n += <span class="number">1</span>
    
<span class="function">print</span>(<span class="string">f"第一个大于100的2的幂是：</span>{power}<span class="string">"</span>)

<span class="comment"># 输出：第一个大于100的2的幂是：128</span></pre></div>

<div class="warning-box">
<strong>⚠️ 注意事项：</strong>
<ul>
<li>必须在循环体内改变条件，否则会导致死循环</li>
<li>使用while True:时要确保有break退出</li>
<li>复杂条件判断时要注意逻辑正确性</li>
</ul>
</div>

<div class="info-box">
<strong>💡 使用场景：</strong>
<ul>
<li>不知道循环次数，需要根据条件判断</li>
<li>用户输入验证（循环直到输入正确）</li>
<li>等待某个事件发生</li>
</ul>
</div>
`
    },
    'break': {
        title: 'break语句',
        icon: '🛑',
        description: '提前终止循环',
        detail: `
<h3>📖 break语句详解</h3>

<div class="explanation">
<p><span class="highlight">break语句</span>用于立即终止循环，跳出循环体，继续执行循环后的代码。</p>
</div>

<h4>基本用法：</h4>
<div class="code-block"><pre><span class="keyword">for</span> item <span class="keyword">in</span> sequence:
    <span class="keyword">if</span> <span class="function">条件</span>:
        <span class="keyword">break</span>  <span class="comment"># 终止循环</span>
    <span class="comment"># 其他代码</span></pre></div>

<h4>示例1：查找目标</h4>
<div class="code-block"><pre><span class="comment"># 在列表中查找特定值</span>
numbers = [<span class="number">1</span>, <span class="number">3</span>, <span class="number">5</span>, <span class="number">7</span>, <span class="number">9</span>, <span class="number">2</span>, <span class="number">4</span>, <span class="number">6</span>]
target = <span class="number">7</span>

<span class="keyword">for</span> num <span class="keyword">in</span> numbers:
    <span class="keyword">if</span> num == target:
        <span class="function">print</span>(<span class="string">f"找到目标：</span>{num}<span class="string">"</span>)
        <span class="keyword">break</span>
    <span class="function">print</span>(<span class="string">f"检查：</span>{num}<span class="string">"</span>)
    
<span class="comment"># 输出：
# 检查：1
# 检查：3
# 检查：5
# 找到目标：7
# (循环终止，不再检查后面的数字)</span></pre></div>

<h4>示例2：密码验证</h4>
<div class="code-block"><pre><span class="comment"># 用户有3次输入机会</span>
max_attempts = <span class="number">3</span>
correct_password = <span class="string">"python123"</span>

<span class="keyword">for</span> attempt <span class="keyword">in</span> <span class="function">range</span>(max_attempts):
    password = <span class="function">input</span>(<span class="string">"请输入密码："</span>)
    <span class="keyword">if</span> password == correct_password:
        <span class="function">print</span>(<span class="string">"✅ 登录成功！"</span>)
        <span class="keyword">break</span>
    <span class="function">print</span>(<span class="string">f"❌ 密码错误，还有</span>{max_attempts - attempt - <span class="number">1</span>}<span class="string">次机会"</span>)
<span class="keyword">else</span>:
    <span class="function">print</span>(<span class="string">"❌ 登录失败，账户已锁定"</span>)</pre></div>

<h4>示例3：嵌套循环中的break</h4>
<div class="code-block"><pre><span class="comment"># break只会终止最内层的循环</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">3</span>):
    <span class="function">print</span>(<span class="string">f"外层循环：</span>{i}<span class="string">"</span>)
    <span class="keyword">for</span> j <span class="keyword">in</span> <span class="function">range</span>(<span class="number">3</span>):
        <span class="keyword">if</span> j == <span class="number">1</span>:
            <span class="keyword">break</span>  <span class="comment"># 只终止内层循环</span>
        <span class="function">print</span>(<span class="string">f"  内层循环：</span>{j}<span class="string">"</span>)
        
<span class="comment"># 输出：
# 外层循环：0
#   内层循环：0
# 外层循环：1
#   内层循环：0
# 外层循环：2
#   内层循环：0</span></pre></div>

<div class="success-box">
<strong>✅ 使用场景：</strong>
<ul>
<li>找到目标后不需要继续搜索</li>
<li>达到某个条件就停止</li>
<li>处理异常情况时提前退出</li>
<li>优化性能，避免不必要的迭代</li>
</ul>
</div>

<div class="info-box">
<strong>💡 小技巧：</strong> for...else结构可以判断循环是否被break打断。如果正常结束（没有break），会执行else块。
</div>
`
    },
    'continue': {
        title: 'continue语句',
        icon: '⏭️',
        description: '跳过当前迭代',
        detail: `
<h3>📖 continue语句详解</h3>

<div class="explanation">
<p><span class="highlight">continue语句</span>用于跳过当前循环的剩余代码，直接进入下一次循环。</p>
</div>

<h4>基本用法：</h4>
<div class="code-block"><pre><span class="keyword">for</span> item <span class="keyword">in</span> sequence:
    <span class="keyword">if</span> <span class="function">条件</span>:
        <span class="keyword">continue</span>  <span class="comment"># 跳过本次循环</span>
    <span class="comment"># 其他代码</span></pre></div>

<h4>示例1：过滤偶数</h4>
<div class="code-block"><pre><span class="comment"># 只打印奇数</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">10</span>):
    <span class="keyword">if</span> i % <span class="number">2</span> == <span class="number">0</span>:
        <span class="keyword">continue</span>  <span class="comment"># 跳过偶数</span>
    <span class="function">print</span>(<span class="string">f"奇数：</span>{i}<span class="string">"</span>)
    
<span class="comment"># 输出：
# 奇数：1
# 奇数：3
# 奇数：5
# 奇数：7
# 奇数：9</span></pre></div>

<h4>示例2：跳过负数</h4>
<div class="code-block"><pre><span class="comment"># 计算正数之和</span>
numbers = [<span class="number">1</span>, <span class="number">-2</span>, <span class="number">3</span>, <span class="number">-4</span>, <span class="number">5</span>, <span class="number">-6</span>, <span class="number">7</span>]
positive_sum = <span class="number">0</span>

<span class="keyword">for</span> num <span class="keyword">in</span> numbers:
    <span class="keyword">if</span> num < <span class="number">0</span>:
        <span class="keyword">continue</span>  <span class="comment"># 跳过负数</span>
    positive_sum += num
    <span class="function">print</span>(<span class="string">f"加入：</span>{num}<span class="string">，当前和：</span>{positive_sum}<span class="string">"</span>)
    
<span class="function">print</span>(<span class="string">f"正数之和：</span>{positive_sum}<span class="string">"</span>)

<span class="comment"># 输出：
# 加入：1，当前和：1
# 加入：3，当前和：4
# 加入：5，当前和：9
# 加入：7，当前和：16
# 正数之和：16</span></pre></div>

<h4>示例3：跳过空字符串</h4>
<div class="code-block"><pre><span class="comment"># 处理用户输入列表</span>
inputs = [<span class="string">"apple"</span>, <span class="string">""</span>, <span class="string">"banana"</span>, <span class="string">"   "</span>, <span class="string">"cherry"</span>]

<span class="keyword">for</span> text <span class="keyword">in</span> inputs:
    <span class="keyword">if</span> <span class="keyword">not</span> text.<span class="function">strip</span>():
        <span class="keyword">continue</span>  <span class="comment"># 跳过空字符串</span>
    <span class="function">print</span>(<span class="string">f"有效输入：</span>{text}<span class="string">"</span>)
    
<span class="comment"># 输出：
# 有效输入：apple
# 有效输入：banana
# 有效输入：cherry</span></pre></div>

<h4>示例4：嵌套循环中的continue</h4>
<div class="code-block"><pre><span class="comment"># continue只影响当前循环</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">3</span>):
    <span class="function">print</span>(<span class="string">f"外层：</span>{i}<span class="string">"</span>)
    <span class="keyword">for</span> j <span class="keyword">in</span> <span class="function">range</span>(<span class="number">3</span>):
        <span class="keyword">if</span> j == <span class="number">1</span>:
            <span class="keyword">continue</span>  <span class="comment"># 跳过j=1的情况</span>
        <span class="function">print</span>(<span class="string">f"  内层：</span>{j}<span class="string">"</span>)
        
<span class="comment"># 输出：
# 外层：0
#   内层：0
#   内层：2
# 外层：1
#   内层：0
#   内层：2
# 外层：2
#   内层：0
#   内层：2</span></pre></div>

<div class="success-box">
<strong>✅ 使用场景：</strong>
<ul>
<li>过滤不符合条件的数据</li>
<li>跳过错误或无效的输入</li>
<li>简化条件判断逻辑</li>
<li>避免深层嵌套的if语句</li>
</ul>
</div>

<div class="info-box">
<strong>💡 break vs continue：</strong>
<ul>
<li>break：完全终止循环，跳出循环体</li>
<li>continue：跳过本次循环，继续下一次循环</li>
</ul>
</div>
`
    },
    'nested': {
        title: '嵌套循环',
        icon: '🔗',
        description: '循环中嵌套循环',
        detail: `
<h3>📖 嵌套循环详解</h3>

<div class="explanation">
<p><span class="highlight">嵌套循环</span>是指在一个循环内部包含另一个循环，外层循环每执行一次，内层循环会完整执行一轮。</p>
</div>

<h4>基本结构：</h4>
<div class="code-block"><pre><span class="keyword">for</span> 外层变量 <span class="keyword">in</span> 外层序列:
    <span class="comment"># 外层循环体</span>
    <span class="keyword">for</span> 内层变量 <span class="keyword">in</span> 内层序列:
        <span class="comment"># 内层循环体</span>
        <span class="function">执行语句</span></pre></div>

<h4>示例1：打印乘法表</h4>
<div class="code-block"><pre><span class="comment"># 打印九九乘法表（前5行）</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">1</span>, <span class="number">6</span>):
    <span class="keyword">for</span> j <span class="keyword">in</span> <span class="function">range</span>(<span class="number">1</span>, i + <span class="number">1</span>):
        <span class="function">print</span>(<span class="string">f"</span>{j}<span class="string">×</span>{i}<span class="string">=</span>{i*j:2d}<span class="string">"</span>, <span class="function">end</span>=<span class="string">"  "</span>)
    <span class="function">print</span>()  <span class="comment"># 换行</span>
    
<span class="comment"># 输出：
# 1×1= 1  
# 1×2= 2  2×2= 4  
# 1×3= 3  2×3= 6  3×3= 9  
# 1×4= 4  2×4= 8  3×4=12  4×4=16  
# 1×5= 5  2×5=10  3×5=15  4×5=20  5×5=25</span></pre></div>

<h4>示例2：遍历二维列表</h4>
<div class="code-block"><pre><span class="comment"># 遍历矩阵</span>
matrix = [
    [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>],
    [<span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>],
    [<span class="number">7</span>, <span class="number">8</span>, <span class="number">9</span>]
]

<span class="keyword">for</span> row <span class="keyword">in</span> matrix:
    <span class="keyword">for</span> element <span class="keyword">in</span> row:
        <span class="function">print</span>(element, <span class="function">end</span>=<span class="string">" "</span>)
    <span class="function">print</span>()  <span class="comment"># 换行</span>
    
<span class="comment"># 输出：
# 1 2 3 
# 4 5 6 
# 7 8 9</span></pre></div>

<h4>示例3：生成坐标对</h4>
<div class="code-block"><pre><span class="comment"># 生成3x3网格的所有坐标</span>
<span class="function">print</span>(<span class="string">"所有坐标点："</span>)
<span class="keyword">for</span> x <span class="keyword">in</span> <span class="function">range</span>(<span class="number">3</span>):
    <span class="keyword">for</span> y <span class="keyword">in</span> <span class="function">range</span>(<span class="number">3</span>):
        <span class="function">print</span>(<span class="string">f"({x}, {y})"</span>, <span class="function">end</span>=<span class="string">" "</span>)
    <span class="function">print</span>()
    
<span class="comment"># 输出：
# (0, 0) (0, 1) (0, 2) 
# (1, 0) (1, 1) (1, 2) 
# (2, 0) (2, 1) (2, 2)</span></pre></div>

<h4>示例4：查找重复元素</h4>
<div class="code-block"><pre><span class="comment"># 找出列表中的重复元素</span>
numbers = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">2</span>, <span class="number">4</span>, <span class="number">3</span>]
duplicates = []

<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="function">len</span>(numbers)):
    <span class="keyword">for</span> j <span class="keyword">in</span> <span class="function">range</span>(i + <span class="number">1</span>, <span class="function">len</span>(numbers)):
        <span class="keyword">if</span> numbers[i] == numbers[j]:
            <span class="keyword">if</span> numbers[i] <span class="keyword">not</span> <span class="keyword">in</span> duplicates:
                duplicates.<span class="function">append</span>(numbers[i])
                
<span class="function">print</span>(<span class="string">f"重复的元素：</span>{duplicates}<span class="string">"</span>)

<span class="comment"># 输出：重复的元素：[2, 3]</span></pre></div>

<div class="warning-box">
<strong>⚠️ 性能警告：</strong>
<ul>
<li>两层嵌套：时间复杂度O(n²)</li>
<li>三层嵌套：时间复杂度O(n³)</li>
<li>嵌套层数越多，性能下降越严重</li>
<li>避免不必要的嵌套，考虑优化算法</li>
</ul>
</div>

<div class="success-box">
<strong>✅ 优化技巧：</strong>
<ul>
<li>能用单层循环就不用嵌套</li>
<li>使用break提前退出</li>
<li>考虑使用字典或集合优化查找</li>
<li>大数据处理时特别注意性能</li>
</ul>
</div>
`
    },
    'range': {
        title: 'range函数',
        icon: '📊',
        description: '生成数字序列',
        detail: `
<h3>📖 range函数详解</h3>

<div class="explanation">
<p><span class="highlight">range函数</span>用于生成一个数字序列，常与for循环配合使用。</p>
</div>

<h4>三种用法：</h4>

<h5>1. range(stop)</h5>
<div class="code-block"><pre><span class="comment"># 从0到stop-1</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">5</span>):
    <span class="function">print</span>(i, <span class="function">end</span>=<span class="string">" "</span>)
    
<span class="comment"># 输出：0 1 2 3 4</span></pre></div>

<h5>2. range(start, stop)</h5>
<div class="code-block"><pre><span class="comment"># 从start到stop-1</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">2</span>, <span class="number">8</span>):
    <span class="function">print</span>(i, <span class="function">end</span>=<span class="string">" "</span>)
    
<span class="comment"># 输出：2 3 4 5 6 7</span></pre></div>

<h5>3. range(start, stop, step)</h5>
<div class="code-block"><pre><span class="comment"># 从start到stop-1，步长为step</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">0</span>, <span class="number">10</span>, <span class="number">2</span>):
    <span class="function">print</span>(i, <span class="function">end</span>=<span class="string">" "</span>)
    
<span class="comment"># 输出：0 2 4 6 8</span></pre></div>

<h4>倒序遍历：</h4>
<div class="code-block"><pre><span class="comment"># 使用负数步长</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">10</span>, <span class="number">0</span>, <span class="number">-1</span>):
    <span class="function">print</span>(i, <span class="function">end</span>=<span class="string">" "</span>)
    
<span class="comment"># 输出：10 9 8 7 6 5 4 3 2 1</span></pre></div>

<h4>实用示例：</h4>

<h5>示例1：打印倒计时</h5>
<div class="code-block"><pre><span class="comment"># 倒计时从5到1</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">5</span>, <span class="number">0</span>, <span class="number">-1</span>):
    <span class="function">print</span>(<span class="string">f"倒计时：</span>{i}<span class="string">"</span>)
<span class="function">print</span>(<span class="string">"🚀 发射！"</span>)

<span class="comment"># 输出：
# 倒计时：5
# 倒计时：4
# 倒计时：3
# 倒计时：2
# 倒计时：1
# 🚀 发射！</span></pre></div>

<h5>示例2：索引遍历</h5>
<div class="code-block"><pre><span class="comment"># 同时获取索引和值</span>
fruits = [<span class="string">'苹果'</span>, <span class="string">'香蕉'</span>, <span class="string">'橙子'</span>]

<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="function">len</span>(fruits)):
    <span class="function">print</span>(<span class="string">f"</span>{i}<span class="string">: </span>{fruits[i]}<span class="string">"</span>)
    
<span class="comment"># 输出：
# 0: 苹果
# 1: 香蕉
# 2: 橙子</span></pre></div>

<h5>示例3：间隔打印</h5>
<div class="code-block"><pre><span class="comment"># 每隔3个打印一次</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">0</span>, <span class="number">20</span>, <span class="number">3</span>):
    <span class="function">print</span>(<span class="string">f"第</span>{i}<span class="string">个元素"</span>)
    
<span class="comment"># 输出：
# 第0个元素
# 第3个元素
# 第6个元素
# 第9个元素
# 第12个元素
# 第15个元素
# 第18个元素</span></pre></div>

<div class="info-box">
<strong>💡 重要特性：</strong>
<ul>
<li><strong>左闭右开：</strong>range(5)生成0-4，不包括5</li>
<li><strong>惰性求值：</strong>range不会立即生成所有数字，节省内存</li>
<li><strong>可转为列表：</strong>list(range(5))得到[0,1,2,3,4]</li>
</ul>
</div>

<div class="warning-box">
<strong>⚠️ 常见错误：</strong>
<ul>
<li>误以为range(5)包含5</li>
<li>步长为0会报错</li>
<li>start必须小于stop（正步长）或大于stop（负步长）</li>
</ul>
</div>
`
    }
};

// ============================================
// AI应用示例数据
// ============================================
const aiApplications = {
    'data-processing': {
        title: '数据预处理中的循环',
        icon: '📊',
        description: '在AI模型训练前处理数据',
        content: `
<h3>🎯 数据预处理：AI的基础工作</h3>

<div class="explanation">
<p>在机器学习中，数据预处理是至关重要的第一步。循环控制帮助我们批量处理数据。</p>
</div>

<div class="ai-example">
<h4>📌 场景：图像数据标准化</h4>
<p>在训练神经网络前，需要将图像像素值标准化到[0,1]范围</p>

<div class="code-block"><pre><span class="keyword">import</span> numpy <span class="keyword">as</span> np

<span class="comment"># 假设有100张图像的数据集</span>
images = []  <span class="comment"># 原始图像列表</span>
normalized_images = []

<span class="comment"># 使用for循环处理每张图像</span>
<span class="keyword">for</span> image <span class="keyword">in</span> images:
    <span class="comment"># 将像素值从[0,255]标准化到[0,1]</span>
    normalized = image / <span class="number">255.0</span>
    normalized_images.<span class="function">append</span>(normalized)
    
<span class="function">print</span>(<span class="string">f"处理了</span>{<span class="function">len</span>(normalized_images)}<span class="string">张图像"</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 场景：文本数据清洗</h4>
<p>清洗文本数据，去除特殊字符和标点</p>

<div class="code-block"><pre><span class="keyword">import</span> re

<span class="comment"># 原始文本列表</span>
texts = [
    <span class="string">"Hello, World!"</span>,
    <span class="string">"Python is great!!!"</span>,
    <span class="string">"AI@2024#awesome"</span>
]

cleaned_texts = []

<span class="comment"># 清洗每条文本</span>
<span class="keyword">for</span> text <span class="keyword">in</span> texts:
    <span class="comment"># 只保留字母和空格</span>
    cleaned = re.<span class="function">sub</span>(<span class="string">r'[^a-zA-Z\s]'</span>, <span class="string">''</span>, text)
    cleaned = cleaned.<span class="function">lower</span>()  <span class="comment"># 转小写</span>
    cleaned_texts.<span class="function">append</span>(cleaned)
    
<span class="keyword">for</span> original, cleaned <span class="keyword">in</span> <span class="function">zip</span>(texts, cleaned_texts):
    <span class="function">print</span>(<span class="string">f"原文：</span>{original}<span class="string">"</span>)
    <span class="function">print</span>(<span class="string">f"清洗后：</span>{cleaned}<span class="string">"</span>)
    <span class="function">print</span>(<span class="string">"-"</span> * <span class="number">30</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 场景：批量数据增强</h4>
<p>通过旋转、翻转等操作扩充训练数据</p>

<div class="code-block"><pre><span class="comment"># 数据增强函数</span>
<span class="keyword">def</span> <span class="function">augment_data</span>(images):
    augmented = []
    
    <span class="keyword">for</span> img <span class="keyword">in</span> images:
        <span class="comment"># 原始图像</span>
        augmented.<span class="function">append</span>(img)
        
        <span class="comment"># 水平翻转</span>
        flipped = <span class="function">flip_horizontal</span>(img)
        augmented.<span class="function">append</span>(flipped)
        
        <span class="comment"># 旋转90度</span>
        <span class="keyword">for</span> angle <span class="keyword">in</span> [<span class="number">90</span>, <span class="number">180</span>, <span class="number">270</span>]:
            rotated = <span class="function">rotate</span>(img, angle)
            augmented.<span class="function">append</span>(rotated)
    
    <span class="keyword">return</span> augmented

<span class="comment"># 使用示例</span>
original_count = <span class="number">100</span>
<span class="comment"># augmented_data = augment_data(training_images)</span>
<span class="comment"># 100张原始图像 → 500张增强图像（1+1+3倍）</span></pre></div>
</div>

<div class="info-box">
<strong>💡 为什么需要循环？</strong>
<ul>
<li>数据集通常包含成千上万个样本</li>
<li>每个样本都需要相同的预处理步骤</li>
<li>循环确保处理的一致性和高效性</li>
</ul>
</div>

<div class="success-box">
<strong>✅ 实际应用：</strong>
<ul>
<li><strong>图像分类：</strong>处理ImageNet数据集（140万张图片）</li>
<li><strong>自然语言处理：</strong>清洗大规模文本语料库</li>
<li><strong>时序预测：</strong>标准化股票、天气等时间序列数据</li>
</ul>
</div>
`
    },
    'batch-training': {
        title: '批量训练中的循环',
        icon: '🎓',
        description: '模型训练的核心流程',
        content: `
<h3>🎯 批量训练：深度学习的核心</h3>

<div class="explanation">
<p>深度学习模型的训练需要多轮（epoch）遍历数据，每轮又分为多个批次（batch）。这是典型的嵌套循环应用。</p>
</div>

<div class="ai-example">
<h4>📌 训练循环的基本结构</h4>

<div class="code-block"><pre><span class="comment"># 训练超参数</span>
epochs = <span class="number">100</span>  <span class="comment"># 训练轮数</span>
batch_size = <span class="number">32</span>  <span class="comment"># 每批数据量</span>

<span class="comment"># 外层循环：遍历每个epoch</span>
<span class="keyword">for</span> epoch <span class="keyword">in</span> <span class="function">range</span>(epochs):
    total_loss = <span class="number">0</span>
    
    <span class="comment"># 内层循环：遍历每个batch</span>
    <span class="keyword">for</span> batch_idx, (data, labels) <span class="keyword">in</span> <span class="function">enumerate</span>(train_loader):
        <span class="comment"># 1. 前向传播</span>
        predictions = model(data)
        
        <span class="comment"># 2. 计算损失</span>
        loss = <span class="function">criterion</span>(predictions, labels)
        total_loss += loss
        
        <span class="comment"># 3. 反向传播</span>
        optimizer.<span class="function">zero_grad</span>()
        loss.<span class="function">backward</span>()
        
        <span class="comment"># 4. 更新参数</span>
        optimizer.<span class="function">step</span>()
        
        <span class="comment"># 每10个batch打印一次</span>
        <span class="keyword">if</span> batch_idx % <span class="number">10</span> == <span class="number">0</span>:
            <span class="function">print</span>(<span class="string">f"Epoch </span>{epoch}<span class="string">, Batch </span>{batch_idx}<span class="string">, Loss: </span>{loss:<span class="number">.4</span>f}<span class="string">"</span>)
    
    <span class="comment"># 每个epoch结束后的统计</span>
    avg_loss = total_loss / <span class="function">len</span>(train_loader)
    <span class="function">print</span>(<span class="string">f"Epoch </span>{epoch}<span class="string"> 完成，平均损失: </span>{avg_loss:<span class="number">.4</span>f}<span class="string">"</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 早停（Early Stopping）机制</h4>
<p>使用break语句在满足条件时提前终止训练</p>

<div class="code-block"><pre>best_loss = <span class="function">float</span>(<span class="string">'inf'</span>)
patience = <span class="number">10</span>  <span class="comment"># 容忍轮数</span>
no_improve_count = <span class="number">0</span>

<span class="keyword">for</span> epoch <span class="keyword">in</span> <span class="function">range</span>(epochs):
    <span class="comment"># ... 训练过程 ...</span>
    
    <span class="comment"># 验证集上评估</span>
    val_loss = <span class="function">evaluate</span>(model, val_loader)
    
    <span class="comment"># 如果有改进，更新最佳模型</span>
    <span class="keyword">if</span> val_loss < best_loss:
        best_loss = val_loss
        no_improve_count = <span class="number">0</span>
        <span class="function">save_model</span>(model, <span class="string">'best_model.pth'</span>)
        <span class="function">print</span>(<span class="string">f"✅ 找到更好的模型！损失: </span>{val_loss:<span class="number">.4</span>f}<span class="string">"</span>)
    <span class="keyword">else</span>:
        no_improve_count += <span class="number">1</span>
        <span class="function">print</span>(<span class="string">f"⚠️  </span>{no_improve_count}<span class="string">轮没有改进"</span>)
    
    <span class="comment"># 早停判断</span>
    <span class="keyword">if</span> no_improve_count >= patience:
        <span class="function">print</span>(<span class="string">f"🛑 早停触发！在第</span>{epoch}<span class="string">轮停止训练"</span>)
        <span class="keyword">break</span></pre></div>
</div>

<div class="ai-example">
<h4>📌 学习率调度</h4>
<p>根据训练进度动态调整学习率</p>

<div class="code-block"><pre><span class="comment"># 学习率衰减策略</span>
initial_lr = <span class="number">0.001</span>

<span class="keyword">for</span> epoch <span class="keyword">in</span> <span class="function">range</span>(epochs):
    <span class="comment"># 每30个epoch降低学习率</span>
    <span class="keyword">if</span> epoch % <span class="number">30</span> == <span class="number">0</span> <span class="keyword">and</span> epoch > <span class="number">0</span>:
        <span class="keyword">for</span> param_group <span class="keyword">in</span> optimizer.param_groups:
            param_group[<span class="string">'lr'</span>] *= <span class="number">0.1</span>  <span class="comment"># 降低10倍</span>
        <span class="function">print</span>(<span class="string">f"📉 学习率降低到: </span>{param_group[<span class="string">'lr'</span>]}<span class="string">"</span>)
    
    <span class="comment"># ... 训练过程 ...</span></pre></div>
</div>

<div class="ai-example">
<h4>📌 跳过异常批次</h4>
<p>使用continue跳过有问题的数据</p>

<div class="code-block"><pre><span class="keyword">for</span> epoch <span class="keyword">in</span> <span class="function">range</span>(epochs):
    <span class="keyword">for</span> batch_idx, (data, labels) <span class="keyword">in</span> <span class="function">enumerate</span>(train_loader):
        <span class="keyword">try</span>:
            <span class="comment"># 检查数据有效性</span>
            <span class="keyword">if</span> <span class="function">torch.isnan</span>(data).<span class="function">any</span>():
                <span class="function">print</span>(<span class="string">f"⚠️  批次</span>{batch_idx}<span class="string">包含NaN，跳过"</span>)
                <span class="keyword">continue</span>
            
            <span class="comment"># 正常训练</span>
            predictions = model(data)
            loss = <span class="function">criterion</span>(predictions, labels)
            
            <span class="comment"># 梯度爆炸检测</span>
            <span class="keyword">if</span> loss > <span class="number">1000</span>:
                <span class="function">print</span>(<span class="string">f"⚠️  损失异常大: </span>{loss}<span class="string">，跳过此批次"</span>)
                <span class="keyword">continue</span>
            
            optimizer.<span class="function">zero_grad</span>()
            loss.<span class="function">backward</span>()
            optimizer.<span class="function">step</span>()
            
        <span class="keyword">except</span> <span class="function">RuntimeError</span> <span class="keyword">as</span> e:
            <span class="function">print</span>(<span class="string">f"❌ 批次</span>{batch_idx}<span class="string">出错: </span>{e}<span class="string">，跳过"</span>)
            <span class="keyword">continue</span></pre></div>
</div>

<div class="warning-box">
<strong>⚠️ 性能考虑：</strong>
<ul>
<li>大型数据集训练可能需要数天甚至数周</li>
<li>合理设置batch_size和epochs数量</li>
<li>使用GPU加速可以显著提升训练速度</li>
<li>考虑使用分布式训练处理超大规模数据</li>
</ul>
</div>

<div class="success-box">
<strong>✅ 实际应用：</strong>
<ul>
<li><strong>ResNet训练：</strong>ImageNet数据集上训练需要数天</li>
<li><strong>BERT预训练：</strong>在16个TPU上训练4天</li>
<li><strong>GPT-3训练：</strong>在上万个GPU上训练数周</li>
</ul>
</div>
`
    },
    'inference': {
        title: '模型推理中的循环',
        icon: '🔮',
        description: '使用训练好的模型预测',
        content: `
<h3>🎯 模型推理：将AI应用到实际</h3>

<div class="explanation">
<p>训练完成后，需要使用模型对新数据进行预测。循环帮助我们批量处理推理请求。</p>
</div>

<div class="ai-example">
<h4>📌 批量图像分类</h4>

<div class="code-block"><pre><span class="keyword">import</span> torch

<span class="comment"># 加载训练好的模型</span>
model = <span class="function">load_model</span>(<span class="string">'trained_model.pth'</span>)
model.<span class="function">eval</span>()  <span class="comment"># 设置为评估模式</span>

<span class="comment"># 待分类的图像列表</span>
test_images = [...]  <span class="comment"># 1000张图像</span>
predictions = []

<span class="comment"># 批量推理</span>
batch_size = <span class="number">32</span>
<span class="keyword">with</span> torch.<span class="function">no_grad</span>():  <span class="comment"># 推理时不需要梯度</span>
    <span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">0</span>, <span class="function">len</span>(test_images), batch_size):
        <span class="comment"># 获取一个batch的图像</span>
        batch = test_images[i:i+batch_size]
        
        <span class="comment"># 预处理</span>
        batch_tensor = <span class="function">preprocess</span>(batch)
        
        <span class="comment"># 模型推理</span>
        outputs = model(batch_tensor)
        
        <span class="comment"># 获取预测类别</span>
        _, predicted = torch.<span class="function">max</span>(outputs, <span class="number">1</span>)
        predictions.<span class="function">extend</span>(predicted.<span class="function">tolist</span>())
        
        <span class="comment"># 显示进度</span>
        <span class="keyword">if</span> i % <span class="number">100</span> == <span class="number">0</span>:
            <span class="function">print</span>(<span class="string">f"已处理: </span>{i}<span class="string">/</span>{<span class="function">len</span>(test_images)}<span class="string">"</span>)

<span class="function">print</span>(<span class="string">f"✅ 完成</span>{<span class="function">len</span>(predictions)}<span class="string">张图像的分类"</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 实时视频分析</h4>
<p>使用while循环持续处理视频流</p>

<div class="code-block"><pre><span class="keyword">import</span> cv2

<span class="comment"># 打开摄像头</span>
cap = cv2.<span class="function">VideoCapture</span>(<span class="number">0</span>)

<span class="comment"># 持续推理循环</span>
frame_count = <span class="number">0</span>
<span class="keyword">while</span> <span class="keyword">True</span>:
    <span class="comment"># 读取一帧</span>
    ret, frame = cap.<span class="function">read</span>()
    <span class="keyword">if</span> <span class="keyword">not</span> ret:
        <span class="keyword">break</span>
    
    <span class="comment"># 每5帧处理一次（降低计算量）</span>
    <span class="keyword">if</span> frame_count % <span class="number">5</span> == <span class="number">0</span>:
        <span class="comment"># 预处理图像</span>
        processed = <span class="function">preprocess_frame</span>(frame)
        
        <span class="comment"># 目标检测</span>
        detections = model.<span class="function">detect</span>(processed)
        
        <span class="comment"># 在图像上绘制检测框</span>
        <span class="keyword">for</span> det <span class="keyword">in</span> detections:
            x, y, w, h, conf, cls = det
            <span class="keyword">if</span> conf > <span class="number">0.5</span>:  <span class="comment"># 置信度阈值</span>
                cv2.<span class="function">rectangle</span>(frame, (x, y), (x+w, y+h), 
                              (<span class="number">0</span>, <span class="number">255</span>, <span class="number">0</span>), <span class="number">2</span>)
                cv2.<span class="function">putText</span>(frame, <span class="string">f"</span>{cls}<span class="string">: </span>{conf:<span class="number">.2</span>f}<span class="string">"</span>,
                            (x, y<span class="number">-10</span>), cv2.FONT_HERSHEY_SIMPLEX,
                            <span class="number">0.5</span>, (<span class="number">0</span>, <span class="number">255</span>, <span class="number">0</span>), <span class="number">2</span>)
    
    <span class="comment"># 显示结果</span>
    cv2.<span class="function">imshow</span>(<span class="string">'Object Detection'</span>, frame)
    
    <span class="comment"># 按'q'退出</span>
    <span class="keyword">if</span> cv2.<span class="function">waitKey</span>(<span class="number">1</span>) & <span class="number">0xFF</span> == <span class="function">ord</span>(<span class="string">'q'</span>):
        <span class="keyword">break</span>
    
    frame_count += <span class="number">1</span>

cap.<span class="function">release</span>()
cv2.<span class="function">destroyAllWindows</span>()</pre></div>
</div>

<div class="ai-example">
<h4>📌 文本生成（自回归）</h4>
<p>逐个生成token，直到满足停止条件</p>

<div class="code-block"><pre><span class="comment"># 文本生成（类似GPT）</span>
<span class="keyword">def</span> <span class="function">generate_text</span>(prompt, model, max_length=<span class="number">100</span>):
    <span class="comment"># 编码输入</span>
    tokens = <span class="function">encode</span>(prompt)
    
    <span class="comment"># 生成循环</span>
    <span class="keyword">for</span> _ <span class="keyword">in</span> <span class="function">range</span>(max_length):
        <span class="comment"># 模型预测下一个token</span>
        <span class="keyword">with</span> torch.<span class="function">no_grad</span>():
            outputs = model(tokens)
            next_token = outputs[<span class="number">-1</span>].<span class="function">argmax</span>()
        
        <span class="comment"># 添加到序列</span>
        tokens = torch.<span class="function">cat</span>([tokens, next_token.<span class="function">unsqueeze</span>(<span class="number">0</span>)])
        
        <span class="comment"># 停止条件：生成了结束标记</span>
        <span class="keyword">if</span> next_token == EOS_TOKEN:
            <span class="keyword">break</span>
    
    <span class="comment"># 解码为文本</span>
    generated_text = <span class="function">decode</span>(tokens)
    <span class="keyword">return</span> generated_text

<span class="comment"># 使用示例</span>
prompt = <span class="string">"人工智能的未来是"</span>
result = <span class="function">generate_text</span>(prompt, model, max_length=<span class="number">50</span>)
<span class="function">print</span>(result)</pre></div>
</div>

<div class="ai-example">
<h4>📌 集成模型推理</h4>
<p>多个模型的预测结果进行投票</p>

<div class="code-block"><pre><span class="comment"># 加载多个模型</span>
models = [
    <span class="function">load_model</span>(<span class="string">'model1.pth'</span>),
    <span class="function">load_model</span>(<span class="string">'model2.pth'</span>),
    <span class="function">load_model</span>(<span class="string">'model3.pth'</span>)
]

<span class="comment"># 设置所有模型为评估模式</span>
<span class="keyword">for</span> model <span class="keyword">in</span> models:
    model.<span class="function">eval</span>()

<span class="comment"># 对测试数据进行推理</span>
test_data = [...]
final_predictions = []

<span class="keyword">for</span> data <span class="keyword">in</span> test_data:
    votes = []
    
    <span class="comment"># 收集每个模型的预测</span>
    <span class="keyword">for</span> model <span class="keyword">in</span> models:
        <span class="keyword">with</span> torch.<span class="function">no_grad</span>():
            output = model(data)
            pred = output.<span class="function">argmax</span>()
            votes.<span class="function">append</span>(pred)
    
    <span class="comment"># 多数投票</span>
    <span class="keyword">from</span> collections <span class="keyword">import</span> Counter
    final_pred = Counter(votes).<span class="function">most_common</span>(<span class="number">1</span>)[<span class="number">0</span>][<span class="number">0</span>]
    final_predictions.<span class="function">append</span>(final_pred)

<span class="function">print</span>(<span class="string">f"✅ 集成模型完成</span>{<span class="function">len</span>(final_predictions)}<span class="string">个预测"</span>)</pre></div>
</div>

<div class="info-box">
<strong>💡 推理优化技巧：</strong>
<ul>
<li><strong>批处理：</strong>多个样本一起推理，提高GPU利用率</li>
<li><strong>模型量化：</strong>减少计算精度，加快推理速度</li>
<li><strong>缓存机制：</strong>对重复输入缓存结果</li>
<li><strong>早退出：</strong>高置信度时提前返回结果</li>
</ul>
</div>

<div class="success-box">
<strong>✅ 实际应用：</strong>
<ul>
<li><strong>实时人脸识别：</strong>每秒处理30帧视频</li>
<li><strong>智能推荐系统：</strong>毫秒级响应用户请求</li>
<li><strong>语音助手：</strong>实时语音识别和响应</li>
<li><strong>自动驾驶：</strong>实时处理多个传感器数据</li>
</ul>
</div>
`
    },
    'hyperparameter': {
        title: '超参数搜索中的循环',
        icon: '🔍',
        description: '寻找最佳模型配置',
        content: `
<h3>🎯 超参数搜索：优化模型性能</h3>

<div class="explanation">
<p>找到最佳的超参数组合是提升模型性能的关键。嵌套循环帮助我们系统地搜索参数空间。</p>
</div>

<div class="ai-example">
<h4>📌 网格搜索（Grid Search）</h4>
<p>遍历所有参数组合</p>

<div class="code-block"><pre><span class="comment"># 定义搜索空间</span>
learning_rates = [<span class="number">0.001</span>, <span class="number">0.01</span>, <span class="number">0.1</span>]
batch_sizes = [<span class="number">16</span>, <span class="number">32</span>, <span class="number">64</span>]
hidden_sizes = [<span class="number">128</span>, <span class="number">256</span>, <span class="number">512</span>]

best_acc = <span class="number">0</span>
best_params = <span class="keyword">None</span>

<span class="comment"># 三层嵌套循环遍历所有组合</span>
<span class="keyword">for</span> lr <span class="keyword">in</span> learning_rates:
    <span class="keyword">for</span> batch_size <span class="keyword">in</span> batch_sizes:
        <span class="keyword">for</span> hidden_size <span class="keyword">in</span> hidden_sizes:
            <span class="function">print</span>(<span class="string">f"测试参数: lr={lr}, batch={batch_size}, hidden={hidden_size}"</span>)
            
            <span class="comment"># 用这组参数训练模型</span>
            model = <span class="function">create_model</span>(hidden_size)
            optimizer = <span class="function">Adam</span>(model.<span class="function">parameters</span>(), lr=lr)
            
            <span class="comment"># 训练并评估</span>
            acc = <span class="function">train_and_evaluate</span>(model, optimizer, batch_size)
            
            <span class="comment"># 更新最佳参数</span>
            <span class="keyword">if</span> acc > best_acc:
                best_acc = acc
                best_params = {
                    <span class="string">'lr'</span>: lr,
                    <span class="string">'batch_size'</span>: batch_size,
                    <span class="string">'hidden_size'</span>: hidden_size
                }
                <span class="function">print</span>(<span class="string">f"✅ 找到更好的配置！准确率: </span>{acc:<span class="number">.4</span>f}<span class="string">"</span>)

<span class="function">print</span>(<span class="string">f"\\n🏆 最佳参数: </span>{best_params}<span class="string">"</span>)
<span class="function">print</span>(<span class="string">f"🏆 最佳准确率: </span>{best_acc:<span class="number">.4</span>f}<span class="string">"</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 随机搜索（Random Search）</h4>
<p>随机采样参数组合，更高效</p>

<div class="code-block"><pre><span class="keyword">import</span> random

<span class="comment"># 定义参数范围</span>
param_ranges = {
    <span class="string">'lr'</span>: (<span class="number">0.0001</span>, <span class="number">0.1</span>),
    <span class="string">'batch_size'</span>: [<span class="number">16</span>, <span class="number">32</span>, <span class="number">64</span>, <span class="number">128</span>],
    <span class="string">'dropout'</span>: (<span class="number">0.1</span>, <span class="number">0.5</span>),
    <span class="string">'weight_decay'</span>: (<span class="number">0.00001</span>, <span class="number">0.001</span>)
}

best_acc = <span class="number">0</span>
best_params = <span class="keyword">None</span>
n_trials = <span class="number">50</span>  <span class="comment"># 随机尝试50次</span>

<span class="keyword">for</span> trial <span class="keyword">in</span> <span class="function">range</span>(n_trials):
    <span class="comment"># 随机采样参数</span>
    params = {
        <span class="string">'lr'</span>: random.<span class="function">uniform</span>(*param_ranges[<span class="string">'lr'</span>]),
        <span class="string">'batch_size'</span>: random.<span class="function">choice</span>(param_ranges[<span class="string">'batch_size'</span>]),
        <span class="string">'dropout'</span>: random.<span class="function">uniform</span>(*param_ranges[<span class="string">'dropout'</span>]),
        <span class="string">'weight_decay'</span>: random.<span class="function">uniform</span>(*param_ranges[<span class="string">'weight_decay'</span>])
    }
    
    <span class="function">print</span>(<span class="string">f"\\n尝试 </span>{trial+<span class="number">1</span>}<span class="string">/</span>{n_trials}<span class="string">: </span>{params}<span class="string">"</span>)
    
    <span class="comment"># 训练并评估</span>
    acc = <span class="function">train_with_params</span>(params)
    
    <span class="keyword">if</span> acc > best_acc:
        best_acc = acc
        best_params = params
        <span class="function">print</span>(<span class="string">f"🎯 新记录！准确率: </span>{acc:<span class="number">.4</span>f}<span class="string">"</span>)

<span class="function">print</span>(<span class="string">f"\\n🏆 最佳配置: </span>{best_params}<span class="string">"</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 贝叶斯优化</h4>
<p>利用历史结果指导搜索</p>

<div class="code-block"><pre><span class="keyword">from</span> skopt <span class="keyword">import</span> gp_minimize

<span class="comment"># 目标函数</span>
<span class="keyword">def</span> <span class="function">objective</span>(params):
    lr, batch_size, hidden_size = params
    
    <span class="comment"># 训练模型</span>
    model = <span class="function">create_model</span>(hidden_size)
    acc = <span class="function">train_model</span>(model, lr, batch_size)
    
    <span class="comment"># 返回负准确率（因为要最小化）</span>
    <span class="keyword">return</span> -acc

<span class="comment"># 定义搜索空间</span>
space = [
    (<span class="number">0.0001</span>, <span class="number">0.1</span>),      <span class="comment"># 学习率</span>
    (<span class="number">16</span>, <span class="number">128</span>),           <span class="comment"># batch size</span>
    (<span class="number">64</span>, <span class="number">512</span>)            <span class="comment"># hidden size</span>
]

<span class="comment"># 运行贝叶斯优化</span>
results = []
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">30</span>):  <span class="comment"># 30次迭代</span>
    <span class="comment"># 使用历史结果指导下一次采样</span>
    res = <span class="function">gp_minimize</span>(objective, space, n_calls=<span class="number">1</span>, 
                       x0=results <span class="keyword">if</span> results <span class="keyword">else</span> <span class="keyword">None</span>)
    results = res.x_iters
    
    <span class="function">print</span>(<span class="string">f"迭代 </span>{i+<span class="number">1</span>}<span class="string">: 最佳准确率 = </span>{-res.fun:<span class="number">.4</span>f}<span class="string">"</span>)

<span class="function">print</span>(<span class="string">f"\\n🏆 最优参数: </span>{res.x}<span class="string">"</span>)</pre></div>
</div>

<div class="ai-example">
<h4>📌 K折交叉验证</h4>
<p>评估模型的稳定性</p>

<div class="code-block"><pre><span class="keyword">from</span> sklearn.model_selection <span class="keyword">import</span> KFold

<span class="comment"># K折交叉验证</span>
k_folds = <span class="number">5</span>
kfold = <span class="function">KFold</span>(n_splits=k_folds, shuffle=<span class="keyword">True</span>)

<span class="comment"># 对每组参数进行K折验证</span>
<span class="keyword">for</span> lr <span class="keyword">in</span> learning_rates:
    fold_scores = []
    
    <span class="comment"># K折循环</span>
    <span class="keyword">for</span> fold, (train_idx, val_idx) <span class="keyword">in</span> <span class="function">enumerate</span>(kfold.<span class="function">split</span>(data)):
        <span class="function">print</span>(<span class="string">f"Fold </span>{fold+<span class="number">1</span>}<span class="string">/</span>{k_folds}<span class="string">, lr=</span>{lr}<span class="string">"</span>)
        
        <span class="comment"># 划分数据</span>
        train_data = data[train_idx]
        val_data = data[val_idx]
        
        <span class="comment"># 训练和评估</span>
        model = <span class="function">create_model</span>()
        <span class="function">train</span>(model, train_data, lr)
        score = <span class="function">evaluate</span>(model, val_data)
        
        fold_scores.<span class="function">append</span>(score)
        <span class="function">print</span>(<span class="string">f"  分数: </span>{score:<span class="number">.4</span>f}<span class="string">"</span>)
    
    <span class="comment"># 计算平均分数和标准差</span>
    avg_score = <span class="function">sum</span>(fold_scores) / k_folds
    std_score = <span class="function">np.std</span>(fold_scores)
    
    <span class="function">print</span>(<span class="string">f"lr=</span>{lr}<span class="string">: 平均分数=</span>{avg_score:<span class="number">.4</span>f}<span class="string"> (±</span>{std_score:<span class="number">.4</span>f}<span class="string">)\\n"</span>)</pre></div>
</div>

<div class="warning-box">
<strong>⚠️ 计算成本：</strong>
<ul>
<li><strong>网格搜索：</strong>参数组合数指数增长，计算量大</li>
<li><strong>示例：</strong>3个学习率 × 3个batch × 3个hidden = 27次训练</li>
<li><strong>建议：</strong>先粗搜索确定范围，再细搜索优化</li>
</ul>
</div>

<div class="success-box">
<strong>✅ 最佳实践：</strong>
<ul>
<li>先用随机搜索快速探索</li>
<li>重要参数用网格搜索精调</li>
<li>使用早停节省时间</li>
<li>记录所有实验结果</li>
</ul>
</div>
`
    }
};

// ============================================
// 可视化数据
// ============================================
const visualizations = {
    'for-basic': {
        title: 'for循环执行过程',
        code: `for i in range(5):\n    print(f"i = {i}")`,
        steps: [
            { vars: { i: 0 }, output: 'i = 0', description: '第1次迭代：i=0' },
            { vars: { i: 1 }, output: 'i = 1', description: '第2次迭代：i=1' },
            { vars: { i: 2 }, output: 'i = 2', description: '第3次迭代：i=2' },
            { vars: { i: 3 }, output: 'i = 3', description: '第4次迭代：i=3' },
            { vars: { i: 4 }, output: 'i = 4', description: '第5次迭代：i=4' },
            { vars: {}, output: '', description: '循环结束' }
        ]
    },
    'while-basic': {
        title: 'while循环执行过程',
        code: `count = 0\nwhile count < 3:\n    print(f"count = {count}")\n    count += 1`,
        steps: [
            { vars: { count: 0 }, output: '', description: '初始化：count=0' },
            { vars: { count: 0 }, output: 'count = 0', description: '条件为真，执行循环' },
            { vars: { count: 1 }, output: '', description: 'count增加到1' },
            { vars: { count: 1 }, output: 'count = 1', description: '条件为真，继续执行' },
            { vars: { count: 2 }, output: '', description: 'count增加到2' },
            { vars: { count: 2 }, output: 'count = 2', description: '条件为真，继续执行' },
            { vars: { count: 3 }, output: '', description: 'count增加到3' },
            { vars: { count: 3 }, output: '', description: '条件为假，循环结束' }
        ]
    },
    'nested': {
        title: '嵌套循环执行过程',
        code: `for i in range(3):\n    for j in range(2):\n        print(f"i={i}, j={j}")`,
        steps: [
            { vars: { i: 0, j: 0 }, output: 'i=0, j=0', description: '外层i=0, 内层j=0' },
            { vars: { i: 0, j: 1 }, output: 'i=0, j=1', description: '外层i=0, 内层j=1' },
            { vars: { i: 1, j: 0 }, output: 'i=1, j=0', description: '外层i=1, 内层j=0' },
            { vars: { i: 1, j: 1 }, output: 'i=1, j=1', description: '外层i=1, 内层j=1' },
            { vars: { i: 2, j: 0 }, output: 'i=2, j=0', description: '外层i=2, 内层j=0' },
            { vars: { i: 2, j: 1 }, output: 'i=2, j=1', description: '外层i=2, 内层j=1' }
        ]
    },
    'break-demo': {
        title: 'break语句执行过程',
        code: `for i in range(5):\n    if i == 3:\n        break\n    print(i)`,
        steps: [
            { vars: { i: 0 }, output: '0', description: 'i=0，不满足条件，输出0' },
            { vars: { i: 1 }, output: '1', description: 'i=1，不满足条件，输出1' },
            { vars: { i: 2 }, output: '2', description: 'i=2，不满足条件，输出2' },
            { vars: { i: 3 }, output: '', description: 'i=3，满足条件，执行break' },
            { vars: {}, output: '', description: '循环被break终止' }
        ]
    },
    'continue-demo': {
        title: 'continue语句执行过程',
        code: `for i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i)`,
        steps: [
            { vars: { i: 0 }, output: '', description: 'i=0是偶数，执行continue，跳过输出' },
            { vars: { i: 1 }, output: '1', description: 'i=1是奇数，输出1' },
            { vars: { i: 2 }, output: '', description: 'i=2是偶数，执行continue，跳过输出' },
            { vars: { i: 3 }, output: '3', description: 'i=3是奇数，输出3' },
            { vars: { i: 4 }, output: '', description: 'i=4是偶数，执行continue，跳过输出' }
        ]
    }
};

// ============================================
// 全局状态
// ============================================
let currentVizStep = 0;
let currentViz = null;
let chatHistory = [];

// ============================================
// 初始化
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    initConcepts();
    initAIApplications();
    console.log('✅ 系统初始化完成');
    console.log('🔑 API密钥已配置:', QIANWEN_API_KEY.substring(0, 20) + '...');
});

// ============================================
// 核心概念相关函数
// ============================================
function initConcepts() {
    const grid = document.getElementById('conceptGrid');
    grid.innerHTML = '';
    
    for (const [id, concept] of Object.entries(concepts)) {
        const card = document.createElement('div');
        card.className = 'concept-card';
        card.innerHTML = `
            <h3>${concept.icon} ${concept.title}</h3>
            <p>${concept.description}</p>
        `;
        card.onclick = () => showConceptDetail(id);
        grid.appendChild(card);
    }
}

function showConceptDetail(conceptId) {
    const concept = concepts[conceptId];
    const detailsDiv = document.getElementById('conceptDetails');
    
    detailsDiv.innerHTML = `
        <div class="concept-detail active">
            <button class="back-button" onclick="hideConceptDetail()">← 返回</button>
            ${concept.detail}
        </div>
    `;
    
    document.getElementById('conceptGrid').style.display = 'none';
}

function hideConceptDetail() {
    document.getElementById('conceptDetails').innerHTML = '';
    document.getElementById('conceptGrid').style.display = 'grid';
}

// ============================================
// AI应用相关函数
// ============================================
function initAIApplications() {
    const listDiv = document.getElementById('aiAppList');
    listDiv.innerHTML = '<h3 style="margin-bottom: 15px;">🤖 选择AI应用场景：</h3>';
    
    for (const [id, app] of Object.entries(aiApplications)) {
        const card = document.createElement('div');
        card.className = 'concept-card';
        card.style.marginBottom = '15px';
        card.innerHTML = `
            <h3>${app.icon} ${app.title}</h3>
            <p>${app.description}</p>
        `;
        card.onclick = () => showAIAppDetail(id);
        listDiv.appendChild(card);
    }
}

function showAIAppDetail(appId) {
    const app = aiApplications[appId];
    const detailDiv = document.getElementById('aiAppDetail');
    
    detailDiv.innerHTML = `
        <div class="concept-detail active">
            <button class="back-button" onclick="hideAIAppDetail()">← 返回列表</button>
            ${app.content}
        </div>
    `;
    
    document.getElementById('aiAppList').style.display = 'none';
}

function hideAIAppDetail() {
    document.getElementById('aiAppDetail').innerHTML = '';
    document.getElementById('aiAppList').style.display = 'block';
}

// ============================================
// 标签切换
// ============================================
function switchTab(tabName) {
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有标签的active类
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的标签
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// ============================================
// AI助手功能 - 使用通义千问API
// ============================================
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 显示用户消息
    addMessage(message, 'user');
    input.value = '';
    
    // 禁用发送按钮
    const sendBtn = document.getElementById('sendButton');
    sendBtn.disabled = true;
    sendBtn.textContent = '思考中...';
    
    try {
        // 调用通义千问API
        const response = await callQianwenAPI(message);
        addMessage(response, 'assistant');
    } catch (error) {
        console.error('API调用失败:', error);
        addMessage('❌ 抱歉，AI助手暂时无法响应。错误信息：' + error.message, 'error');
    } finally {
        // 恢复发送按钮
        sendBtn.disabled = false;
        sendBtn.textContent = '发送';
    }
}

async function callQianwenAPI(userMessage) {
    // 构建对话历史
    const messages = [
        {
            role: 'system',
            content: '你是一位专业的Python编程导师，专门教授Python循环控制（for、while、break、continue、嵌套循环、range函数）以及它们在AI/机器学习中的应用。请用简洁、清晰、易懂的方式回答学生的问题，并在适当时提供代码示例。'
        },
        ...chatHistory,
        {
            role: 'user',
            content: userMessage
        }
    ];
    
    const requestBody = {
        model: 'qwen-turbo',
        messages: messages,
        temperature: 0.7,
        max_tokens: 800
    };
    
    console.log('发送API请求:', requestBody);
    
    const response = await fetch(QIANWEN_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${QIANWEN_API_KEY}`
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API请求失败: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('API响应:', data);
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantMessage = data.choices[0].message.content;
        
        // 更新对话历史
        chatHistory.push({
            role: 'user',
            content: userMessage
        });
        chatHistory.push({
            role: 'assistant',
            content: assistantMessage
        });
        
        // 保持历史记录在合理范围内
        if (chatHistory.length > 10) {
            chatHistory = chatHistory.slice(-10);
        }
        
        return assistantMessage;
    } else {
        throw new Error('API响应格式异常');
    }
}

function addMessage(text, type) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    // 如果是assistant消息，处理代码块
    if (type === 'assistant') {
        const formattedHTML = formatMessageWithCode(text);
        messageDiv.innerHTML = formattedHTML;
    } else {
        messageDiv.textContent = text;
    }
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 格式化消息，处理代码块
function formatMessageWithCode(text) {
    // 匹配代码块（```...```或`...`）
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const inlineCodeRegex = /`([^`]+)`/g;
    
    let formatted = text;
    
    // 处理多行代码块
    formatted = formatted.replace(codeBlockRegex, (match, code) => {
        const highlightedCode = highlightPythonCode(code.trim());
        return `<div class="ai-code-block">${highlightedCode}</div>`;
    });
    
    // 处理行内代码
    formatted = formatted.replace(inlineCodeRegex, (match, code) => {
        return `<code style="background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace;">${escapeHtml(code)}</code>`;
    });
    
    // 将换行符转换为<br>
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
}

// 高亮Python代码
function highlightPythonCode(code) {
    const keywords = ['for', 'while', 'if', 'else', 'elif', 'def', 'class', 'import', 'from', 'return', 
                     'break', 'continue', 'pass', 'try', 'except', 'finally', 'with', 'as', 'in', 
                     'and', 'or', 'not', 'is', 'None', 'True', 'False'];
    const functions = ['print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted', 
                      'sum', 'min', 'max', 'abs', 'input', 'open', 'str', 'int', 'float', 'list', 'dict'];
    
    let highlighted = escapeHtml(code);
    
    // 高亮注释
    highlighted = highlighted.replace(/(#.*$)/gm, '<span class="ai-comment">$1</span>');
    
    // 高亮字符串
    highlighted = highlighted.replace(/(['"])(?:(?=(\\?))\2.)*?\1/g, '<span class="ai-string">$&</span>');
    
    // 高亮关键字
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlighted = highlighted.replace(regex, `<span class="ai-keyword">${keyword}</span>`);
    });
    
    // 高亮函数
    functions.forEach(func => {
        const regex = new RegExp(`\\b${func}\\b(?=\\()`, 'g');
        highlighted = highlighted.replace(regex, `<span class="ai-function">${func}</span>`);
    });
    
    // 高亮数字
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="ai-number">$1</span>');
    
    return highlighted;
}

// HTML转义
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// ============================================
// 可视化功能
// ============================================
let vizAutoPlayInterval = null;

function loadVisualization() {
    const select = document.getElementById('vizSelect');
    const vizId = select.value;
    
    // 停止自动播放
    if (vizAutoPlayInterval) {
        clearInterval(vizAutoPlayInterval);
        vizAutoPlayInterval = null;
        const autoBtn = document.querySelector('.viz-btn-auto');
        if (autoBtn) {
            autoBtn.textContent = '▶️ 自动播放';
            autoBtn.classList.remove('playing');
        }
    }
    
    if (!vizId) {
        document.getElementById('vizContent').style.display = 'none';
        return;
    }
    
    currentViz = visualizations[vizId];
    currentVizStep = 0;
    
    // 渲染可视化界面
    renderVisualization();
    updateVizDisplay();
}

function renderVisualization() {
    const vizContent = document.getElementById('vizContent');
    
    vizContent.innerHTML = `
        <div class="viz-container">
            <h3 style="color: var(--primary-color); margin-bottom: 15px;">${currentViz.title}</h3>
            
            <!-- 代码显示 -->
            <div class="viz-code">
                <pre>${escapeHtml(currentViz.code)}</pre>
            </div>
            
            <!-- 步骤指示器 -->
            <div class="step-indicator" id="stepIndicator">
                ${generateStepIndicator()}
            </div>
            
            <!-- 执行信息 -->
            <div class="viz-info">
                <div class="viz-info-row">
                    <div class="viz-info-label">📍 步骤说明：</div>
                    <div id="vizDescription"></div>
                </div>
                
                <div class="viz-info-row">
                    <div class="viz-info-label">🔢 变量状态：</div>
                    <div id="vizVars"></div>
                </div>
                
                <div class="viz-info-row">
                    <div class="viz-info-label">📤 输出结果：</div>
                    <div class="viz-output" id="vizOutput"></div>
                </div>
            </div>
            
            <!-- 控制按钮 -->
            <div class="viz-controls">
                <button class="viz-btn-prev" onclick="vizPrevStep()">⏮️ 上一步</button>
                <button class="viz-btn-next" onclick="vizNextStep()">下一步 ⏭️</button>
                <button class="viz-btn-reset" onclick="vizReset()">🔄 重置</button>
                <button class="viz-btn-auto" onclick="vizToggleAutoPlay()">▶️ 自动播放</button>
            </div>
        </div>
    `;
    
    vizContent.style.display = 'block';
}

function generateStepIndicator() {
    let html = '';
    for (let i = 0; i < currentViz.steps.length; i++) {
        html += `<div class="step" onclick="vizGoToStep(${i})" title="步骤 ${i + 1}">${i + 1}</div>`;
    }
    return html;
}

function updateVizDisplay() {
    if (!currentViz) return;
    
    const step = currentViz.steps[currentVizStep];
    
    // 更新描述
    document.getElementById('vizDescription').textContent = step.description;
    
    // 更新变量状态
    const varsText = Object.keys(step.vars).length > 0 
        ? JSON.stringify(step.vars, null, 2) 
        : '(无变量)';
    document.getElementById('vizVars').textContent = varsText;
    
    // 更新输出
    document.getElementById('vizOutput').textContent = step.output || '(无输出)';
    
    // 更新步骤指示器
    updateStepIndicator();
}

function updateStepIndicator() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((stepEl, index) => {
        stepEl.classList.remove('active', 'completed');
        if (index === currentVizStep) {
            stepEl.classList.add('active');
        } else if (index < currentVizStep) {
            stepEl.classList.add('completed');
        }
    });
}

function vizNextStep() {
    if (!currentViz) return;
    if (currentVizStep < currentViz.steps.length - 1) {
        currentVizStep++;
        updateVizDisplay();
    } else {
        // 到达最后一步，停止自动播放
        if (vizAutoPlayInterval) {
            vizToggleAutoPlay();
        }
    }
}

function vizPrevStep() {
    if (!currentViz) return;
    if (currentVizStep > 0) {
        currentVizStep--;
        updateVizDisplay();
    }
}

function vizReset() {
    if (!currentViz) return;
    currentVizStep = 0;
    updateVizDisplay();
}

function vizGoToStep(stepIndex) {
    if (!currentViz) return;
    if (stepIndex >= 0 && stepIndex < currentViz.steps.length) {
        currentVizStep = stepIndex;
        updateVizDisplay();
    }
}

function vizToggleAutoPlay() {
    if (!currentViz) return;
    
    const autoBtn = document.querySelector('.viz-btn-auto');
    
    if (vizAutoPlayInterval) {
        // 停止自动播放
        clearInterval(vizAutoPlayInterval);
        vizAutoPlayInterval = null;
        autoBtn.textContent = '▶️ 自动播放';
        autoBtn.classList.remove('playing');
    } else {
        // 开始自动播放
        autoBtn.textContent = '⏸️ 暂停';
        autoBtn.classList.add('playing');
        
        vizAutoPlayInterval = setInterval(() => {
            if (currentVizStep < currentViz.steps.length - 1) {
                vizNextStep();
            } else {
                // 播放完成，停止
                vizToggleAutoPlay();
            }
        }, 1500); // 每1.5秒一步
    }
}

