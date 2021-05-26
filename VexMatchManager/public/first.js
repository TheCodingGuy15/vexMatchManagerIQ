var newTo = document.getElementById('newTo');
var changeable = document.getElementById('AcDeni');
var nameIn = document.getElementById('nameIn');
var uname;
var pswd;
var name;
var right = 0;
var fullName;
var admin;
var right;
var cUser;



var shivamS = {
  user: 'Shivam',
  fullName: 'Shivam Singh',
  pswd: 'gyrofusion21549f',
  admin: true
};
var varunS = {
  user: 'Varun',
  fullName: 'Varun',
  pswd: 'gyrofusion21549f',
  admin: false
};
var yashN = {
  user: 'Yash',
  fullName: 'Yash Narain',
  pswd: 'gyrofusion21549f',
  admin: true
};
var vigneshR = {
  user: 'Vignesh',
  fullName: 'Vignesh Rajeev',
  pswd: 'gyrofusion21549f',
  admin: false
};
var ashishY = {
  user: 'Ashish',
  fullName: 'Ashish Yevura',
  pswd: 'gyrofusion21549f',
  admin: false
};


function setCookie(cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function loginTrue(person1, person2, person3, person4, person5){
  var person = [person1, person2, person3, person4, person5];
  for (var i = 0; i < 5; i++) {
    if(uname == person[i].user && pswd == person[i].pswd){
      cUser = person[i];
      right = 1;
      setCookie("user", cUser.user, 1000);
      setCookie("right", right, 1000);
      setCookie("admin,", cUser.admin, 1000);
      setCookie("fullName", cUser.fullName, 1000);
      window.location.assign('../signedIn')

    } else {right = 0;}
}
}


function loginPage() {
  pswd = document.getElementById('pswd').value;
  uname = document.getElementById('uname').value;

  loginTrue(shivamS, varunS, yashN, vigneshR, ashishY);
}
