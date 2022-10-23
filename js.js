$(document).ready(function () {
    $('input:checkbox').click(function(){
        if ($(this).is(':checked')) {
            $('input:checkbox').not(this).prop('checked', false);
        }
    });
    $("input:checkbox").on("change", function(){
        if ($(this).is(':checked')){
            $('button').css("opacity", "0.5" );
        } else {
            $('button').css("opacity", "1" );
        }
    });
});