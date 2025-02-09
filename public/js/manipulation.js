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


// Appendchild
const item = document.getElementById('item');
const li = document.createElement('li');
li.innerText = 'Item 4';
item.appendChild(li);   


// append
const item2 = document.getElementById('item');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li2.innerText = 'Item 5';
li3.innerText = 'Item 6';

item2.prepend(li3);//dibgaian depan atau atas
item2.append(li2);//dibaguian akhir atau bawah


// Harus belaajr lagi saat video eps 04