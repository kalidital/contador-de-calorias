// Referencias a elementos del DOM
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
 
// Indica si se detectó una entrada inválida
let isError = false;
 
// Elimina +, - y espacios de un texto
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
 
// Detecta notación científica (ej. 1e3)
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// Añade nuevos campos de texto y número dinámicamente
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">
    Entrada ${entryNumber} Nombre
  </label>
  <input
    type="text"
    id="${entryDropdown.value}-${entryNumber}-name"
    placeholder="Nombre"
  />
  <label for="${entryDropdown.value}-${entryNumber}-calories">
    Entrada ${entryNumber} Calorías
  </label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calorías"
  />`;
  
  // Inserta el HTML al final sin alterar las entradas previas
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

// Prepara el procesamiento y limpieza de las calorías de los inputs
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
  }
}

// Asignación de eventos
addEntryButton.addEventListener("click", addEntry);