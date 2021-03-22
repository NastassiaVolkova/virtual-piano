const PIANOKEYS = document.querySelectorAll(".piano-key");
const PIANO = document.querySelector(".piano");

const startSound = (event) => {
    event.target.classList.add("piano-key-active");
}

const stopSound = (event) => {
    event.target.classList.remove("piano-key-active");
} 

const startCorrespondOver = (event) => {
    event.target.classList.add("piano-key-active");
    PIANOKEYS.forEach((elem) => {
        elem.addEventListener("mouseover", startSound)
        elem.addEventListener("mouseout", stopSound)
    })
}

const stopCorrespondOver = () => {
    PIANOKEYS.forEach((elem) => {
        elem.classList.remove("piano-key-active");
        elem.removeEventListener("mouseover", startSound)
        elem.removeEventListener("mouseout", stopSound)
    })
}

PIANO.addEventListener("mousedown", startCorrespondOver)
PIANO.addEventListener("mouseup", stopCorrespondOver)

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

const piano = document.querySelector('.piano');

piano.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }   
});

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if (!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("piano-key-active");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('piano-key-active');
}

const keys = document.querySelectorAll(".piano-key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

document.addEventListener('click', function (event) {
    if (!event.target.hasAttribute('fullscreen')) return;
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}, false);

const letter = document.querySelector(".btn-letters");
const note = document.querySelector(".btn-notes");
const pianokey = document.querySelectorAll(".piano-key");

function letterChange() {
    letter.className = "btn btn-letters btn-active";
    note.className = "btn btn-notes";
    console.log(letter);
    console.log(pianokey);
    pianokey.forEach(element => {element.classList.add("letter", "piano-key-letter", "piano-key-remove-mouse", "piano-key-active-pseudo");})
}

function noteChange() {
    letter.className = "btn btn-letters";
    note.className = "btn btn-notes btn-active";
    console.log(note);
    pianokey.forEach(element => {element.classList.remove("letter", "piano-key-letter", "piano-key-remove-mouse", "piano-key-active-pseudo");})
};

function noteLetter() {
    PIANOKEYS.forEach((elem) => {
        elem.addEventListener("mouseover", letterChange)
        elem.addEventListener("mouseout", noteChange)
    })
}
