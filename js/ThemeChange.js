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
   document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, rgba(255,255,255,1), rgba("+xx+","+yy+","+zz+",.7))";
}
function defaultTheme() {
  document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, rgba(255,255,255,1), rgba(0,188,212,.7))";
  document.getElementById("navbar").style.color = "black";
  document.body.style.backgroundColor = "white";
  console.log("Theme reset");
}
