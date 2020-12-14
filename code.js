$('#B-hide').on('click', function(){
    $('#P-hide').hide();
});

$('#P-show').hide();

$('#B-show').on('click', function(){
  $('#P-show').show();
});

$('#B-toggle').on('click', function(){
  $('#P-toggle').toggle();
});

$("#P-SDn").slideUp();

$("#B-SDn").on('click',function(){
  $("#P-SDn").slideDown();
});

$("#B-SUp").on('click',function(){
  $("#P-SUp").slideUp();
});

$("#B-ST").on('click',function(){
  $("#P-ST").slideToggle();
});

$('#P-FI').hide();

$("#B-FI").on('click',function(){
  $("#P-FI").fadeIn();
});

$("#B-FO").on('click',function(){
  $("#P-FO").fadeOut();
});

$("#B-aC").on('click',function(){
  $("#P-aC").addClass("textoRojo");
});

$("#B-af").on("click",function(){
  $("#P-af").after("<p>F por el eclipse</p>");
});

$("#B-be").on("click",function(){
  $("#P-be").before("<p>F por el eclipse x2</p>");
});

$("#B-app").on("click",function(){
  $("#P-app").append("<b> F por el eclipse x3</b>");
});

$("#B-html").on("click",function(){
  $("#P-html").html("<p>fui cambiado por .html</p>");
});

$("#B-attr").on("click",function(){
  $("#P-attr").attr("class", "textoRojo");
});

$("#B-tx").on("click",function(){
  $("#P-tx").text("fui cambiado por .text");
});

