const board = document.querySelector("#board");

// const sounds = [
//     'C4',
//     'D4',
//     'E4',
//     'F4',
//     'G4',
//     'A4',
//     'B4',
//     'C5'
// ];

const sounds = [
    {
        key: 'a',
        sound: 'C4'
    },
    {
        key: 's',
        sound: 'D4'
    },
    {
        key: 'd',
        sound: 'E4'
    },
    {
        key: 'f',
        sound: 'F4'
    },
    {
        key: 'j',
        sound: 'G4'
    },
    {
        key: 'k',
        sound: 'A4'
    },
    {
        key: 'l',
        sound: 'B4'
    },
    {
        key: ';',
        sound: 'C5'
    },
]



const createKey = (keyName) => {
    const button = document.createElement("button");
    button.innerText = keyName;
    button.className = ` ${keyName} key bg-blue-200 duration-200 text-blue-600 font-mono font-bold rounded-xl active:opacity-75`;
    return button;
}

sounds.forEach(({ sound }) => board.append(createKey(sound)));

const playSound = (keyName) => {
    const audio = new Audio(`./sounds/${keyName}.mp3`);
    audio.play();
}

board.addEventListener("click", (event) => {
    // console.log(event.target.innerText);

    if (event.target.classList.contains("key")) {
        playSound(event.target.innerText);
    }
})

document.addEventListener("keyup", (event) => {
    // console.log(event.key);

    const currentSound = sounds.find(el => el.key === event.key);

    if (currentSound) {
        const currentKey = document.querySelector(`.${currentSound.sound}`);
        currentKey.classList.add("opacity-75");

        currentKey.addEventListener("transitionend", () => {
            currentKey.classList.remove("opacity-75");
        })


        playSound(currentSound.sound);
    }

})