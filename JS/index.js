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

// Function to handle the donation process...
function processBalance(inputId, userBalanceId, targetBalanceId, donationPurpose) {
  const donationAmount = getInputValue(inputId);
  const userBalance = getTextAsNumber(userBalanceId);
  const targetBalance = getTextAsNumber(targetBalanceId);

  const updatedUserBalance = userBalance - donationAmount;
  const updatedTargetBalance = targetBalance + donationAmount;

  // Validate donation amount...
  if (donationAmount <= 0 || donationAmount > userBalance) {
    alert("Please input valid Amount!");
    return;
  }

  // Update balances...
  updateElementText(userBalanceId, updatedUserBalance);
  updateElementText(targetBalanceId, updatedTargetBalance);

  alert("Donation successful!");
}