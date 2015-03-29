function ani_shuffle() {
    $('.card_backside').hide();
    $('.card_backside').css('left', $_pos_card_big_left);
    $('.card_backside').css('top', $_pos_card_big_top);
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

function showResult(target) {
    $('#tmp_card').show();
    
    $('#tmp_card').css('left', target.position().left);
    $('#tmp_card').css('top', target.position().top);
    $('#tmp_card').css('width', target.width());
    $('#tmp_card').css('height', target.height());
    
    $('#tmp_card').animate({
        'width': '255',
        'height': '400',
        'left': $_pos_card_big_left,
        'top': $_pos_card_big_top
    }, 500, 'swing');
    
    $('#pg_cardSelector').fadeOut(500, function() {
        $('#pg_result').show();
        $('#pg_result img').css('left', $_pos_card_big_left);
        $('#pg_result img').css('top', $_pos_card_big_top);
        $('#tmp_card').hide();
    });
}