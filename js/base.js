$(document).ready(function() {
    //làm ẩn-hiện nút ấn khi trượt lên đầu trang
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else { $('#backtop').fadeOut(); }
    });

    //Click trượt lên đầu trang
    $('#backtop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    // header_sticky khi scorll
    // $(window).scroll(function() {
    //     var sticky = $('.sticky'),
    //         scroll = $(window).scrollTop();

    //     if (scroll >= 100) sticky.addClass('fixed');
    //     else sticky.removeClass('fixed');
    // });


});