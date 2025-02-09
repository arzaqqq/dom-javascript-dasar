

// CARA 1 PANGGIL
function showalert()
{
    alert('ini alert button1');
}
function showalert2()
{
    alert('ini alert button 2');
}


document.getElementById("button1").onclick = showalert;
document.getElementById("button1").onclick = showalert2 ;


// CARA 2 PANGGIL
document.getElementById("button2").addEventListener("click",showalert); 
document.getElementById("button2").addEventListener("click",showalert2); 


/* 
cara panggil dengan addeventlistener lebik vaik daripada onclick 
karena jika dengan onclick bis ahapus function lasain ,tapijia addeventlistener tidak dihapus
dan addeventlistener bisa dihapsu dengan removeeventlistener

*/