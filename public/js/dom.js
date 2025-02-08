const title = document.getElementById('title');
title.style.color = 'red';


// 2 : getelementbytagname
const tagname = document.getElementsByTagName('li');
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
    element.style.color = 'gray';
}