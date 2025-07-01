function selectRadio(option) {
  const allOptions = document.querySelectorAll('.radio-option');
  allOptions.forEach(opt => opt.classList.remove('selected'));

  option.classList.add('selected');

  const radioInput = option.querySelector('.radio-input');
  radioInput.checked = true;
}
