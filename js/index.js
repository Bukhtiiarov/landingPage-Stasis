$(document).ready(function() {
    $('#sidenav-toggle, #sidenav-close').click(function() {
        if ($('body').hasClass('sidenav-active')) {
            $('body').removeClass('sidenav-active')
        } else {
            $('body').addClass('sidenav-active')
        }
    })

    $('a[href^="#_"]').on('click', function() {
        var target = $($(this).attr("href"));
        if (target.length > 0) {
            var scroll = target.offset().top;
            $('html,body').animate({ scrollTop: scroll }, 2000);
            return false;
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollbtn__back-to-top').fadeIn('slow');
        } else {
            $('.scrollbtn__back-to-top').fadeOut('slow');
        }
    });
    $('.scrollbtn__back-to-top').click(function() {
        $('html, body').animate({ scrollTop: scroll }, 2000);
        return false;
    });

})