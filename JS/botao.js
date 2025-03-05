const botao = document.getElementById('botao');

botao.addEventListener('mousedown', () => {
    botao.classList.add('clicado');
  });
  
  botao.addEventListener('mouseup', () => {
    botao.classList.remove('clicado');
  });
  
  botao.addEventListener('mouseleave', () => {
    botao.classList.remove('clicado');
  });