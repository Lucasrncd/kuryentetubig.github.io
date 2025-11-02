document.getElementById("calcTotalBtn").addEventListener("click", () => {
  const elec = parseFloat(document.getElementById("elecCost").value);
  const water = parseFloat(document.getElementById("waterCost").value);

  if (isNaN(elec) || isNaN(water) || elec < 0 || water < 0) {
    alert("Please enter valid costs for both electricity and water.");
    return;
  }

  const total = elec + water;

  document.getElementById("elecOut").textContent = elec.toFixed(2);
  document.getElementById("waterOut").textContent = water.toFixed(2);
  document.getElementById("totalOut").textContent = total.toFixed(2);

  document.getElementById("results").style.display = "block";
});
