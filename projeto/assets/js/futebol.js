window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#navbar');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY < 677) {
            navbarCollapsible.classList.remove('navbar-colored')
        } else {
            navbarCollapsible.classList.add('navbar-colored')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#navbar');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });






   //funcao para confirmar reserva
   const celulas = document.querySelectorAll('td, th');

   for (let i = 0; i < celulas.length; i++) {
   celulas[i].addEventListener('click', function(event) {
       if (event.target.nodeName === 'TD' || event.target.nodeName === 'TH') {
       const celulaClicada = event.target;
       const indiceCelula = [...celulaClicada.parentNode.children].indexOf(celulaClicada);
       const cabecalhoCorrespondente = document.querySelector(`th:nth-child(${indiceCelula + 1})`);
       console.log(`Clicou em ${celulaClicada.textContent} na coluna "${cabecalhoCorrespondente.textContent}"`);

       // Exibe um popup de confirmação
       const confirmarReserva = window.confirm(`Você deseja reservar o campo para ${celulaClicada.textContent} às ${cabecalhoCorrespondente.textContent}?`);

       if (confirmarReserva) {
           // Código para reservar a hora selecionada
           celulaClicada.style.visibility = 'hidden';
           celulaClicada.style.position = 'absolute';
           celulaClicada.style.width = `${celulaClicada.offsetWidth}px`;
           console.log(`Hora ${cabecalhoCorrespondente.textContent} reservada com sucesso!`);
       } else {
           // Código para cancelar a reserva
           console.log(`Reserva cancelada.`);
       }
       }
   });
   }




    
    


});
