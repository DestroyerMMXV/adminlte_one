$(function(){
    $(".dynamicLink").click(function(e){
      e.preventDefault();
      $("li").removeClass("active");
      $(this).parent().addClass("active");
      loadView($(this).attr("href"));
    });

    //Load default page
    loadView("pages/pageOne.html");
});


function loadView(view){
  $.get(view, function(data){
    $('.content-wrapper').html(data);
  })
}
