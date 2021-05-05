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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
$("#btn_shuffle").on('click', function() {
    var teams = $("#group").val().trim();
    if (teams !== -1) {
        $('.teams').remove();
        shuffleArray(nameList);
        for (let i = 0; i < teams; i++) {
            console.log($("#group").val())
            $('#random_vs').append(`<div class="teams" id="team-${i+1}"><h1>Team  ${i+1}</h1>`)
            $(`#team-${i+1}`).append(`<h2>${nameList[i]} vs ${nameList[i+parseInt(teams)]}</h2></div>`)
        }
    } else {
        $('#random_vs').html(`<div class="teams"><h1>The group amount not be Empty!</h1></div>`)
    }
})