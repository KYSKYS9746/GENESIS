$(function(){
    $('.VisualSlide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        
    });

    $('.Main_Product_Slide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true
    });

    $('.MainProduct .arrows .left').on('click', function(){
        $('.Main_Product_Slide').slick('slickPrev');
    });

    $('.MainProduct .arrows .right').on('click', function(){
        $('.Main_Product_Slide').slick('slickNext');
    });

    $('.totop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 800)
    });

    $(window).on('scroll', function(){
        const sct = $(window).scrollTop();
        if(sct > 300) {
            $('.totop').addClass('on');
            $('.Header').addClass('on');
        
        } else {
            $('.totop').removeClass('on');
            $('.Header').removeClass('on');
        }
    });


})