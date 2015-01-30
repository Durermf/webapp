/**
 * Created by Guanglu on 2015/1/23.
 */
jQuery("#evening").on("submit", function(event_details){
    //var greeting = "Hello ";

    //var name = jQuery("#fullName").val();
    //var email = jQuery("#fullemail").val();
    //var greeting_message= greeting+ name+" "+email;
    //alert(confirm);
    //jQuery("#greeting-form").hide();
    //jQuery("#greeting").append("<p>"+greeting_message+"</p>");
    //alert("Welcome to student account!");
    $("#wholepage").css("background-color", "gray");

    event_details.preventDefault();
});

jQuery("#morning").on("submit", function(event_details){

    $("#wholepage").css("background-color", "#bce8f1");

    event_details.preventDefault();

});

jQuery("#studentdiscount").on("submit", function(event_details){

    $("#wholepage").css("background-color", "#bce8f1");

    event_details.preventDefault();

});