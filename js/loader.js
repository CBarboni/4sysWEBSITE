document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");
    var loaderImage = document.getElementById("loaderImage");

    var imageUrls = [
        "/imagens/gifpng1.png",
        "/imagens/gifpng2.png",
        "/imagens/gifpng3.png",
        "/imagens/gifpng4.png",
        "/imagens/gifpng5.png",
        // Adicione mais URLs conforme necessário
    ];

    var currentIndex = 0;

    function changeImage() {
        loaderImage.src = imageUrls[currentIndex];
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    setInterval(changeImage, 500); // Muda a imagem a cada segundo

    setTimeout(function() {
        loader.style.display = "none";
        content.style.display = "block";
    }, 3000); // Exibe o conteúdo após 5 segundos (ajuste conforme necessário)
});



// document.addEventListener("DOMContentLoaded", function () {
//     // Carregar dinamicamente o conteúdo da página de carregamento
//     var loaderContainer = document.createElement("div");
//     loaderContainer.id = "loader-container";
//     loaderContainer.style.display = "flex";
//     loaderContainer.style.justifyContent = "center";
//     loaderContainer.style.alignItems = "center";
//     loaderContainer.innerHTML = "Carregando...";

//     document.body.appendChild(loaderContainer);

//     let segundos = 0;
//     setInterval(function () {
//       const letras = ['4', 'S', 'Y', 'S'];
//       document.getElementById('loading-text').innerText += letras[segundos % letras.length];
//       segundos++;
//     }, 1000);

//     // Simular um tempo de carregamento (2 segundos neste exemplo)
//     setTimeout(function () {
//         // Remover a página de carregamento
//         document.body.removeChild(loaderContainer);

//         // Mostrar o conteúdo principal
//         document.body.style.display = "block";
//     }, 5000);

//     // Fetch para obter o conteúdo da página de carregamento (load.html)
//     fetch("load.html")
//         .then(response => response.text())
//         .then(html => {
//             // Inserir o conteúdo da página de carregamento no loaderContainer
//             loaderContainer.innerHTML = html;
//         })
//         .catch(error => console.error("Erro ao carregar a página de carregamento:", error));
// });


