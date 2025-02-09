const element = document.getElementById('title');

element.innerHTML = "Belajar Manipulasi DOM";
console.log("innerText : " + element.innerText);
console.log("textContent : " + element.textContent);
console.log("innerHTML : " + element.innerHTML);


const element2 = document.querySelectorAll('li');
for (const element of element2) {
    element.style.color = 'red';
    element.style.backgroundColor = 'yellow';
}

// classlist ada 5 yang utama

const list  = document.querySelector('.item-class');

list.classList.add('background');
list.classList.add('border');
list.classList.remove('background');