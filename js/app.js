$(document).ready(function() {
    $("#icon-menu-responsive").click(function() {
        //click xong => hiển thị menu-responsive bằng việc xổ từ trên xuống dưới
        $(".navbar-responsive").slideToggle(); //slideDown + slideUp = slideToggle      
        return false;
    });
    $(window).resize(function() {
        //Nếu màn hình có độ rộng lớn hơn 768px thì responsive-menu nó phải ẩn đi
        if ($(document).width() >= 768) {
            $(".navbar-responsive").css('display', 'none');
        }
    });
    $(window).scroll(function() {
        $(".navbar-responsive").css('display', 'none').fadeOut(1000);
    });
});