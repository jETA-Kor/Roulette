// initialize
$(document).ready(function() {
    $('.page').hide(); // 모든 페이지 숨기기
    
    $('#btn_start').click(function() {
        generate($('#num_join').val());
        $('#pg_initializer').hide();
        $('#pg_shuffle').show();
    }); // 시작 버튼 이벤트 바인딩
    
    $('#pg_shuffle input').click(function() {
        $('#pg_shuffle').fadeOut(500);
        $('#pg_cardSelector').fadeIn(500);
    }); // 카드 선택 화면으로 이동 이벤트 바인딩
    
    $('#pg_cardSelector input').click(function() {
        $('#pg_cardSelector').fadeOut(500, function() {
            $('#pg_result').fadeIn(500);
        });
        
        showNext();
    }); // 결과 출력 이벤트 바인딩
    
    $('#btn_next').click(function() {
        $('#pg_result').fadeOut(500, function() {
            $('#pg_cardSelector').fadeIn(500);
        });
    }); // 다음 결과 보기 이벤트 바인딩
    
    currentIndex = 0;
    result = null;
    
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
    $('#pg_result').append(
        currentIndex + ': ' + result[currentIndex] + '<br />'
    );
    
    currentIndex++;
    
    if(currentIndex == result.length)
        $('#btn_next').hide();
}