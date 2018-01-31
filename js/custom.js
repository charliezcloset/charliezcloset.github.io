
$("select").change(function(){
    var selectedOption = $("select").val();
    console.log(selectedOption);

    if (selectedOption == "General Care"){
      $(".Right").css("top", "-870px");
    } else if (selectedOption == "Leather Care"){
      $(".Right").css("top", "-470px");
    } else { 
      $(".Right").css("top", "0px");
    }
});


$(".product1photo img").hover(
  function () {
    $(this).addClass('rotate');
  }, 
  function () {
    $(this).removeClass('rotate');
  });


$(".product2photo img").hover(
  function () {
    $(this).addClass('rotate');
  }, 
  function () {
    $(this).removeClass('rotate');
  });


$(".product3photo img").hover(
  function () {
    $(this).addClass('rotate');
  }, 
  function () {
    $(this).removeClass('rotate');
  });