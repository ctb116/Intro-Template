//back-end logic

function isLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    return false
}






















//front-end logic
$(document).ready(function() {

    $("#icecream").submit(function(event) {
        event.preventDefault();

        const flavor = $("input:radio[name=flavor]:checked").val();

        let result = parseInt(flavor);

        const beverage = $("#beverage").val();


        
    });

});