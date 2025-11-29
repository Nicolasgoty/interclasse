function showToast() {
        const t = document.getElementById("toast");
        t.classList.add("show");
        clearTimeout(t._hide);
        t._hide = setTimeout(() => t.classList.remove("show"), 1200);
      }

      function verificarLogin() {
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;
        const mensagemErro = document.getElementById("mensagem-erro");

        const usuarioCorreto = "admin";
        const senhaCorreta = "1234";

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
          // mostra feedback, depois navega
          showToast();
          setTimeout(() => (window.location.href = "Inicio.html"), 800);
        } else {
          mensagemErro.textContent = "Usuário ou senha incorretos!";
        }
      }

      document
        .getElementById("entrarBtn")
        .addEventListener("click", verificarLogin);
