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


})