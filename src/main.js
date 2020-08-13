$(document).ready(function(){
    $('.header').height($(window).height()/5);

    if ($(window).width() <= "755"){
        $('.author-follow').before('<br><div class="follow">+ Follow</div>');
        $('.author-follow').css('margin-left', '30px');
        $('.author-follow').hide();
        $('.vl').hide();
        $('span').html('<hr>')
    }
    $('.follow').bind('click', function(){
        $('.author-follow').slideToggle();
    })
});
