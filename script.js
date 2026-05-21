function showResult(answer) {
    const resultBox = document.getElementById('result-message');
    const buttonsBox = document.getElementById('buttons-box');
    
    // إخفاء الأزرار بعد الاختيار
    buttonsBox.classList.add('hidden');
    
    // وريني النتيجة
    resultBox.classList.remove('hidden');
    
    if (answer === 'yes') {
        resultBox.innerHTML = "صحيت! هاذو هوما عبدو ومحمد المناقيل الطحانين اللي يضلو يعطو هههه.";
        resultBox.className = "result-box yes-style";
    } else if (answer === 'no') {
        resultBox.innerHTML = "مليح كيما تعرفش هاذو المناقيل إخطيك كنهم";
        resultBox.className = "result-box no-style";
    }
}