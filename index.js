// $(document).ready(function() {
//     // Esconde todos os submenus e opções inicialmente
//     $('.dropdown-submenu, .dropdown-options').hide();
  
//     // Adiciona o comportamento de clique nas categorias
//     $('.dropdown-categoria').click(function() {
//       // Esconde todos os submenus e opções
//       $('.dropdown-submenu, .dropdown-options').hide();
  
//       // Mostra o submenu correspondente à categoria clicada
//       $(this).find('.dropdown-submenu').slideDown('fast');
//     });
  
//     // Adiciona o comportamento de clique nas subcategorias
//     $('.dropdown-subcategoria').click(function() {
//       // Esconde todos os submenus e opções
//       $('.dropdown-submenu, .dropdown-options').hide();
  
//       // Mostra as opções correspondentes à subcategoria clicada
//       $(this).find('.dropdown-options').slideDown('fast');
//     });
//   });
  

// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//       items: 3, // Mostra 3 itens por vez
//       loop: true,
//       margin: 20, // Ajuste o espaço entre os itens conforme necessário
//       nav: true,
//       responsive: {
//         0: {
//           items: 1
//         },
//         600: {
//           items: 2
//         },
//         768: {
//           items: 3
//         }
//       }
//     });
//   });

$(document).ready(function(){
    setInterval(function(){
      // Calcula o próximo valor de rotação da barra de rolagem
      var currentScrollLeft = $(".scrollable-row").scrollLeft();
      var cardWidth = $(".card").outerWidth(true);
      var newScrollLeft = currentScrollLeft + cardWidth;

      // Se já estiver no final, volte ao início
      if (newScrollLeft > $(".scrollable-row")[0].scrollWidth - $(".scrollable-row").width()) {
        newScrollLeft = 0;
      }

      // Faça a rotação suavemente usando animate
      $(".scrollable-row").animate({
        scrollLeft: newScrollLeft
      }, 1000); // Ajuste o tempo de animação conforme necessário
    }, 2000); // Intervalo de 2 segundos
  });


