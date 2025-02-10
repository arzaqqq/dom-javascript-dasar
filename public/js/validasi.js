function onKeyDown(e) {
    console.log("onKeyDown");
}

function onKeyUp(){
    console.log("onKeyUp");
}


// pada keydonw saat di input dai akan terus muncul sampai tombol dilepas, kalau di keyup cuma seklai kalau dilepas baru muncul ,(banayk pakai keydown)
for (el of document.getElementsByClassName("number")) {
    el.addEventListener("keydown", onKeyDown);
    el.addEventListener("keyup", onKeyUp);
}