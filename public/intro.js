
$('video').hide();
$('h1').hide();
$('h2').hide();
$("img").hide();




setTimeout(function(){
  $('body').css('background-image', 'none');
  $('body').css('background','black')},1500);


setTimeout(function(){
  $('video').fadeIn("slowest");
  $('h1').show()},3800);



setTimeout(function(){
  $('video').fadeOut("slow");},9500);

setTimeout(function(){
  $("h1 span").addClass("letter_erase");
  $("h1 span:nth-child(1)").css("animation-delay", "3s");
  $("h1 span:nth-child(2)").css("animation-delay", "2.75s");
  $("h1 span:nth-child(3)").css("animation-delay", "2.5s");
  $("h1 span:nth-child(4)").css("animation-delay", "2.25s");
  $("h1 span:nth-child(5)").css("animation-delay", "2s");
  $("h1 span:nth-child(6)").css("animation-delay", "1.75s");
  $("h1 span:nth-child(7)").css("animation-delay", "1.5s");
  $("h1 span:nth-child(8)").css("animation-delay", "1.25s");
  $("h1 span:nth-child(9)").css("animation-delay", "1s");
  $("h1 span:nth-child(10)").css("animation-delay", ".5s");},10500);

setTimeout(function(){
  $('h2').show();},13000);

setTimeout(function(){
  $("h2 span").addClass("letter_erase");
  $("h2 span:nth-child(1)").css("animation-delay", "3s");
  $("h2 span:nth-child(2)").css("animation-delay", "2.5s");
  $("h2 span:nth-child(3)").css("animation-delay", "2s");
  $("h2 span:nth-child(4)").css("animation-delay", "1.5s");
  $("h2 span:nth-child(5)").css("animation-delay", "1s");
  $("h2 span:nth-child(6)").css("animation-delay", ".75s");
  $("h2 span:nth-child(7)").css("animation-delay", ".25s");},17300);


// setTimeout(function(){
//   $('body').css('background-image', 'none');
//   $('body').css('background','#696969')},25900);
setTimeout(function(){
  // $("img").fadeIn("slowest");},29000);
  // $('body').css('background-image', 'none');
  $('body').css('background-image', "url('images/gif.gif')");},25000);

// setTimeout(function(){
//   $('body').css('background', 'black');
//   $('body').css('background-size', 'cover');
//   $('body').css('background-position', 'center');
//   $('body').css('background-image',"url('https://media.giphy.com/media/cdfGmASgHKCMQuxisS/giphy.gif')")},29200);

setTimeout(function(){
  $("img").fadeOut();
  $('body').css('background-image', 'none');
  $('body').css('background','black')},32200);


  window.setTimeout('window.location="/indexs";',35400);
