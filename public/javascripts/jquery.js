$(document).ready(function(){

    $("#go").click(function(event){
        $(".containerOne").slideUp(300);
    });

    $('#idToHoverOne').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<iframe src="/videos/planB.mp4" width=750px height=380px; allow="autoplay"></iframe>') );
      })

      $('#idToHoverTwo').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<iframe src="/videos/codeSnip.mp4" width=750px height=380px; allow="autoplay"></iframe>') );
      })

      $('#idToHoverTwo').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<iframe src="/videos/codeSnip.mp4" width=750px height=380px; allow="autoplay"></iframe>') );
      })

      $('#idToHoverTwo').hover(function(){
        // $('#idModal').css("display", "block");
        $(this).replaceWith( ('<h2>UNDER CONSTRUCTION</h2>') );
      })
      
      $('#idToHover').mouseout(function(){
        $('iframe').hide();
      })

    $("#go").click(function(event){
        $(".partial").show(200);
        $(".bio").hide();
        $(".techSkills").hide();
        $(".bio").slideDown(800);
        $(".techSkills").slideDown(2000);
       
    });
});
