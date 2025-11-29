function verificarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("mensagem-erro");

  // Defina aqui o login e senha corretos
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    // Redireciona para a página inicial
    window.location.href = "pagina_inicial.html"; // substitua pelo nome da sua página
    return false; // impede o formulário de recarregar
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos!";
    return false; // impede o recarregamento da página
  }
}