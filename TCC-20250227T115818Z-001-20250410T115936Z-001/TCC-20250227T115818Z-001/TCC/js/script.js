// Espera o conteúdo da página ser carregado
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todos os botões
    const buttons = document.querySelectorAll('.btn');
  
    // Adiciona um evento de clique para cada botão
    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        // Evita o comportamento padrão do link (se for um link)
        event.preventDefault();
  

       
  
        // Verifica o conteúdo do botão e redireciona o usuário
        if (this.textContent === "Veja os Pacotes") {
          window.location.href = "pacotes.html"; // Redireciona para a página pacotes.html
        } else if (this.textContent === "Saiba Mais") {
          window.location.href = "pacotes.html"; // Exemplo de redirecionamento
        }
      });
    });
  });
  