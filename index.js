//variaveis
const ToggleBtn = document.selectbyid('adicionar');
const divList = document.selectbyid('.overlay');

ToggleBtn.addEventListener('click', () =>{
  if(divList.style.display === 'none'){
    divList.style.display ='block';
    ToggleBtn.InnerHTML = 'Hide List'
  }else{
    divList.style.display ='none';
    ToggleBtn.InnerHTML = 'Show List'
  }
});