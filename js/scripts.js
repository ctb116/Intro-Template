//back-end logic

function isLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    return false
}


function checkFlavor() {

}

//front-end logic
//Don't test this (not expected to write tests for front-end)
$(document).ready(function() {

    $("#icecream").submit(function(event) {
        event.preventDefault();

        const flavor = $("input:radio[name=flavor]:checked").val();

        let result = parseInt(flavor);

        const beverage = $("#beverage").val();


        
    });

});