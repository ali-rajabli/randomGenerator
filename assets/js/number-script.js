$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 800)
})

// $(window).on('load', function() {
//     $('.loader-wrapper').fadeOut(1000);
// })


$('#btn_random').on('click', function() {
    var num1 = $('#startNum').val();
    var num2 = $('#endNum').val();

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    numbers = [];

    for (let i = num1; i < num2; i++) {
        numbers.push(i);
    }
    console.log(numbers);
    var randNum = Math.floor(Math.random() * (num2 - num1)) + num1;
    $('#random_number').html(`${randNum}`)
});