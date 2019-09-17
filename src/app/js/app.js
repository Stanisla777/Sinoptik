

$(document).ready(function ($) {

 /*Главная страница*/

    //формирую меню

    $('.header__menu-item').each(function () {
        let str = $(this).find('p').text();
        let arr = str.split('');
        let that = this;

        arr.forEach(function(item, i, arr) {
            $(that).find("p").append('<span>'+item+'</span>')
        });

    });

    /*Страница модели*/

    //        слайдер карусель


    let count_sliders = $("#model-slider li").length;
    if (count_sliders > 1) {

        animatedSlider();
    }
    else {
        $('.choose_slider_items li').css('display', 'block');
        $('#model-slider li:not(.current_item) .model-slider__list').css('opacity', 1);
        $('#btn_next1,#btn_prev1').hide();
    }


    function animatedSlider (){
        let count = $('.model-slider > li').length;
        $("#model-slider").AnimatedSlider( {

            prevButton: "#btn_prev1",
            nextButton: "#btn_next1",
            visibleItems: 1,
            infiniteScroll: true,
            willChangeCallback: function(obj, item) {//выполнение чего-либо при загрузке слайда и перед ыполнением

            },
            changedCallback: function(obj, item) {//выполнение чего-либо при отработке слайда

            },


        });
    }
    // animatedSlider();



//        Чтобы слайд можно былолистать мышкой, а не только нажатием на кнопки

    $(".wrapper-model-slider").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('#btn_next1').click();
        }
    });
    $(".wrapper-model-slider").swipe({
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            $('#btn_prev1').click();
        }
    });


//        Так как все li у нас имеют position:absolute, задаем высоту общего контейнера

    var current_item = $('.choose_slider_items li.current_item');
    var height_current_item;

    function height_slider() {
        height_current_item = $(current_item).outerHeight();

        $('#model-slider').css({
            'height':height_current_item +20+'px'
        });
    }

    height_slider();

    /*Все слайды делаю одинаковой высотой*/

    // function slider_model() {
    //     var maxheight=0;
    //     $('#model-slider li').each(function(){
    //         height = $(this).height();
    //         if(height>maxheight){
    //             maxheight = height
    //         }
    //     });
    //
    //     $('#model-slider li').height(height);
    // }


    // setTimeout(slider_model,500)

    /*Высота блока для backgroud*/

    let height_block = $(document).outerHeight(true);
    $('.model-page').css('height',height_block);

    /*Слайдер для моделей с подстановкой каринки*/

    let attr_item="";
    $('.model-slider__list_item').hover(

        function(){
            attr_item = $(this).attr('data-model');
            $('.wrapper-slider-man').find('.model-slider-man[data-model="'+attr_item+'"]').fadeIn(300);
        },
        function(){
            $('.wrapper-slider-man').find('.model-slider-man[data-model="'+attr_item+'"]').fadeOut(300);
            attr_item="";
        });




});


