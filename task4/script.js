let urlLink = document.getElementById('url');
urlLink.addEventListener('click', () => {
    let input_text = prompt("Измените текст");
    urlLink.innerText = input_text;
})