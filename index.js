//abrie e fechar
const ToggleBtn2 = document.getElementById('ToggleBtn2');
const ToggleBtn = document.getElementById('adicionar');
const divList = document.getElementById('overlay');
ToggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'block') {
    divList.style.display = 'none';
  } else {
    divList.style.display = 'block';
  }
});


ToggleBtn2.addEventListener('click', () => {
  if (divList.style.display === 'block') {
    divList.style.display = 'none';
  } else {
    divList.style.display = 'block';
  }
});