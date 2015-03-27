// initialize
$(document).ready(function() {
//    $('#btn_start').click(generate($('#num_join').val()));
    $('#btn_start').bind('click', function() {
        generate($('#num_join').val());
    });
});

function getRandom(number) {
    return Math.floor(Math.random() * number);
}

// Generator
function generate(numbers) {
    var result = new Array();
    
    for(var i = 0; i < numbers; i++)
        result[i] = 0;
    
    for(var i = 0; i < 9; i++) {
        var j = getRandom(numbers);
        
        while(result[j] != 0) {
            j = getRandom(numbers);
        }
        
        switch(i) {
            case 0:
            case 1:
            case 2:
                result[j] = 1;
                break;
            case 3:
            case 4:
            case 5:
                result[j] = 2;
                break;
            case 6:
            case 7:
            case 8:
                result[j] = 3;
                break;
        }
    }
    
    $('#result').html('');
    
    for(var i = 0; i < numbers; i++) {
        $('#result').append(i + ': ' + result[i] + '<br />');
    }
}