// Function to get the value from an input field and convert a number...
function getInputValue(id) {
  const inputElement = document.getElementById(id);
  const value = parseFloat(inputElement.value);
  return isNaN(value) || value < 0 ? 0 : value;
}

// Function to get the number from an element's text...
function getTextAsNumber(id) {
  const element = document.getElementById(id);
  return parseFloat(element.innerText) || 0;
}

// Function to update an element's text with a new number...
function updateElementText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}