/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
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



    // $("img.img-svg").each(function () {
    //     var $img = $(this);
    //     var imgClass = $img.attr("class");
    //     var imgURL = $img.attr("src");
    //     $.get(imgURL, function (data) {
    //         var $svg = $(data).find("svg");
    //         if (typeof imgClass !== "undefined") {
    //             $svg = $svg.attr("class", imgClass + " replaced-svg");
    //         }
    //         $svg = $svg.removeAttr("xmlns:a");
    //         if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
    //             $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
    //         }
    //         $img.replaceWith($svg);
    //     }, "xml");
    // });
    

});
