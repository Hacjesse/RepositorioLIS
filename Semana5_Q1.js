function createList(quantidadeItens, mensagem) {
  let i = 0;
  let ul = document.querySelector('ul');

  while (i < quantidadeItens) {
    var li = document.createElement('li');
    var texto = document.createTextNode(mensagem);
    li.appendChild(texto);
    ul.appendChild(li);
    i++;
  }
}
let qtdItens = parseInt(prompt('Quantos intens serão exibidos? '));
let mensagem = prompt('Qual a mensagem ?');
createList(qtdItens, mensagem);
