$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 800)
});

$('button').on('click', function(e) {
    e.preventDefault();
    var namespergroup = parseInt($('.pergroup').val());
    if (namespergroup > 0) {
        var allnames = $('textarea').val().split('\n');
        var allnameslen = allnames.length;
    } else {
        $('.groups').append('<div class="group" id="group"><h2>Please Input only Positive Numbers!</h2></div>');
    }
    var numgroups = Math.ceil(allnameslen / namespergroup);

    $('.groups').empty();

    for (i = 0; i < numgroups; i++) {
        $('.groups').append('<div class="group" id="group' + (i + 1) + '"><h2>Team ' + (i + 1) + '</h2></div>');
    }

    $('.group').each(function() {
        for (j = 0; j < namespergroup; j++) {
            var randname = Math.floor(Math.random() * allnames.length);
            if (allnames[randname]) {
                $(this).append('<p>' + allnames[randname] + '</p>');
            }
            allnames.splice(randname, 1);
            console.log(allnames);
        }
    });
});

$('.toggle-wrap a').on('click', function(e) {
    e.preventDefault();
    $('.wrap').toggleClass('alt');
    $('.pergroup-wrap').find('input').val('');
});