$(document).ready(function() {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 15,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,

            }
        }
    });
    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2,
                nav: true
            }
        }
    });
    $('.owl-three').owlCarousel({
        loop: true,
        margin: 10,

        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },
            600: {
                items: 1,
                nav: true,
                dots: false,

            },
            1000: {
                items: 1,
                nav: false,
                dots: true

            }
        }
    });

    $('.owl-four').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 6,

            }
        }
    });
    $('.owl-five').owlCarousel({
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 2,

            }
        }
    });

});