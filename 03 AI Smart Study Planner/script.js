const subjectInput = document.getElementById("subjectInput");
const planBtn = document.getElementById("planBtn");
const result = document.getElementById("result");

const studyPlans = {
    math: {
        emoji: "➗",
        plan: "30 mins practice ➜ 10 mins break ➜ 15 mins revision ➜ quick quiz"
    },
    coding: {
        emoji: "💻",
        plan: "Build mini project ➜ practice JavaScript ➜ debug code ➜ review concepts"
    },
    english: {
        emoji: "📖",
        plan: "Read 20 mins ➜ learn 10 new words ➜ write summary ➜ revise grammar"
    },
    science: {
        emoji: "🔬",
        plan: "Study theory ➜ watch experiment video ➜ take notes ➜ self-test"
    },
    history: {
        emoji: "🏛️",
        plan: "Read chapter ➜ make timeline notes ➜ flashcards ➜ short revision"
    }
};

planBtn.addEventListener("click", () => {
    const subject = subjectInput.value.toLowerCase().trim();

    let emoji = "🤖";
    let message = "AI suggests: 25 mins focus ➜ 5 mins break ➜ repeat 3 times.";

    if (studyPlans[subject]) {
        emoji = studyPlans[subject].emoji;
        message = studyPlans[subject].plan;
    }

    result.innerHTML = `
        <span class="emoji">${emoji}</span>
        <p>${message}</p>
    `;
});