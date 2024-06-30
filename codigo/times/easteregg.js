// Referência ao ponto clicável e à dica
const secretPoint = document.getElementById('secretPoint');
const hint = document.getElementById('hint');

// Adicione eventos de mouse ao ponto clicável
secretPoint.addEventListener('click', () => {
  Swal.fire({
    title: "Dica!",
    text: "Frase pela qual ficou famoso o Aspas(Brasileiro Campeão Mundial de Valorant)",
    icon: "alert"
  });
});



// Variável para armazenar a sequência de teclas digitadas
let typedSequence = '';

// Adicione um evento de teclado ao documento
document.addEventListener('keydown', event => {
  // Atualize a sequência de teclas digitadas
  typedSequence += event.key;
  
  // Verifique se a frase "gira aspas" foi digitada
  if (typedSequence.includes('gira aspas')) {
    // Revele o personagem secreto
    const hiddenCharacter = document.getElementById('hiddenCharacter');
    hiddenCharacter.style.display = 'block';
  }
});