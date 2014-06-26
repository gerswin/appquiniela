$(document).ready(function() {

            $( ".resutados" ).mouseover(function() {

                 $( ".mas" ,this).show( );
                 $( ".menos" ,this).show( );
                 $( ".verpeque2" ,this).hide( );


            });

             $( ".resutados" ).mouseout(function() {

                 $( ".mas",this ).hide( );
                 $( ".menos",this ).hide( );
                 $( ".verpeque2" ,this).show( );
            });

});


    $(document).ready(function(){
      Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});
        var source = $("#resultados").html();
        var template = Handlebars.compile(source);
        $.getJSON("http://worldcup.sfg.io/matches/today", function(data) {
          $.each(data,function(index,element){
            // Generate the HTML for each post
            var html = template(element);
            // Render the posts into the page
              $("#partidos").append(html);
          });

        });
    });
