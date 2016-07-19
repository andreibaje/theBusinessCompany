$(document).ready(function(){
    $("#more").click(function(){
        $("#small-buttons").clone().appendTo("#content");
    });
});