// Calculates total booking amount after basic input validation.
function calculateTotal(pricePerNight, nightsInputId, resultId) {
  var nightsInput = document.getElementById(nightsInputId);
  var resultElement = document.getElementById(resultId);
  var nights = parseInt(nightsInput.value, 10);

  if (isNaN(nights) || nights <= 0) {
    resultElement.style.color = "#c0392b";
    resultElement.innerHTML = "Please enter a valid number of nights (greater than 0).";
    return;
  }

  var total = pricePerNight * nights;
  resultElement.style.color = "#0a3d62";
  resultElement.innerHTML = "Total Price: $" + total;
}
