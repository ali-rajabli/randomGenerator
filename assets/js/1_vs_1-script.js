$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 800)
})

var nameList = [];
var inp;
$('#vs_adder').on('click', function() {
    inp = $('#vs_input').val().trim();
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
        [array[i], array[j]] = [array[j], array[i]]
    }
}
$("#btn_shuffle").on('click', function() {
    // var teams = $("#group").val().trim();
    var group = nameList.length / 2;
    if (nameList.length % 2 == 0) {
        $('.teams').remove();
        shuffleArray(nameList);
        for (let i = 0; i < group; i++) {
            console.log($("#group").val())
            $('#random_vs').append(`<div class="teams" id="team-${i+1}"><h1>Team  ${i+1}</h1>`)
            $(`#team-${i+1}`).append(`<h2>${nameList[i]} vs ${nameList[i+parseInt(group)]}</h2></div>`)
        }
    } else {
        $('#random_vs').html(`<div class="teams"><h1>The Names' amount Must be Even!</h1></div>`)
    }
})