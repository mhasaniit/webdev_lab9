function init() {
  const inputField = document.getElementById('entryinput');
  const alertButton = document.getElementById('entrybutton');
  const outputHeading = document.getElementById('textoutput');
  alertButton.addEventListener('click', function() {
    const inputValue = inputField.value;
    alert('Mustafa Hasan: ' + inputValue);
    outputHeading.textContent = inputValue;
  });
}
window.addEventListener('load', init);
