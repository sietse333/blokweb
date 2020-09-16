// JavaScript Document
var hamburgerB = document.getElementById('hamburgerbutton');
var uitklapC = document.getElementById('uitklapcontainer');
var toggled = false;



function toggleuitklap() {

  if (toggled) {
    var height = uitklapC.scrollHeight;
    uitklapC.animate([{
      height: height + "px"

    }, {
      height: "0"
    }], {
      duration: 300,
      fill: "both",
      easing: "ease-in-out"
    })

  } else {
    uitklapC.style.display = "block";
    var height = uitklapC.scrollHeight;
    uitklapC.style.height = "0";
    uitklapC.animate([{
      height: "0"

    }, {
      height: height + "px"
    }], {
      duration: 300,
      fill: "both",
      easing: "ease-in-out"
    })
  }
  toggled = !toggled
}




hamburgerB.addEventListener('click', toggleuitklap);




//uitklapC.classList.toggle("visible");
