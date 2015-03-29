function ani_shuffle() {
    $('.card_backside').hide();
    $('.card_backside').css('left', ($(window).width() - $('.card_backside').width()) / 2);
    $('.card_backside').css('top', ($(window).height() - $('.card_backside').height()) / 2);
    $('.card_backside').show();
    
    var cnt = 0;
    
    var switcher = setInterval(function() {
        var direction = Math.floor(Math.random() * 2);
        $('#backside1').css('z-index', '101');
        
        switch(direction) {
            case 0:
                    $('#backside1').animate(
                        {'left': '+=400'},
                        200,
                        'swing',
                        function() {
                            $('#backside1').css('z-index', '99');
                            $('#backside1').animate({'left': '-=400'}, 200);
                        }
                    );
                    break;
            case 1:
                    $('#backside1').animate(
                        {'left': '-=400'},
                        200,
                        'swing',
                        function() {
                            $('#backside1').css('z-index', '99');
                            $('#backside1').animate({'left': '+=400'}, 200);
                        }
                    );
                    break;
        }
        
        cnt++;
        
        if(cnt == 10) {
            setTimeout(function() {
                $('#pg_shuffle').fadeOut(500);
                $('#pg_cardSelector').fadeIn(500);
            }, 500);
            clearInterval(switcher);
        }
    }, 500);
}