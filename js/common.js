// initialize
$(document).ready(function() {
    $('.page').hide();
    
    $('#btn_start').bind('click', function() {
        generate($('#num_join').val());
        $('#pg_result').show();
    });
    
    $('#btn_next').bind('click', function() {
        showNext();
    });
    
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