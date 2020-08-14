$(document).ready(function(){
    $('.header').height($(window).height()/8);
    
    if ($(window).width() <= "755"){
        $('.author-follow').before('<br><div class="follow">+ Follow</div>');
        $('.author-follow').css('margin-left', '30px');
        $('.author-follow').hide();
        $('.vl').hide();
        $('span').html('<hr>')
        flag = false;
    }
    
    if ($('.about').height() > "400"){
        $('.vl').height($('.about').height() + 150);
    }

    $('.follow').bind('click', function(){
        $('.author-follow').slideToggle();
    });
});
