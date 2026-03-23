(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Chatbot button attempt
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.chat-bot').fadeIn('slow');
        } else {
            $('.chat-bot').fadeOut('slow');
        }
    });

    // Info panel
    const cards = document.querySelectorAll(".card-hover");
    const panel = document.getElementById("infoPanel");
    const title = document.getElementById("infoTitle");
    const text = document.getElementById("infoText");

    // Content map
    const content = {
    ingredientes: {
        title: "Seleccionados Cuidadosamente",
        text: `
        Usamos productos frescos y orgánicos. Nuestros ingredientes incluyen:
        <ul class="ingredient-list">
            <li> Tomate Verde</li>
            <li> Chiles Jalapeños</li>
            <li> Chile de Árbol</li>
            <li> Pimienta Negra</li>
            <li> Cebolla</li>
            <li> Cilantro</li>
            <li> Comino</li>
            <li> Orégano</li>
            <li> Ajo</li>
        </ul>
        `
    },
    calidad: {
        title: "Preparado con Calidad",
        text: "Nuestros procesos garantizan su seguridad y el sabor excepcional."
    },
    pedidos: {
        title: "Asistencia en Pedidos",
        text: `
        Conozca nuestra nueva línea de salsas artesanales.<br>
        <a href="special.html" class="btn btn-spec py-2 px-4 me-4">SalsArte</a>
        <a href="soon.html" class="btn btn-primary py-2 px-4">Pedir en Línea</a>
        `
    },
    soporte: {
        title: "Atención al Cliente 24/7",
        text: `
        Estamos disponibles en todo momento para ayudarle.
        <div class="row g-4">
            <div class="col-12">
                <div class="row gy-4">
                    <div class="col-md-4">
                        <h5 class="section-title ff-secondary fw-normal text-start">Whatsapp</h5><br>
                        <a href="https://wa.me/525634531270" target="_blank"><i class="fab fa-whatsapp text-primary me-2"></i>+52 56 3453 1270</a>
                    </div>
                    <div class="col-md-4">
                        <h5 class="section-title ff-secondary fw-normal text-start">Instagram</h5><br>
                        <a href="https://www.instagram.com/chilaguas/" target="_blank"><i class="fa fa-instagram text-primary me-2"></i>@chilaguas</a>
                    </div>
                    <div class="col-md-4">
                        <h5 class="section-title ff-secondary fw-normal text-start">Correo Electrónico</h5><br>
                        <a href="mailto:chilaguas@gmail.com""><i class="fa fa-envelope-open text-primary me-2"></i>chilaguas@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    };

    cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const key = card.dataset.info;

        title.textContent = content[key].title;
        text.innerHTML = content[key].text;

        panel.classList.add("show");
    }); 
    });

    const container = document.querySelector(".info-cards");
    container.addEventListener("mouseleave", () => {
    panel.classList.remove("show");
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

