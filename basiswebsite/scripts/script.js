// JavaScript Document
var hamburgerB = document.getElementById('hamburgerbutton');
var filterB = document.getElementById('filterknop');
//var uitklapC = document.getElementById('uitklapcontainer');
var articles = document.getElementsByClassName('articlecontainer');
var toggled = false;

function toggleuitklap() {
  document.querySelector('#uitklapcontainer').classList.toggle('uitklapaan');

}

function toggleuitklap2() {
  document.querySelector('#uitklapcontainer2').classList.toggle('uitklapaan2');

}


hamburgerB.addEventListener('click', toggleuitklap);

filterB.addEventListener('click', toggleuitklap2);






//DEZE CODE HEB IK NIET ZELF GEMAAKT credits to Sander

for (var i = 0; i < articles.length; i++) {
  var article = articles[i];
  var button = article.querySelector(".meerlezenknop");
  var tekst = article.querySelector(".bijtekst");

  button.addEventListener('click', function() {
    tekst.classList.toggle("visible");

  });
}



// Oude code voor uitklap menu niet zelf geschreven credits to Sander

/*
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
*/
