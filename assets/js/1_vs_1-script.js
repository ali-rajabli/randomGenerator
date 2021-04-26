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
    $('.teams').remove();
    $('#vs_list h4').remove();
    console.log(nameList);
})
$("#btn_shuffle").on('click', function() {
    if (nameList.length % 2 == 0) {
        $('.teams').remove();
        for (let i = 0; i < nameList.length / 2; i++) {
            var index1 = Math.floor(Math.random() * nameList.length)
            var index2 = Math.floor(Math.random() * nameList.length)
            $('#random_vs').append(`<div class="teams"><h1>Team  ${i+1}</h1>
        <h2>${nameList[index1]} vs ${nameList[index2]}</h2></div>`)
        }
    } else {
        $('#random_vs').html(`<div class="teams"><h1>The names' amount must be even!</h1></div>`)
    }

})