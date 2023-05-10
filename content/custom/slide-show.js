jQuery(document).ready(function($) {
    var owl = $('.latest');
    owl.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function(e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function() {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        margin: 10,
        video: true,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:2
            },
            640:{
                items:3
            },
            800:{
                items:4
            },
            1025:{
                items:5
            }
        }
    });
});