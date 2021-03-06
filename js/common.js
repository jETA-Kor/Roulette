// initialize
$(document).ready(function() {
    $('.page').hide(); // 모든 페이지 숨기기
    
    $('#btn_start').click(function() {
        generate($('#num_join').val());
        $('#pg_initializer').hide();
        $('#pg_shuffle').show();
        ani_shuffle();
    }); // 시작 버튼 이벤트 바인딩
    
    $('#pg_cardSelector img').click(function() {
        if(!isSelected) {
            isSelected = true;
            showResult($(this));

            showNext();
        }
    }); // 결과 출력 이벤트 바인딩
    
    $('#btn_next').click(function() {
        isSelected = false;
        
        $('#pg_result').fadeOut(500, function() {
            $('#pg_cardSelector').fadeIn(500);
        });
    }); // 다음 결과 보기 이벤트 바인딩
    
    currentIndex = 0;
    result = null;
    isSelected = false;
    
    $_pos_card_big_left = ($(window).width() - 255) / 2;
    $_pos_card_big_top = ($(window).height() - 400) / 2;
    
    $('#pg_initializer').show();
});

function getRandom(number) {
    return Math.floor(Math.random() * number);
}

// Generator
function generate(numbers) {
    result = new Array();
    
    for(var i = 0; i < numbers; i++)
        result[i] = 0;
    
    for(var i = 0; i < 3; i++) {
        var j = getRandom(numbers);
        
        while(result[j] != 0) {
            j = getRandom(numbers);
        }
        
        switch(i) {
            case 0:
                result[j] = 1;
                break;
            case 1:
                result[j] = 2;
                break;
            case 2:
                result[j] = 3;
                break;
        }
    }
}

// Shows next result
function showNext() {
    $('#result_front').prop('src', 'image/card_' + result[currentIndex] + '.png');
    currentIndex++;
}