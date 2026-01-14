const numero = Number(prompt('Digite um número:'));
const numeroTitutlo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitutlo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)} <p/>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;