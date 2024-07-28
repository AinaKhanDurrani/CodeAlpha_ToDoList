const add = document.getElementById('add');
const inputText = document.getElementById('input');
const list = document.getElementById('list');

add.addEventListener('click', () => {
    if (inputText.value.trim() !== '') {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        const span = document.createElement('span');
        span.innerText = inputText.value;
        const button = document.createElement('button');
        button.innerText = 'Delete';

        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(button);
        list.appendChild(li);

        inputText.value = '';

        // Add event listener to the checkbox to toggle strikethrough
        input.addEventListener('change', () => {
            if (input.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        // Add event listener to the delete button to remove the item
        button.addEventListener('click', () => {
            list.removeChild(li);
        });
    } else {
        alert('Please enter a value');
    }
});
