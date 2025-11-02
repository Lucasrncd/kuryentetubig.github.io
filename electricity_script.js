// Equivalent of C++ logic
function totalConsumption(curr, past) {
  return curr - past;
}

function expenses(consumption, kwH) {
  return consumption * kwH;
}

// Handle form submission
document.getElementById("electricityForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const currRead = parseFloat(document.getElementById("currRead").value);
  const pastRead = parseFloat(document.getElementById("pastRead").value);
  const kwH = parseFloat(document.getElementById("kwH").value);

  const consumption = totalConsumption(currRead, pastRead);
  const payment = expenses(consumption, kwH);

  // Display results (4 decimal places)
  document.getElementById("currOut").textContent = currRead.toFixed(2);
  document.getElementById("pastOut").textContent = pastRead.toFixed(2);
  document.getElementById("consumption").textContent = consumption.toFixed(2);
  document.getElementById("rate").textContent = kwH.toFixed(2);
  document.getElementById("payment").textContent = payment.toFixed(4);

  document.getElementById("results").style.display = "block";
});
