function openLetter() {
    document.getElementById("letter-text").innerHTML = 
        "💖 Happy Women's Day! You are unique, strong, and full of magic. Keep shining! 🌟";
}

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

// Generare inimi și flori plutitoare
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

createFloatingElements();
