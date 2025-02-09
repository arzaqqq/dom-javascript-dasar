// 1 : getelementbyid
const title = document.getElementById('title');
title.style.color = 'red';
title.innerText = 'Belajar Javascript';


// 2 : getelementbytagname
const buahs = document.getElementById('buah');
const tagname = buahs.getElementsByTagName('li');
// caar 1
tagname[0].style.color = 'blue';
tagname[1].style.color = 'green';
tagname[2].style.fontFamily = 'cursive';

// cara 2 denag nperlulangan
for (let i = 0 ; i < tagname.length ; i++) {
    const element = tagname[i];
    element.style.color = 'red';
}

// cara 3 for of
for (const element of tagname) {
    element.style.color = 'blue';
}



// 3 : getelementbyclassname
const classname = document.getElementsByClassName('item-class');
classname[1].style.color = 'red';

// cara denagn loop
for (const element of classname) {
    element.style.color = 'green';
}



// 4 : queryselector
const item = document.querySelector('#title');
item.style.color = 'yellow';


// 5 : queryselectorall dengan class
const items = document.querySelectorAll('.item-class');
for (const element of items) {
    element.style.color = 'red';
}

// cara 3 queryselectorall denmgan for of dan id
const buah = document.querySelectorAll('#buah li');
for (const element of buah) {
    element.style.color = 'purple';
}

