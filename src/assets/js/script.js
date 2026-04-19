function direcionarUsuario() {
  const tipoElement = document.getElementById("tipoUsuario");

  if (!tipoElement) return;

  const tipo = tipoElement.value;

  if (tipo === "transportador") {
    window.location.href = "../transportador/dashboard.html";
  } else if (tipo === "passageiro" || tipo === "passageiro_responsavel") {
    window.location.href = "../passageiro/dashboard.html";
  } else {
    alert("Por favor, selecione o tipo de usuário antes de prosseguir.");
  }
}

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
  }
}

function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target.classList.contains("overlay")) {
    event.target.style.display = "none";
  }
};

function tentarSairDaRota() {
  abrirModal("modalFinalizar");
}

function confirmarInicioRota() {
  window.location.href = "trajeto-vivo.html";
}

function confirmarFimRota() {
  window.location.href = "../dashboard.html";
}

function logout() {
  const path = window.location.pathname;
  if (path.includes("/rotas/") || path.includes("/veiculos/")) {
    window.location.href = "../../auth/login.html";
  } else {
    window.location.href = "../auth/login.html";
  }
}
