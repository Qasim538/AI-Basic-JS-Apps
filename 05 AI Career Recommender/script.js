const careerType = document.getElementById("careerType");
const recommendBtn = document.getElementById("recommendBtn");
const result = document.getElementById("result");

const careers = {
    creative: {
        emoji: "🎨",
        recommendation: "UI Designer, Animator, Graphic Artist, Content Creator"
    },
    coding: {
        emoji: "💻",
        recommendation: "Front-End Developer, Software Engineer, App Developer"
    },
    helping: {
        emoji: "❤️",
        recommendation: "Teacher, Nurse, Therapist, Social Worker"
    },
    business: {
        emoji: "📈",
        recommendation: "Entrepreneur, Marketing Specialist, Product Manager"
    },
    science: {
        emoji: "🔬",
        recommendation: "Data Scientist, Researcher, Engineer, Lab Analyst"
    }
};

recommendBtn.addEventListener("click", () => {
    const selected = careerType.value;

    if (!selected) {
        result.innerHTML = `
            <span class="emoji">🤔</span>
            <p>Please choose an option first.</p>
        `;
        return;
    }

    const match = careers[selected];

    result.innerHTML = `
        <span class="emoji">${match.emoji}</span>
        <p>${match.recommendation}</p>
    `;
});