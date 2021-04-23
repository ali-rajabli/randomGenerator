$(window).on('load', function() {
    setTimeout(function() {
        $('.loader-wrapper').fadeOut(400);
    }, 1000)
})
var num1 = $('#startNum').val();
var num2 = $('#endNum').val();
numbers = [];

for (num1; num1 < num2; num1++) {
    $('#random_number').html(`${num1}`)
    numbers.push(num1);
}

$('#btn_random').on('click', function() {
    console.log(numbers)
})