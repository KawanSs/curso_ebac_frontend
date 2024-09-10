$(document).ready(function(){
    $('#btnStart').click(function(){
        $('main').slideDown();
        $('#btnStart').fadeOut(1000);
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const Task = $('#inptTask').val();
        const newTask = $('<li> </li>');
        $(`<input type="checkbox" id='chckbx'>
                <label for="chckbx">${Task}</label> 
            </input>`
        ).appendTo(newTask);
        $(newTask).appendTo('ul');
        $('#inptTask').val('');
    })

    // $('#chckbx').change(function() {
    //     if ($(this).is(':checked')) {
    //       $('label[for="chckbx"]').css({
    //         'text-decoration': 'line-through'
    //       });
    //     } else {
    //       $('label[for="chckbx"]').css({
    //         'text-decoration': 'none'
    //       });
    //     }
    //   });

})