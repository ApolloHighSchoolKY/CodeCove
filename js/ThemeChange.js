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
  var rgb = textToRgb(getComputedStyle(document.body).getPropertyValue("--main-accent-color")).replace(/[^\d,]/g, '').split(',');
  var rgbStr = rgb[0] + ","+rgb[1] + "," + rgb[2];
  document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, "+ textToRgb(getComputedStyle(document.body).getPropertyValue("--main-bg-color")) +", "+ "rgba("+rgbStr+","+getComputedStyle(document.body).getPropertyValue("--nav-opacity")+")";
  document.getElementById("navbar").style.color = "var(--main-text-color)";
  document.getElementById("navHome").style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--main-accent-color");
  document.getElementById("navHome").style.color = getComputedStyle(document.body).getPropertyValue("--main-text-color");
  document.body.style.backgroundColor = "var(--main-bg-color)";
  
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function textToRgb(englishColor) {
    // Create a temporary div.
    var div = $('<div></div>').appendTo("body").css('background-color', englishColor);
    var computedStyle = window.getComputedStyle(div[0]);

    // Get computed color.
    var computedColor = computedStyle.backgroundColor;

    // Cleanup temporary div.
    div.remove();

    // Done.
    return computedColor;
};
