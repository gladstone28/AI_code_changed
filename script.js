var image = document.getElementById("myImage");
var button = document.getElementById("imageButton");
var rotation = 0;

button.addEventListener("click", function() {
  image.style.border = "5px solid #EFBB24";
  image.style.boxShadow = "0px 0px 10px #EFBB24";
  rotation += 90;
  image.style.transform = "rotate(" + rotation + "deg)";
});
