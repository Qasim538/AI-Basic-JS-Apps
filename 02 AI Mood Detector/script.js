const moodInput = document.getElementById("moodInput");
const detectBtn = document.getElementById("detectBtn");
const result = document.getElementById("result");

detectBtn.addEventListener("click", () => {
    const mood = moodInput.value.toLowerCase().trim();

    let emoji = "🤖";
    let message = "AI is still learning your mood...";

    if (mood.includes("happy") || mood.includes("excited")) {
        emoji = "😄";
        message = "AI says you're feeling positive and full of energy!";
    }
    else if (mood.includes("sad") || mood.includes("down")) {
        emoji = "💙";
        message = "AI senses sadness. Better days are ahead.";
    }
    else if (mood.includes("tired") || mood.includes("sleepy")) {
        emoji = "😴";
        message = "AI recommends rest and a little recharge time.";
    }
    else if (mood.includes("angry") || mood.includes("mad")) {
        emoji = "😠";
        message = "AI detects frustration. Take a moment and reset.";
    }
    else if (mood.includes("stressed") || mood.includes("worried")) {
        emoji = "🧘";
        message = "AI suggests breathing deeply and slowing down.";
    }

    result.innerHTML = `
        <span class="emoji">${emoji}</span>
        <h1>${message}</h1>
    `;
});