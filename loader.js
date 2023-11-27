document.addEventListener("DOMContentLoaded", function () {
    // Carregar dinamicamente o conteúdo da página de carregamento
    var loaderContainer = document.createElement("div");
    loaderContainer.id = "loader-container";
    loaderContainer.style.display = "flex";
    loaderContainer.style.justifyContent = "center";
    loaderContainer.style.alignItems = "center";
    loaderContainer.innerHTML = "Carregando...";

    document.body.appendChild(loaderContainer);

    let segundos = 0;
    setInterval(function () {
      const letras = ['4', 'S', 'Y', 'S'];
      document.getElementById('loading-text').innerText += letras[segundos % letras.length];
      segundos++;
    }, 1000);

    // Simular um tempo de carregamento (2 segundos neste exemplo)
    setTimeout(function () {
        // Remover a página de carregamento
        document.body.removeChild(loaderContainer);

        // Mostrar o conteúdo principal
        document.body.style.display = "block";
    }, 5000);

    // Fetch para obter o conteúdo da página de carregamento (load.html)
    fetch("load.html")
        .then(response => response.text())
        .then(html => {
            // Inserir o conteúdo da página de carregamento no loaderContainer
            loaderContainer.innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar a página de carregamento:", error));
});
