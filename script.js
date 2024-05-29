let happiness = 100;
let hunger = 0;
let energy = 100;

const happinessElement = document.getElementById('happiness');
const hungerElement = document.getElementById('hunger');
const energyElement = document.getElementById('energy');
const petImage = document.getElementById('pet-image');

function updateStatus() {
    happinessElement.textContent = happiness;
    hungerElement.textContent = hunger;
    energyElement.textContent = energy;

    if (happiness > 70) {
        petImage.src = 'happy.avif';
    } else if (happiness > 30) {
        petImage.src = 'neutral.avif';
    } else {
        petImage.src = 'sad.avif';
    }
}

function feedPet() {
    hunger = Math.max(0, hunger - 20);
    happiness = Math.min(100, happiness + 10);
    energy = Math.min(100, energy + 5);
    updateStatus();
}

function playWithPet() {
    happiness = Math.min(100, happiness + 20);
    hunger = Math.min(100, hunger + 10);
    energy = Math.max(0, energy - 15);
    updateStatus();
}

function restPet() {
    energy = Math.min(100, energy + 20);
    happiness = Math.min(100, happiness + 5);
    updateStatus();
}

function decreaseStatus() {
    hunger = Math.min(100, hunger + 5);
    happiness = Math.max(0, happiness - 5);
    energy = Math.max(0, energy - 5);
    updateStatus();
}

setInterval(decreaseStatus, 5000);

updateStatus();
