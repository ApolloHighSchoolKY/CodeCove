function random_bg_color() {
   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
   var xx = 255-x;
   var yy = 255-y;
   var zz = 255-z;
   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   document.body.style.backgroundColor = bgColor;
var navBarColor = "rgb(" + xx + "," + yy + "," + zz + ")";
  document.getElementById("navbar").style.backgroundColor = navBarColor;
};
function defaultTheme() {
  document.getElementById("navbar").style.backgroundColor = "transparent";
  document.getElementById("navbar").style.color = "black";
  document.body.style.backgroundColor = "white";
};
