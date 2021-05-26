var ob1 = document.getElementById('pic1');
var ob2 = document.getElementById('pic2');
var ob3 = document.getElementById('pic3');
var ob4 = document.getElementById('pic4');
var ob5 = document.getElementById('pic5');
var ob6 = document.getElementById('pic6');
var ob7 = document.getElementById('pic7');

var topThing;
var leftThing;


function moveButton(object){
  topThing = parseInt(object.style.marginTop);
  leftThing = parseInt(object.style.marginLeft);

  if(ob1 == object){
    ob2.style.height = "inherit";
    ob2.style.width = "130px";

    ob3.style.height = "inherit";
    ob3.style.width = "130px";

    ob4.style.height = "inherit";
    ob4.style.width = "130px";

    ob5.style.height = "inherit";
    ob5.style.width = "130px";

    ob6.style.height = "inherit";
    ob6.style.width = "130px";

    ob7.style.height = "inherit";
    ob7.style.width = "130px";

  } else if (ob2 == object) {

    ob1.style.height = "inherit";
    ob1.style.width = "130px";

    ob3.style.height = "inherit";
    ob3.style.width = "130px";

    ob4.style.height = "inherit";
    ob4.style.width = "130px";

    ob5.style.height = "inherit";
    ob5.style.width = "130px";

    ob6.style.height = "inherit";
    ob6.style.width = "130px";

    ob7.style.height = "inherit";
    ob7.style.width = "130px";

  } else if (ob3 == object){
    ob1.style.height = "inherit";
    ob1.style.width = "130px";

    ob2.style.height = "inherit";
    ob2.style.width = "130px";

    ob4.style.height = "inherit";
    ob4.style.width = "130px";

    ob5.style.height = "inherit";
    ob5.style.width = "130px";

    ob6.style.height = "inherit";
    ob6.style.width = "130px";

    ob7.style.height = "inherit";
    ob7.style.width = "130px";


  } else if (ob4 == object) {
    ob1.style.height = "inherit";
    ob1.style.width = "130px";

    ob2.style.height = "inherit";
    ob2.style.width = "130px";

    ob3.style.height = "inherit";
    ob3.style.width = "130px";

    ob5.style.height = "inherit";
    ob5.style.width = "130px";

    ob6.style.height = "inherit";
    ob6.style.width = "130px";

    ob7.style.height = "inherit";
    ob7.style.width = "130px";
  } else if (ob5 == object) {
    ob1.style.height = "inherit";
    ob1.style.width = "130px";

    ob2.style.height = "inherit";
    ob2.style.width = "130px";

    ob3.style.height = "inherit";
    ob3.style.width = "130px";

    ob4.style.height = "inherit";
    ob4.style.width = "130px";

    ob6.style.height = "inherit";
    ob6.style.width = "130px";

    ob7.style.height = "inherit";
    ob7.style.width = "130px";
  } else if (ob6 == object) {
    ob1.style.height = "inherit";
    ob1.style.width = "130px";

    ob2.style.height = "inherit";
    ob2.style.width = "130px";

    ob3.style.height = "inherit";
    ob3.style.width = "130px";

    ob4.style.height = "inherit";
    ob4.style.width = "130px";

    ob5.style.height = "inherit";
    ob5.style.width = "130px";

    ob7.style.height = "inherit";
    ob7.style.width = "130px";
  } else if (ob7 == object) {
    ob1.style.height = "inherit";
    ob1.style.width = "130px";

    ob2.style.height = "inherit";
    ob2.style.width = "130px";

    ob3.style.height = "inherit";
    ob3.style.width = "130px";

    ob4.style.height = "inherit";
    ob4.style.width = "130px";

    ob5.style.height = "inherit";
    ob5.style.width = "130px";

    ob6.style.height = "inherit";
    ob6.style.width = "130px";
  }

	document.onkeydown = function(event) {
		if(event.keyCode == 37){
      object.style.marginLeft = leftThing - 25 + "px";
      leftThing = parseInt(object.style.marginLeft);
    } else if (event.keyCode == 38) {
      object.style.marginTop = topThing - 25 + "px";
      topThing = parseInt(object.style.marginTop);
    } else if (event.keyCode == 39) {
      object.style.marginLeft = leftThing + 25 + "px";
      leftThing = parseInt(object.style.marginLeft);
    } else if (event.keyCode == 40) {
      object.style.marginTop = topThing + 25 + "px";
      topThing = parseInt(object.style.marginTop);
    } else if (event.keyCode == 32) {
      ob1.style.height = "inherit";
      ob1.style.width = "130px";

      ob2.style.height = "inherit";
      ob2.style.width = "130px";

      ob3.style.height = "inherit";
      ob3.style.width = "130px";

      ob4.style.height = "inherit";
      ob4.style.width = "130px";

      ob5.style.height = "inherit";
      ob5.style.width = "130px";

      ob6.style.height = "inherit";
      ob6.style.width = "130px";

      ob7.style.height = "inherit";
      ob7.style.width = "130px";
    }
	}

}
