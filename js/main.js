$(document).ready(function(){

var $select = $("<select></select>");
$("#menu").append($select);

$("#menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");

  if($anchor.parent().hasClass("selected")){
    $option.prop("selected",true);

  }

  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);


});



$select.change(function(){
window.location = $select.val();
});

$(".main p").hide();
$(".homer").click(function(){
       $(this).nextAll().slice(0, 2).slideToggle();
	});


   $("#trig").click(function(){
   $(this).fadeOut();
   $("#p1").fadeIn();
   $("#p2").fadeIn("slow");
   $("#p3").fadeIn(2000);
   $("#p4").fadeIn(3000);

   $(".featuring").click(function(){
       $("input").change();
 	  });



   });


   $("h2").click(function(){
      $(this).next().toggle();
 });

 var acc = document.getElementsByClassName("accordion");
 var i;

 for (i = 0; i < acc.length; i++) {
     acc[i].onclick = function(){
         this.classList.toggle("active");
         this.nextElementSibling.classList.toggle("show");
   }
 }

$("#compony").fadeIn();

$("#compony").hover(
 function() {
   $(this).css({height: "+=15%", width: "+=15%"})
 },	function() {
   $(this).css({height: "150", width: "250"})}
);

$('.features_info').slice(1).hide();
$("#features").change(function(){
        $(".features_info").hide();
        $("#" + $(this).val()).show();
    });

new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()})
    ],
    view: new ol.View({
      center: [-8902457, 4473312],
      zoom: 18
    }),
    target: 'map'
  });
});
