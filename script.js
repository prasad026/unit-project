window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("nav-list").style.color = "black";
} 
else {
    document.getElementById("header").style.backgroundColor = "#00421a";
    document.getElementById("nav-list").style.color = "white";

  }
}

