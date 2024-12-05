
const philosophers = [
    {
        name: "John Stuart Mill",
        photo: "media/wart_john_stuart.jpg",
        stance: "Utilitarianism",
        arguments: [
            "Utilitarianism ensures the greatest happiness for the greatest number!",
            "The morality of actions depends on their utility in promoting happiness.",
            "Sacrificing one for the many is justified if it maximizes happiness."
        ]
    },
    {
        name: "Immanuel Kant",
        photo: "media/big_head_kantian.jpg",
        stance: "Deontology",
        arguments: [
            "Deontology prioritizes moral principles over consequences!",
            "It’s the action itself that determines morality, not the result.",
            "Murder is always wrong, regardless of any good outcomes."
        ]
    },
    {
        name: "Jeremy Bentham",
        photo: "media/jeremy.jpg",
        stance: "Consequentialism",
        arguments: [
            "Consequentialism is all about outcomes—results matter!",
            "The end justifies the means when the results are positive.",
            "Murdering a murderer might save others from harm."
        ]
    }
];

const objectionElement = document.getElementById("objection");
const objectionSound = document.getElementById("objection-sound");
const characterImage = document.getElementById("character-image");
const speechElement = document.getElementById("speech");
const promptElement = document.getElementById("prompt");

objectionSound.volume = 0.2;

function showObjection() {
    objectionElement.style.display = "block";
    objectionSound.play();
    setTimeout(() => {
        objectionElement.style.display = "none";
    }, 1000);
}

function getRandomPhilosopher() {
    const randomIndex = Math.floor(Math.random() * philosophers.length);
    return philosophers[randomIndex];
}

function getRandomArgument(philosopher) {
    const randomIndex = Math.floor(Math.random() * philosopher.arguments.length);
    return philosopher.arguments[randomIndex];
}

function updatePhilosopher() {
    const philosopher = getRandomPhilosopher();
    const argument = getRandomArgument(philosopher);

    characterImage.src = philosopher.photo;
    characterImage.alt = philosopher.name;
    speechElement.innerHTML = `<strong>${philosopher.stance}:</strong> ${argument}`;
    promptElement.textContent = "Press SPACE to object again";
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        showObjection();
        updatePhilosopher();
    }
});

// Add an argument to a philosopher
function addArgument(name, newArgument) {
    const philosopher = philosophers.find(phil => phil.name === name);
    if (philosopher) {
        philosopher.arguments.push(newArgument);
    }
}
