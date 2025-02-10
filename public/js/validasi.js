const KEYDOWN_ALLOWED_KEYS = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Backspace',
    'Delete',
    'PageUp',
    'PageDown',
    'Home',
    'End'
];

function isNumber(char) {
    return char >= "0" && char <= "9";
}

function onKeyDown(event) {
    console.log(`event = ${event.key}. Code = ${event.code}.`);

    // Mencegah input selain angka
    if (isNumber(event.key)) {
        // Angka diizinkan
    } else if (KEYDOWN_ALLOWED_KEYS.includes(event.key)) {
        // Tombol khusus diizinkan
    } else {
        event.preventDefault(); // Blokir input yang tidak diizinkan
    }
}

function onKeyUp() {
    console.log("onKeyUp");
}

function validateClipboard(text) {
    for (let i = 0; i < text.length; i++) {
        if (!isNumber(text[i])) {
            return false; // Jika ada karakter yang bukan angka, kembalikan false
        }
    }
    return true; // Semua karakter adalah angka
}

function onPaste(evt) {
    const pastedText = evt.clipboardData.getData('text/plain'); // Ambil teks yang ditempel
    if (!validateClipboard(pastedText)) {
        evt.preventDefault(); // Blokir paste jika teks tidak valid
        console.log('Paste diblokir: Teks mengandung karakter non-angka.');
    } else {
        console.log('Paste diizinkan: Teks valid.');
    }
}

// Tambahkan event listener ke elemen dengan class "number"
for (let el of document.getElementsByClassName("number")) {
    el.addEventListener("keydown", onKeyDown);
    el.addEventListener("keyup", onKeyUp);
    el.addEventListener("paste", onPaste); // Tambahkan event listener untuk paste
}