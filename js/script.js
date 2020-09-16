$(function(){
    $('.btn-emergency-real').click(function(){
        $(this).fadeOut(1000);
        $('.fv-wrapper').addClass('fv-bg');
    });
});

$(function(){
    $('.btn--pink').click(function(){
        $(this).fadeOut(700);
        $('#mtx').fadeIn(1000);
        $('.message-ttl').addClass("selected");
        $('.message-ttl').addClass('mes-ttl-cha');
    });
});

$(function(){
    $('.continue-btn').click(function(){
        $(this).fadeOut(700);
        $('.continue').addClass('continue-bg');
    })
})