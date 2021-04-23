$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 1000)
})

var nameList = [];
var inp;
$('#name_adder').on('click', function() {
    inp = $('#name_input').val();
    nameList.push(inp);
    $('#name_list').append(`<h4>${inp}</h4>`);
    console.log(nameList)
    $('#name_input').val("");

});




$('#name_clear').on('click', function() {
    $('#name_input').val("");
    nameList = [];
    $('h4').remove();
    console.log('nameList');
})

$('#btn_shuffle').on('click', function() {
    var indexList = Math.floor(Math.random() * nameList.length)
    $('#random-name').html(`${nameList[indexList]}`)
})