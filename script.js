function openLetter() {
    document.getElementById("letter-text").innerHTML = 
        "Happy Women's Day! You are strong, beautiful, and truly special. Keep shining! 💖";
}

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

// Function to generate floating hearts and flowers
function createFloatingElements() {
    const symbols = ["❤️", "🌸", "💖", "🌹"];
    for (let i = 0; i < 20; i++) {
        let element = document.createElement("div");
        element.className = Math.random() > 0.5 ? "heart" : "flower";
        element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(element);
    }
}

createFloatingElements()
