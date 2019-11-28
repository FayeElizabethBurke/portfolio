$(document).ready(function(){

    $("#go").click(function(event){
        $(".containerOne").slideUp(200);
    });

    $('#idToHoverOne').mouseover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<iframe src="/videos/planB.mp4" width=690px height=350px; allow="autoplay"></iframe>') );
      })

      $('#idToHoverTwo').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<iframe src="/videos/codeSnip.mp4" width=750px height=350px; allow="autoplay"></iframe>') );
      })

      $('#idToHoverThree').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<iframe src="/videos/testcafe.mp4" width=750px height=350px; allow="autoplay"></iframe>') );
      })

      $('#idToHoverFour').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<h2>UNDER CONSTRUCTION</h2>') );
      })
      
      $('#idToHoverOne').mouseout(function(){
        $('iframe').hide();
      })

    $("#go").click(function(event){
        $(".partial").show(150);
        $(".bio").hide();
        $(".techSkills").hide();
        $(".bio").slideDown(500);
        $(".techSkills").slideDown(2000);
       
    });
});
