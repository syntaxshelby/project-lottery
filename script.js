// STORE YOUR PROJECT IDEAS IN A LIST (ARRAY) 
const projectIdeas = [
  "What should I be for Halloween.",
  "Escape Room.",
  "Fun interactive daily journal.",
  "Goal Garden.",
  "Vision Board with Vision Planner.",
  "Vending Machine for compliments and insults.",
  "Secret Keeper, tell me your biggest secrets anonymously.",
  "Whats the Verdict.",
];

// CONNECT JAVASCRIPT TO HTML ELEMENTS
const ideaDisplay = document.getElementById("projectIdea");
const generateBtn = document.getElementById("generateBtn");
const notesArea = document.getElementById("notesArea")
const clearNotesBtn = document.getElementById("clearNotesBtn");

// pick and display a random project idea when the button is clicked
generateBtn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * projectIdeas.length);
  ideaDisplay.textContent = projectIdeas[randomIndex];
});

// load any saved notes from the browser when the page opens
notesArea.value = localStorage.getItem("savedBrainstorm") || "";

// save your notes automatically every time you type
notesArea.addEventListener("input", function() {
  localStorage.setItem("savedBrainstorm", notesArea.value);
});

// clear the notepad and saved memory when Clear Notes is clicked
clearNotesBtn.addEventListener("click", function() {
  notesArea.value = "";
  localStorage.removeItem("savedBrainstorm");
});

setTimeout(() => {
  document.body.classList.add("fade-in");
}, 10);
