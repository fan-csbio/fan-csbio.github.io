#!/usr/bin/env python3
"""
Python循环控制智能学习系统 v2.0 - 自动化测试脚本
测试系统的完整性和功能正确性
"""

import os
import re
import json

def test_files_exist():
    """测试1: 检查必需文件是否存在"""
    print("=" * 60)
    print("🔍 测试1: 文件完整性检查")
    print("=" * 60)
    
    required_files = {
        'index.html': False,
        'app.js': False,
        'README.md': False,
        'QUICK_START.md': False
    }
    
    for filename in required_files.keys():
        if os.path.exists(filename):
            size = os.path.getsize(filename)
            print(f"✅ {filename}: 存在 ({size/1024:.2f} KB)")
            required_files[filename] = True
        else:
            print(f"❌ {filename}: 缺失")
    
    passed = sum(required_files.values())
    total = len(required_files)
    print(f"\n📊 文件检查: {passed}/{total} 通过\n")
    return passed == total

def test_html_structure():
    """测试2: HTML结构完整性"""
    print("=" * 60)
    print("🔍 测试2: HTML结构完整性")
    print("=" * 60)
    
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    required_elements = [
        ('<html', 'HTML根标签'),
        ('<head>', 'Head标签'),
        ('<body>', 'Body标签'),
        ('Chart.js', 'Chart.js库引入'),
        ('stats-dashboard', '统计面板'),
        ('platformChart', '平台分布图表'),
        ('typeChart', '类型分布图表'),
        ('levelChart', '难度分布图表'),
        ('searchInput', '搜索输入框'),
        ('resourcesContainer', '资源容器'),
        ('resourceModal', '资源详情模态框'),
        ('app.js', 'JavaScript文件引入')
    ]
    
    passed = 0
    for element, description in required_elements:
        if element in html:
            print(f"✅ {description}: 存在")
            passed += 1
        else:
            print(f"❌ {description}: 缺失")
    
    print(f"\n📊 HTML结构: {passed}/{len(required_elements)} 通过\n")
    return passed == len(required_elements)

def test_javascript_resources():
    """测试3: JavaScript资源数据库"""
    print("=" * 60)
    print("🔍 测试3: JavaScript资源数据库")
    print("=" * 60)
    
    with open('app.js', 'r', encoding='utf-8') as f:
        js = f.read()
    
    # 检查资源数据库
    if 'const resourcesDatabase = [' in js:
        print("✅ 资源数据库定义: 存在")
        
        # 统计资源数量
        resource_count = js.count('id:')
        print(f"✅ 资源数量: {resource_count}个")
        
        # 检查必要字段
        required_fields = [
            ('title:', '标题'),
            ('description:', '描述'),
            ('type:', '类型'),
            ('platform:', '平台'),
            ('url:', '链接'),
            ('level:', '难度'),
            ('topics:', '主题'),
            ('keyPoints:', '知识点')
        ]
        
        fields_found = 0
        for field, name in required_fields:
            if field in js:
                print(f"✅ {name}字段: 存在")
                fields_found += 1
        
        # 检查核心函数
        required_functions = [
            ('renderResources', '渲染资源函数'),
            ('showResourceDetail', '显示详情函数'),
            ('applyFilters', '应用筛选函数'),
            ('performSearch', '执行搜索函数'),
            ('navigateToTopic', '知识点导航函数'),
            ('switchTab', '切换标签函数'),
            ('updateStatistics', '更新统计函数'),
            ('initializeCharts', '初始化图表函数')
        ]
        
        functions_found = 0
        for func, name in required_functions:
            if f'function {func}' in js or f'{func}(' in js or f'{func} =' in js:
                print(f"✅ {name}: 存在")
                functions_found += 1
        
        total_checks = 2 + len(required_fields) + len(required_functions)
        total_passed = 2 + fields_found + functions_found
        
        print(f"\n📊 JavaScript测试: {total_passed}/{total_checks} 通过")
        print(f"   - 资源数量: {resource_count}个 (目标: ≥50)")
        print(f"   - 字段完整性: {fields_found}/{len(required_fields)}")
        print(f"   - 函数完整性: {functions_found}/{len(required_functions)}\n")
        
        return resource_count >= 50 and fields_found == len(required_fields) and functions_found == len(required_functions)
    else:
        print("❌ 资源数据库: 未找到\n")
        return False

