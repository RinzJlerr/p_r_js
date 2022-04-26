const userText = prompt('введите текст');
const userTextField = document.querySelector('#userTextField');
userTextField.textContent = userText;
console.log('текст в блоке с id userTextField изменен на', userText);

