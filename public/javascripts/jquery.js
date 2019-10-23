$(document).ready(function(){

    $("#go").click(function(event){
        $(".containerOne").slideUp(300);
    });

    $("#go").click(function(event){
        $(".partial").show(200);
        $(".bio").hide();
        $(".techSkills").hide();
        $(".bio").slideDown(800);
        $(".techSkills").slideDown(2000);
       
    });
});
