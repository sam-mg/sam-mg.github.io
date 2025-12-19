// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
    
    // Handle navigation links - allow normal navigation for non-hash links
    $(".custom-navbar .nav .link").on('click', function(event) {
        var href = $(this).attr('href');
        
        // If it's a hash link on the current page, smooth scroll
        if (href.indexOf('#') !== -1 && (href.startsWith('/') || href.startsWith('#'))) {
            var hash = href.substring(href.indexOf('#'));
            if (hash !== "#" && $(hash).length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 700, function(){
                    window.location.hash = hash;
                });
            }
        }
        // Otherwise allow normal navigation (like to blog.html)
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});