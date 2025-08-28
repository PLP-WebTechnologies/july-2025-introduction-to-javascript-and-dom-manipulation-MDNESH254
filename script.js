
/* ===============================
 ❤️ Part 1: Mastering JavaScript Basics
=============================== */

// Variable declarations
let userName = "Guest";
let userAge = 20;
let healthScore = 75;

// Conditional check
if (userAge >= 18) {
  console.log(`${userName} is an adult with a health score of ${healthScore}.`);
} else {
  console.log(`${userName} is a minor. Keep focusing on healthy habits!`);
}

// Example of simple decision using operators
let healthStatus = healthScore > 70 ? "Good" : "Needs Improvement";
console.log(`Health status: ${healthStatus}`);


/* ===============================
 ❤️ Part 2: JavaScript Functions
=============================== */

// Function 1: Calculate BMI
function calculateBMI(weightKg, heightM) {
  let bmi = weightKg / (heightM * heightM);
  return bmi.toFixed(2);
}

// Function 2: Toggle visibility of an element
function toggleSection(sectionId) {
  let section = document.getElementById(sectionId);
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Example usage
console.log("Sample BMI:", calculateBMI(68, 1.75));


/* ===============================
 🔁 Part 3: JavaScript Loops
=============================== */

// Loop 1: For loop — generate daily tips
let tips = [
  "Drink at least 2 liters of water daily.",
  "Get 8 hours of sleep.",
  "Exercise for at least 30 minutes.",
  "Eat more fruits and vegetables.",
  "Take regular breaks when studying."
];

for (let i = 0; i < tips.length; i++) {
  console.log(`Tip ${i + 1}: ${tips[i]}`);
}

// Loop 2: While loop — countdown to relaxation
let countdown = 5;
while (countdown > 0) {
  console.log(`Relaxation break starts in: ${countdown}...`);
  countdown--;
}


/* ===============================
 🌐 Part 4: Mastering the DOM
=============================== */

// DOM Interaction 1: Change header text on button click
document.getElementById("changeTitleBtn").addEventListener("click", function () {
  document.getElementById("mainHeader").textContent = "Welcome to Your Healthy Hub!";
});

// DOM Interaction 2: Create a new tip dynamically
document.getElementById("addTipBtn").addEventListener("click", function () {
  let newTip = document.createElement("li");
  newTip.textContent = "Practice mindfulness for 10 minutes daily.";
  document.getElementById("tipsList").appendChild(newTip);
});

// DOM Interaction 3: Highlight the daily routine table
document.getElementById("highlightTableBtn").addEventListener("click", function () {
  let table = document.getElementById("routineTable");
  table.classList.toggle("highlighted");
});
