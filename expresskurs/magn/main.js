jQuery(document).ready(function($) {
    $('.popup-hi').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        fixedContentPos: true,
        
    callbacks: {
        open: function() {
            document.body.style.overflow='hidden';
        },
        close: function() {
            document.body.style.overflow='auto';
        },
         lazyLoad: function(item) {
            console.log(item); // Magnific Popup data object that should be loaded
        }
    }
    });
});

jQuery(document).ready(function($) {
    $('.popup-art').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        fixedContentPos: true,
        
    callbacks: {
        open: function() {
            document.body.style.overflow='hidden';
        },
        close: function() {
            document.body.style.overflow='auto';
        },
         lazyLoad: function(item) {
            console.log(item); // Magnific Popup data object that should be loaded
        }
    }
    });
});