
$('#click-me').click(function(){

// Store your current age into a variable
var age = $('#age').val();
// Store a maximum age into a variable
var max_age = $('#max-age').val();
// Store a favorite drink (from a drop-down) into a variable
var drink = $('#item').val();
// Store an amount per day into a variable
var num_per_day = $('#num-per-day').val();
// Calculate how much you would drink for the rest of your life!
var solution = (max_age - age)* 365 * num_per_day;

//console.log(solution);
//console.log(drink);

// Output your results to the user

$('#solution').html(solution);
$('#drink').html(drink);




})