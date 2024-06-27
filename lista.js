const box = document.getElementById("box");
const ulElement = document.createElement("ul");
ulElement.className = "lista";
box.appendChild(ulElement);

// botão enviar  o valor armazenado no input
function enviar() {
  const inputValor = document.getElementById("inputValor");
  if (inputValor.value.trim() === "") {
    // pegando valor do input e retirando espaços com metodo trim()
    return false; // retorna false se input for enviado em branco
  }
  const btn = document.getElementById("btn-enviar");
  EliEvent(inputValor.value);
  limpar(inputValor);
}

function EliEvent(valor) {
  const liElement = document.createElement("li");
  select(liElement);
  liElement.innerHTML = valor;
  ulElement.appendChild(liElement); // adicionando 'li' dentro da 'ul'
  botãoRemove(liElement); // função com botão remover com argumento 'li'
}

// função adc botão remover ao lado do 'li'
function botãoRemove(liElement) {
  const btn = document.createElement("button");
  btn.className = "btn-remover";
  btn.innerHTML = "X";
  liElement.appendChild(btn);

  btn.addEventListener("click", () => {
    ulElement.removeChild(liElement);
  });
}
// limpar input após clickar no botão
function limpar() {
  inputValor.value = "";
}

function select(liElement) {
  const priority = document.getElementById("priority");
  const valor = priority.value;
  switch (valor) {
    case "baixa": {
      liElement.classList.toggle("verde");
      break;
    }
    case "alta": {
      liElement.classList.toggle("vermelho");
      break;
    }
    case "media": {
      liElement.classList.toggle("amarelo");
      break;
    }
    case "normal": {
      liElement.classList.toggle("normal");
    }
  }
}
