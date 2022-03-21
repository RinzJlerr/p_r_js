const result = prompt();

let paragraph = document.querySelector('a');{
prompt(paragraph.textContent);
}

function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('my-checkbox').addEventListener(
    'click', stopDefAction, false
)