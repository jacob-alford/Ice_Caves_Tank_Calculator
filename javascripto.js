const calcVolume = (r,m,l) => {
  if(m<r) return (l/231)*(Math.pow(r,2)*Math.asin((r-m)/r) + (r-m) * Math.sqrt(Math.pow(r,2) - Math.pow(r-m,2)) + .5 * Math.PI * Math.pow(r,2));
  else if(m>r) return (l/231)*(.5*Math.PI*Math.pow(r,2) - Math.pow(r,2)*Math.asin((m-r)/r) - (m-r)*Math.sqrt(Math.pow(r,2)-Math.pow(m-r,2)));
  else if(m==r) return (l/231)*.5*Math.PI*Math.pow(r,2);
  else if(m==0) return (l/231)*Math.PI*Math.pow(r,2);
}

$(document).ready(function(){
  $(".linkFade").hover(
    function(){ $(this).stop().animate({opacity:.5},"fast") },
    function(){ $(this).stop().animate({opacity:1},"fast") }
  );
  $("#calcButton").click(function(e){
    e.preventDefault();
    let volume = calcVolume($("#radius").val(),$("#measure").val(),$("#length").val()).toFixed(2);
    let maxVolume = (Math.pow($("#radius").val(),2) * Math.PI * $("#length").val())/231;
    $("#display").html(`${volume} gallons`);
    $("#displayBlock").css("background",`linear-gradient(0deg, #79839B ${(volume/maxVolume)*100}%, #343a40 ${(volume/maxVolume)*100}%)`);
  });
  $("form").change(function(){
    let volume = calcVolume($("#radius").val(),$("#measure").val(),$("#length").val()).toFixed(2);
    let maxVolume = Math.pow($("#radius").val(),2) * Math.PI * $("#length").val()/231;
    $("#display").html(`${volume} gallons`);
    $("#displayBlock").css("background",`linear-gradient(0deg, #79839B ${(volume/maxVolume)*100}%, #343a40 ${(volume/maxVolume)*100}%)`);
  });
});
