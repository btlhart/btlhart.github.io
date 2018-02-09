$(document).ready(function () {
    $('#myForm').submit(function (){
        event.preventDefault();

        console.log('test', $('#name-input').val);
        
    })

})
