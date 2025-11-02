const generateBtn = document.getElementById("generateBtn");
const calculateBtn = document.getElementById("calculateBtn");
const peopleInputs = document.getElementById("peopleInputs");
const resultsDiv = document.getElementById("results");
const totalPeopleSpan = document.getElementById("totalPeople");
const sharePerPersonSpan = document.getElementById("sharePerPerson");
const houseResultsDiv = document.getElementById("houseResults");

generateBtn.addEventListener("click", () => {
  const households = parseInt(document.getElementById("households").value);
  peopleInputs.innerHTML = "";

  if (isNaN(households) || households <= 0) {
    alert("Please enter a valid number of households.");
    return;
  }

  for (let i = 1; i <= households; i++) {
    const label = document.createElement("label");
    label.textContent = `House ${i}`;
    const input = document.createElement("input");
    input.type = "number";
    input.id = `house${i}`;
    input.placeholder = "Number of people";
    input.required = true;
    peopleInputs.appendChild(label);
    peopleInputs.appendChild(input);
  }
});

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(document.getElementById("bill").value);
  const households = parseInt(document.getElementById("households").value);

  if (isNaN(bill) || bill <= 0 || isNaN(households) || households <= 0) {
    alert("Please enter valid inputs first.");
    return;
  }

  let totalPeople = 0;
  const peopleCounts = [];

  for (let i = 1; i <= households; i++) {
    const count = parseInt(document.getElementById(`house${i}`).value);
    if (isNaN(count) || count <= 0) {
      alert(`Please enter a valid number of people for House ${i}.`);
      return;
    }
    peopleCounts.push(count);
    totalPeople += count;
  }

  const sharePerPerson = bill / totalPeople;
  totalPeopleSpan.textContent = totalPeople;
  sharePerPersonSpan.textContent = sharePerPerson.toFixed(4);

  let houseHTML = "";
  peopleCounts.forEach((count, index) => {
    const householdTotal = count * sharePerPerson;
    houseHTML += `<p><strong>House ${index + 1}:</strong> ₱ ${householdTotal.toFixed(4)}</p>`;
  });

  houseResultsDiv.innerHTML = houseHTML;
  resultsDiv.style.display = "block";
});

