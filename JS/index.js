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

  // Create history entry...
  const historyItem = document.createElement("div");
  historyItem.classList = "flex flex-col align-middle container mx-auto p-7 mt-5 border-gray-100 border-2 rounded-lg justify-between";

  historyItem.innerHTML = `
    <P class="font-semibold text-lg">${donationAmount} Taka is Donated for ${donationPurpose}, Bangladesh</P>
    <P class="font-semibold text-lg">Date: ${new Date().toLocaleString()}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  alert("Donation successful!");
}

// Add event listeners to buttons with specific donation purposes....
document
  .getElementById("add-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    processBalance("input-flood-money", "my-balance", "flood-balance", "Flood at Noakhali");
  });

document
  .getElementById("add-feni-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    processBalance("input-relief-money", "my-balance", "relief-balance", "Food Relief in Feni");
  });

document
  .getElementById("add-aid-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    processBalance("input-aid-money", "my-balance", "aid-balance", "Aid for Quota Movement");
  });

// Button switching...
const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab");

historyTab.addEventListener("click", function () {

  historyTab.classList.add("bg-green-400");

  donationTab.classList.remove("bg-green-400");

  document.getElementById("donation-body").classList.add("hidden");
  document.getElementById("history").classList.remove("hidden")

});

donationTab.addEventListener("click", function () {

  donationTab.classList.add("bg-green-400");

  historyTab.classList.remove("bg-green-400");

  document.getElementById("donation-body").classList.remove("hidden");
  document.getElementById("history").classList.add("hidden")

});