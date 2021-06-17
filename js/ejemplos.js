$("#btn1").click(function() {
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function() {
    alert("HTML: " + $("#test").html());
});

$("#btn3").click(function() {
    $("#p1").addClass("blue");
    $("#textoimportante").addClass("important");
});
$("#btn4").click(function() {
    $("#p1").removeClass("blue");
    $("#textoimportante").removeClass("important");
});


$("#hide").click(function() {
    $("h5").hide();
});

$("#show").click(function() {
    $("h5").show();
});

$("#btn5").click(function() {
    var div = $("#cuadrito");
    div.animate({ height: '300px', opacity: '0.4' }, "slow");
    div.animate({ width: '300px', opacity: '0.8' }, "slow");
    div.animate({ height: '100px', opacity: '0.4' }, "slow");
    div.animate({ width: '100px', opacity: '0.8' }, "slow");
});
$("#btn6").click(function() {
    $("#div1").fadeIn("slow");
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn("slow");
});
$("#btn7").click(function() {
    $("#div1").fadeOut("slow");
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut("slow");
});

$("#flip").click(function() {
    $("#panel").slideToggle();
});