def test_resource_quality():
    """测试4: 资源质量检查"""
    print("=" * 60)
    print("🔍 测试4: 资源质量检查")
    print("=" * 60)
    
    with open('app.js', 'r', encoding='utf-8') as f:
        js = f.read()
    
    # 检查权威平台
    platforms = {
        '中国大学MOOC': 'MOOC平台',
        'Bilibili': 'B站视频',
        '菜鸟教程': '菜鸟教程',
        'W3Schools': 'W3Schools',
        'LeetCode': 'LeetCode',
        'GitHub': 'GitHub'
    }
    
    platform_found = 0
    for platform, name in platforms.items():
        if platform in js:
            print(f"✅ {name}: 已收录")
            platform_found += 1
    
    # 检查核心知识点
    topics = {
        'for循环': 'for循环',
        'while循环': 'while循环',
        '循环嵌套': '循环嵌套',
        'break': 'break语句',
        'continue': 'continue语句',
        'range': 'range函数',
        'enumerate': 'enumerate枚举',
        '列表推导式': '列表推导式'
    }
    
    topics_found = 0
    for topic, name in topics.items():
        if topic in js:
            print(f"✅ {name}: 已覆盖")
            topics_found += 1
    
    # 检查URL有效性格式
    url_pattern = r'url:\s*["\']https?://[^"\']+["\']'
    url_matches = re.findall(url_pattern, js)
    print(f"✅ URL数量: {len(url_matches)}个")
    
    total_checks = len(platforms) + len(topics) + 1
    total_passed = platform_found + topics_found + (1 if len(url_matches) >= 50 else 0)
    
    print(f"\n📊 资源质量: {total_passed}/{total_checks} 通过")
    print(f"   - 平台覆盖: {platform_found}/{len(platforms)}")
    print(f"   - 知识点覆盖: {topics_found}/{len(topics)}")
    print(f"   - URL完整性: {len(url_matches)}个\n")
    
    return platform_found >= 5 and topics_found >= 6

def test_css_styling():
    """测试5: CSS样式完整性"""
    print("=" * 60)
    print("🔍 测试5: CSS样式完整性")
    print("=" * 60)
    
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # 检查关键CSS类
    css_classes = [
        ('.container', '容器样式'),
        ('.header', '头部样式'),
        ('.stats-dashboard', '统计面板样式'),
        ('.sidebar', '侧边栏样式'),
        ('.resource-card', '资源卡片样式'),
        ('.modal', '模态框样式'),
        ('.search-box', '搜索框样式'),
        ('.chart-box', '图表样式')
    ]
    
    passed = 0
    for css_class, name in css_classes:
        if css_class in html:
            print(f"✅ {name}: 存在")
            passed += 1
    
    # 检查响应式设计
    if '@media' in html:
        print(f"✅ 响应式设计: 已实现")
        passed += 1
    
    total = len(css_classes) + 1
    print(f"\n📊 CSS样式: {passed}/{total} 通过\n")
    return passed >= total - 1

def test_documentation():
    """测试6: 文档完整性"""
    print("=" * 60)
    print("🔍 测试6: 文档完整性")
    print("=" * 60)
    
    docs = {
        'README.md': [
            ('# Python循环控制', '项目标题'),
            ('快速开始', '快速开始章节'),
            ('核心功能', '功能说明'),
            ('学习路径', '学习建议'),
            ('技术栈', '技术说明')
        ],
        'QUICK_START.md': [
            ('快速开始', '快速开始标题'),
            ('三步开始', '使用步骤'),
            ('基础功能', '功能介绍'),
            ('常见问题', '问题解答')
        ]
    }
    
    passed = 0
    total = 0
    
    for filename, sections in docs.items():
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
            
            for section, name in sections:
                total += 1
                if section in content:
                    print(f"✅ {filename} - {name}: 存在")
                    passed += 1
                else:
                    print(f"❌ {filename} - {name}: 缺失")
    
    print(f"\n📊 文档完整性: {passed}/{total} 通过\n")
    return passed >= total - 2

def run_all_tests():
    """运行所有测试"""
    print("\n" + "=" * 60)
    print("🎓 Python循环控制智能学习系统 v2.0 - 自动化测试")
    print("=" * 60)
    print()
    
    tests = [
        ("文件完整性", test_files_exist),
        ("HTML结构", test_html_structure),
        ("JavaScript逻辑", test_javascript_resources),
        ("资源质量", test_resource_quality),
        ("CSS样式", test_css_styling),
        ("文档完整性", test_documentation)
    ]
    
    results = []
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            print(f"❌ 测试失败: {test_name} - {str(e)}\n")
            results.append((test_name, False))
    
    # 输出总结
    print("=" * 60)
    print("📊 测试总结")
    print("=" * 60)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ 通过" if result else "❌ 失败"
        print(f"{status} - {test_name}")
    
    print()
    print(f"总体结果: {passed}/{total} 测试通过")
    percentage = (passed / total) * 100
    print(f"通过率: {percentage:.1f}%")
    
    if passed == total:
        print("\n🎉 所有测试通过！系统可以正常使用！")
        print("✨ 系统质量: 优秀")
        return True
    elif passed >= total - 1:
        print("\n✅ 大部分测试通过，系统基本可用。")
        print("💡 建议: 修复失败的测试项以获得更好体验。")
        return True
    else:
        print(f"\n⚠️ 有 {total-passed} 个测试失败，请检查问题。")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    print("\n" + "=" * 60)
    if success:
        print("🚀 测试完成！系统已就绪，可以开始使用！")
    else:
        print("🔧 请根据测试结果修复问题后再使用。")
    print("=" * 60 + "\n")
    exit(0 if success else 1)
