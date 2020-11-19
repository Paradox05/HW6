//This function is for some tests i run
var debugging = true;
$(document).ready(function() {

    var i = 0;
    var inputs = [5,1,4,2];
    $('input').each(function() {
        $(this).val(inputs[i]);
        i++;
    }) 

    $form = $('form');
    $form.validate({
        highlight: function(element) {
            $(element).removeClass('input-valid').addClass('input-error');
        },

        unhighlight: function(element) {
            $(element).removeClass('input-error').addClass('input-valid');
        }
    });


    $('input').each(function() {
        $(this).rules('add', {
            required: true,
            range: [-50, 50]
        });
    });

    $('button').on('click',function(e) {
        e.preventDefault();
        if ($form.valid())
            generate();
    })
});





// this is our generate function where we generate the table
function generate() {
    
    var array = [],i,j;

    $('input').each(function() {
        array.push(parseInt($(this).val(),10));
    });


    for(i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    //swap if needed
    for(var i =0; i < array.length;i++) {
        if(array[i] > array[i+1]) {
            [array[i+1], array[i]] = [array[i], array[i+1]];
        }
    }
    var $table = $('#tabler')
    var $col = $table.parent();
    $table.empty()
 
    var $row = $('<tr>');
    $row.append('<th>');

    $col.css({
        'opacity': '0.0',
        'padding-left': '500px'
    });

    for(var i = array[0]; i <= array[1]; i++) {
        $row.append('<th>' + i + '</th>');
    }
    $table.append($row);
    
    
    for(var i = array[2]; i <= array[3]; ++i) {
        $row = $('<tr>');

        $row.append('<th>' + i + '</th>')
        for(var j = array[0]; j <= array[1]; ++j) {
            $row.append('<td>' + (i * j) + '</td>');
        }
        $table.append($row);
    }
    $col.stop(true).animate({
        opacity: 1.0,       
    });

}
