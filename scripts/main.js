function selectRadio(option) {
  const allOptions = document.querySelectorAll('.radio-option');
  allOptions.forEach(opt => opt.classList.remove('selected'));

  option.classList.add('selected');

  const radioInput = option.querySelector('.radio-input');
  radioInput.checked = true;
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('miFormulario');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();       // Evita el envío normal del formulario
    formulario.reset();           // Limpia todos los campos

    // Espera un momento (opcional) y redirige
    setTimeout(() => {
      window.location.href = '../pages/gracias.html'; // Ruta relativa a la página de agradecimiento
    }, 300);
  });
});