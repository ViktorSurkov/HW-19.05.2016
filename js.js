document.body.onload = addElement;

function addElement () {
var form = document.createElement('form');
form.action = 'google.com';
form.name = 'login';
form.setAttribute("onsubmit", "return validateForm()");

var name = document.createElement('input');
name.type = 'text';
name.name = 'username';
name.value = '';
name.placeholder = 'name';
form.appendChild(name);

var age = document.createElement('input');
age.type = 'text';
age.name = 'age';
age.placeholder = 'age';
form.appendChild(age);

var date = document.createElement('input');
date.type = 'text';
date.name = 'date';
date.placeholder = 'dd.mm.yyyy';
form.appendChild(date);

var val = document.createElement('input');
val.type = 'submit';
val.value = 'Validate me';
form.appendChild(val);


document.body.appendChild(form);

}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = dd + '.' + mm + '.' + yyyy;

function validateForm(){
  var name = document.getElementsByName('username')[0].value.slice(0, 5);
  var age = document.getElementsByName('age')[0].value;
  var date = document.getElementsByName('date')[0].value;
  var status;

  name === 'user_' && date === today && !isNaN(parseInt(age)) && isFinite(age) && +age >= 0 && +age != 10e5 && age.slice(0, 1) != ' '? status = true : status = false ;

  status != true ? alert('ваша дата інвалід') : alert('все окей');
}



document.getElementById('player').style.top = '300px';
document.getElementById('player').style.left = '300px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('player');

  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_SPACE = 32;
  var KEYCODE_ENTER = 13;

  if (e.keyCode == KEYCODE_LEFT) {
  	el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_UP){
  	el.style.top = (parseInt(el.style.top) - 10) + 'px';
  }
  else if(e.keyCode == KEYCODE_DOWN){
  	el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_SPACE || e.keyCode == KEYCODE_ENTER) {
    var fire = document.createElement('div');
    document.body.appendChild(fire);
    fire.id = 'fire';

    fire.style.top = el.style.top;
    fire.style.left = el.style.left;

      var i = 0;

      (function() {
          if (i < 10000) {
              fire.style.top = (parseInt(fire.style.top) + 8) + 'px';
              i++;
              setTimeout(arguments.callee, 30);
              var cur = parseInt(fire.style.top);
              if (cur > window.screen.height){
                fire.parentNode.removeChild(fire);
              }
          }
      })();

  }

}
