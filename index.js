const main = () => {
    document.body.style.opacity='1';

    typewriter("Bun venit.", 150, "welcome-text");
    setTimeout(() => {
        reverse_typewriter(50, "welcome-text");
        setTimeout(() => {
            clear("welcome-text");
            typewriter("Descarcă Swordwaves!", 150, "welcome-text");
        }, 500);
    }, 3000);
}

const clear = (id) => {
    document.getElementById(id).innerText = "";
}

const typewriter = (text, speed, id) => {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            document.getElementById(id).innerHTML += text[i];
        }, i * speed);
    }
}

const reverse_typewriter = (speed, id) => {
    let len = document.getElementById(id).innerText.length;
    for (let i = 0; i < len; i++) {
        setTimeout(() => {
            let to_set = document.getElementById(id).innerText.substring(0, len - i - 1);
            document.getElementById(id).innerHTML = to_set + "/";
        }, i * speed);
    }
}