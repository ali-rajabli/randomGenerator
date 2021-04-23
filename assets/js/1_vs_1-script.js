$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 1000)
})

var nameList = [];
var inp;
$('#vs_adder').on('click', function() {

    inp = $('#vs_input').val();
    nameList.push(inp);
    $('#vs_list').append(`<h4>${inp}</h4>`);
    console.log(nameList)
    $('#vs_input').val("");

});




$('#vs_clear').on('click', function() {
    $('#vs_input').val("");
    nameList = [];
    $('h4').remove();
    console.log('nameList');
})