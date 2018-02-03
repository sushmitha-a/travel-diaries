//$(".show-more a").on('click', function() {
$( "body" ).delegate( ".show-more a", "click", function() {
   var $this = $(this);
   var $content = $this.parent().prev("div.content");
   var $current = $content.find('div').attr('id');
   var linkText = $this.text().toUpperCase();

   if(linkText === "SHOW MORE"){
       linkText = "Show less";
       $content.switchClass("hideContent", "showContent", 400);
   } else {
       linkText = "Show more";
       $content.switchClass("showContent", "hideContent", 400);
   };

    $this.text(linkText);

  var divId = $("#"+$current).offset().top;
   $('html, body').animate({
             scrollTop: divId-300
         }, 1000);



});
