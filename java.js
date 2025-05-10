
let sequencia = [];
let cartela = [];

// Função para criar a cartela de 1 a 75
function criarCartela() {
  const cartelaElement = document.getElementById("cartela");

  for (let i = 1; i <= 75; i++) {
    const numeroElement = document.createElement("div");
    numeroElement.classList.add("numero");
    numeroElement.textContent = i;
    numeroElement.setAttribute("data-numero", i);
    cartela.push(numeroElement);
    cartelaElement.appendChild(numeroElement);
  }
}

// Função para adicionar o número à sequência e destacar o número na cartela
function adicionarNumero() {
  const numeroInput = document.getElementById("numInput");
  const numero = parseInt(numeroInput.value, 10); // garante que é número

  if (isNaN(numero) || numero < 1 || numero > 75) {
    alert("Por favor, insira um número válido entre 1 e 75!");
    return;
  }

  if (sequencia.includes(numero)) {
    alert("Este número já foi sorteado!");
    return;
  }

  // Exibe o número grande com uma animação
  const display = document.getElementById("display");
  display.textContent = numero;
  display.classList.add("animate");

  // Remove a animação após ela terminar
  setTimeout(() => {
    display.classList.remove("animate");
  }, 300);

  // Adiciona o número à sequência
  sequencia.push(numero);

  // Atualiza o histórico
  document.getElementById("historyList").textContent = sequencia.join(", ");

  // Destaca o número na cartela
  const numeroElement = document.querySelector(`.numero[data-numero='${numero}']`);
  if (numeroElement) {
    numeroElement.classList.add("aceso");
  }

  // Limpa o campo de entrada
  numeroInput.value = "";
  numeroInput.focus();
}

// Inicializa a cartela ao carregar a página
window.onload = criarCartela;

// Permite adicionar o número ao pressionar Enter
document.addEventListener("DOMContentLoaded", function () {
  const numeroInput = document.getElementById("numInput");
  numeroInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      adicionarNumero();
    }
  });
});
