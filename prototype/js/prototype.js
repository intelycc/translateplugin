// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为标签页添加点击事件
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 移除所有标签的active类
                tabs.forEach(t => t.classList.remove('active'));
                // 为当前点击的标签添加active类
                this.classList.add('active');
                
                // 获取对应的内容区域
                const tabId = this.getAttribute('data-tab');
                const tabContents = document.querySelectorAll('.tab-content');
                
                // 隐藏所有内容区域
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });
                
                // 显示当前标签对应的内容区域
                document.getElementById(tabId).style.display = 'block';
            });
        });
        
        // 默认显示第一个标签页
        if (tabs.length > 0) {
            tabs[0].click();
        }
    }
    
    // 为关闭按钮添加点击事件
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.translation-overlay, .summary-panel');
            if (container) {
                container.style.display = 'none';
            }
        });
    });
    
    // 为翻译按钮添加点击事件
    const translateButtons = document.querySelectorAll('.translate-button');
    translateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const overlay = document.querySelector('.translation-overlay');
            if (overlay) {
                overlay.style.display = 'block';
            }
        });
    });
    
    // 为总结按钮添加点击事件
    const summaryButtons = document.querySelectorAll('.summary-button');
    summaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const panel = document.querySelector('.summary-panel');
            if (panel) {
                panel.style.display = 'block';
            }
        });
    });
    
    // 为语言选择下拉框添加变化事件
    const languageSelects = document.querySelectorAll('.language-select');
    languageSelects.forEach(select => {
        select.addEventListener('change', function() {
            console.log('语言已切换为：' + this.value);
        });
    });
    
    // 为设置保存按钮添加点击事件
    const saveSettingsButton = document.querySelector('.save-settings');
    if (saveSettingsButton) {
        saveSettingsButton.addEventListener('click', function() {
            alert('设置已保存！');
        });
    }
    
    // 模拟翻译功能
    const textToTranslate = document.querySelector('.text-to-translate');
    const translatedText = document.querySelector('.translated-text');
    
    if (textToTranslate && translatedText) {
        textToTranslate.addEventListener('input', function() {
            // 模拟翻译延迟
            setTimeout(() => {
                // 简单模拟翻译效果
                translatedText.textContent = '已翻译: ' + this.value;
            }, 500);
        });
    }
}); 