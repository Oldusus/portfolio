$(document).ready(function() {
  //popup
    $('div').on('click','.u_popup', popup_op);
    $('div').on('click','.close', popup_cl);
    $('div').on('click','.shadow', popup_cl);
  //аккордион
	$('.accordeon .acc-head').on('click', f_acc);
  //карусель
	$('div').on('click','.u_otz', koru_op);
    $('div').on('click','.close_otz', koru_cl);
    $('div').on('click','.shadow_otz', koru_cl);
  //отправка заявок
    $('body').on('submit', '.normal', send_n);
    $('body').on('submit', '.premium', send_p);
  //скролл до блока
    //$("a").on('click','.go', scroll(this));
    $('.go').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#scroll_to').offset().top }, 1000);
        e.preventDefault();
    });

});



function popup_op(){
    var url = $(this).attr('href');
    $('.popup').append('<div class="in_popup"><div class="close"><div class="icon_close"></div></div><div class="con_popup"></div><div class="shadow"></div></div>');
    
    var content = $(url).html();
    $('.con_popup').append(content);
    
    $('body').css("overflow","hidden");
    $('.popup').fadeIn(300); 
    
    return false;
}
function popup_cl(){
    $('body').css("overflow","auto");
    $('.popup').fadeOut(300); 
    setTimeout(function(){
        $('.popup').html('');
    }, 300);
    
}
function f_acc(){
    //скрываем все кроме того, что должны открыть
    $('.accordeon .acc-body').not($(this).next()).slideUp(1000);
    // открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(1000);
}
function koru_op(){
    $('body').css("overflow","hidden");
    $('.popup_otz').fadeIn(300); 
    
    return false;
}
function koru_cl(){
    $('body').css("overflow","auto");
    $('.popup_otz').fadeOut(300);
}
function send_n(e){
    var check = 'secretcode';
    var name = $('#text_1').val();
    var email = $('#email_1').val();
    var tovar = "Стандарт";
        alert("Скрипт отключён");
    
    e.preventDefault();
}
function send_p(e){
    var check = 'secretcode';
    var name = $('#text_2').val();
    var email = $('#email_2').val();
    var tovar = "VIP";
        alert("Скрипт отключён");
    
    e.preventDefault();
}



(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

function scroll(e) {
    var elementClick = $(e).attr("href");
    var destination = $(elementClick).offset().top;
    if ($.browser.safari) {
        $('.back').animate({ scrollTop: destination }, 1100); //1100 - скорость
    } else {
        $('.back').animate({ scrollTop: destination }, 1100);
    }
    e.preventDefault();
}

