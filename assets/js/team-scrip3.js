$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 800)
})

var nameList = [];
var inp;
$('#team_adder').on('click', function() {
    inp = $('#team_input').val().trim();
    nameList.push(inp);
    $('#team_list').append(`<h4>${inp}</h4>`);
    console.log(nameList)
    $('#team_input').val("");

});

$('#team_clear').on('click', function() {
    $('#team_input').val("");
    nameList = [];
    $('.teams').remove();
    $('#team_list h4').remove();
    console.log(nameList);
})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

$("#btn_shuffle").on('click', function() {
    var teams = $("#group").val().trim();
    if (teams > 0) {
        $('.teams').remove();
        shuffleArray(nameList);
        for (let i = 0; i < teams; i++) {
            console.log($("#group").val())
            $('#random_team').append(`<div class="teams" id="team-${i+1}"><h1>Team  ${i+1}</h1>`)
            $(`#team-${i+1}`).append(`<h2>${nameList[i]} vs ${nameList[i+parseInt(teams)]}</h2></div>`)
        }
    } else {
        $('#random_team').html(`<div class="teams"><h1>The Group amount must be Positive Numbers! (Example:1,2,3,4,..)</h1></div>`)
    }
})