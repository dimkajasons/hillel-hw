function createWonderField() {
    document.querySelector('.main-div').innerHTML = '';
    let lettersArray = document.querySelector('.input').value.split('');
    console.log(lettersArray);

    let fragment = document.createDocumentFragment();
    lettersArray.forEach(letter => {
        let field = document.createElement('span');
        field.innerText = letter;
        if (letter === ' ') {
            field.classList.add('field-space-class')
        } else {
            field.classList.add('field-black-class');
        }
        field.addEventListener('click', function() {
            openLetter(field);
        })
        fragment.appendChild(field);
    });

    document.querySelector('.main-div').appendChild(fragment);
}
document.querySelector('.apply-button').addEventListener('click', createWonderField);

function openLetter(el) {
    el.classList.remove('field-black-class');
    el.classList.add('field-main-class');
}