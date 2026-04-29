const compliments = [
    "You have a brilliant creative mind.",
    "You learn faster than you think.",
    "You were built for big things.",
    "Your ideas can change the future.",
    "You have amazing potential in tech."
];

const btn = document.querySelector("button");
const output = document.getElementById("output");

btn.addEventListener("click",()=>{
    const random = Math.floor(Math.random()*compliments.length);
    output.textContent = compliments[random];
});