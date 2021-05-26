var loggedIn;
var pname = document.getElementById('pName');
var user;
var fullName;
var admin;

checkCookie();

//So this happened again.
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie() {
  loggedIn = getCookie("right");
  if (loggedIn == "1") {
    user = getCookie('user');
    fullName = getCookie('fullName');
    admin = getCookie('admin');
    document.getElementById('pName').innerText = fullName;
  } else {
    window.location.assign("../");
  }
}
