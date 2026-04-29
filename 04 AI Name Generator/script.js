const category = document.getElementById("category");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

const names = {
    startup: [
        "Nexora",
        "ByteFlow",
        "VisionCore",
        "CodeNova",
        "TechSpark"
    ],
    youtube: [
        "Code With Alex",
        "Future Creator",
        "Web Wizard",
        "Build It Easy",
        "Next Gen Coding"
    ],
    app: [
        "Taskly",
        "QuickFit",
        "MindTap",
        "SnapPlan",
        "FlowTrack"
    ],
    brand: [
        "CreativePulse",
        "BrightEdge",
        "VisionCraft",
        "DigitalRise",
        "BoldWave"
    ]
};

generateBtn.addEventListener("click", () => {
    const selected = category.value;
    const list = names[selected];

    const randomName = list[Math.floor(Math.random() * list.length)];

    result.innerHTML = `
        <span class="emoji">🚀</span>
        <p><strong>${randomName}</strong></p>
    `;
});