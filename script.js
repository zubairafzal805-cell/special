
// =====================================
// 1. SELECT ALL SCREENS
// =====================================

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


// =====================================
// 2. OPEN MY HEART + 120% LOADING
// =====================================

const startBtn = document.getElementById("startBtn");

let loadingTimer;

startBtn.addEventListener("click", function () {

    clearInterval(loadingTimer);

    showScreen("meter");

    const percentage = document.getElementById("percentage");
    const progressBar = document.getElementById("progressBar");
    const meterText = document.getElementById("meterText");

    let count = 0;

    percentage.textContent = "0%";
    progressBar.style.width = "0%";
    meterText.textContent = "Calculating cuteness...";

    loadingTimer = setInterval(function () {

        count += 2;

        // Percentage goes up to 120%
        percentage.textContent = count + "%";

        // Progress bar fills completely at 100%
        progressBar.style.width =
            Math.min((count / 120) * 100, 100) + "%";

        if (count >= 120) {

            clearInterval(loadingTimer);

            percentage.textContent = "120%";

            meterText.textContent =
                "⚠️ WARNING: TOO CUTE TO HANDLE! 💗";

            // Show warning for 2.5 seconds
            setTimeout(function () {
                showScreen("reasons");
            }, 2500);

        }

    }, 50);

});


// =====================================
// 3. CLICKABLE HEARTS + MESSAGES
// =====================================

const reasonButtons = document.querySelectorAll(".reason");

const messages = [
    "Your smile makes everything brighter 💗",
    "You have the sweetest personality 🎀",
    "You make ordinary moments special ✨",
    "You deserve endless happiness 🧸",
    "You are one of a kind 💖"
];

reasonButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        if (button.classList.contains("revealed")) {
            return;
        }

        button.classList.add("revealed");

        button.textContent = messages[index];

    });

});


// =====================================
// 4. SEE MORE BUTTON
// =====================================

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function () {
    showScreen("letterScreen");
});


// =====================================
// 5. OPEN THE LOVE LETTER
// =====================================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", function () {

    envelope.style.display = "none";

    letter.classList.add("open");

});


// =====================================
// 6. ONE MORE THING BUTTON
// =====================================

const finishBtn = document.getElementById("finishBtn");

finishBtn.addEventListener("click", function () {
    showScreen("finalScreen");
});


// =====================================
// 7. START AGAIN BUTTON
// =====================================

const replayBtn = document.getElementById("replayBtn");

replayBtn.addEventListener("click", function () {

    // Reset the letter
    letter.classList.remove("open");
    envelope.style.display = "flex";

    // Reset all hearts
    reasonButtons.forEach(function (button) {

        button.classList.remove("revealed");
        button.textContent = "♡";

    });

    // Reset the loading screen
    clearInterval(loadingTimer);

    document.getElementById("percentage").textContent = "0%";

    document.getElementById("progressBar").style.width = "0%";

    document.getElementById("meterText").textContent =
        "Calculating cuteness...";

    // Return to the welcome screen
    showScreen("welcome");

});


// =====================================
// 8. BACKGROUND FALLING HEART RAIN
// =====================================

const heartRain = document.querySelector(".heart-rain");

const heartSymbols = ["♥", "♡", "💗", "💕", "♥"];

function createRainHeart() {

    // Avoid errors if the HTML rain element is missing
    if (!heartRain) {
        return;
    }

    const heart = document.createElement("span");

    heart.classList.add("rain-heart");

    heart.textContent =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random heart size
    heart.style.fontSize =
        Math.random() * 15 + 12 + "px";

    // Random falling speed
    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heartRain.appendChild(heart);

    // Remove heart after animation
    setTimeout(function () {
        heart.remove();
    }, 11000);

}


// Create hearts continuously
setInterval(createRainHeart, 180);

// Start with some hearts already falling
for (let i = 0; i < 20; i++) {
    createRainHeart();
}



