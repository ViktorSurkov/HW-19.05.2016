

//----------------1.1, 1.2 ----------------------

function refresh() {

    document.getElementById('list').innerHTML = '';

    var num = document.getElementById('in').value;

    for (var i = 0; i < +num; i++) {
        var checkB = document.createElement('input')
        checkB.setAttribute('type', 'checkbox');
        checkB.setAttribute('onclick', 'count()');
        checkB.setAttribute('class', 'item');
        checkB.setAttribute('value', '');
        document.getElementById('list').appendChild(checkB)
    }

    var check = document.getElementsByClassName('item').length;

    document.getElementById('total-sum').getElementsByClassName('value')[0].innerHTML=check;
    document.getElementById('sum').getElementsByClassName('value')[0].innerHTML = '0';

}

function count(){
  var boxes = document.getElementsByClassName('item');
  var cur = 0;
  for (var i = 0; i < boxes.length; i++){
    if (boxes[i].checked == true){
      cur += 1;
    }
  }
  document.getElementById('sum').getElementsByClassName('value')[0].innerHTML=cur;
}

//------------------------end 1----------------------


//---------------------------2-----------------------

var page = {
	'u': 'welcome',
  'b': 'bold',
  'h3': 'hello, this is a title'
};
var elem = document.getElementById('page');


function ref(){
  for(var key in page){
    var el = document.createElement([key]);
    el.innerHTML = page[key];
    elem.appendChild(el);
  }
}

//---------------------------end 2-------------------------
var page2 = {
	'div': {
  	'@class': 'red',
  	'h3': 'welcome',
    'b': 'bold text'
  },
  'b': 'one more bold text',
  'b': {
  	'@class': 'red',
    '@value': 'one more bold text'
  },
  'h3': 'hello, this is a title',
  'section': {
  	'@class': 'red',
    'i': 'text',
  	'div': {
    	 '@class': 'blue',
       'i': 'test'
    }
  }
};


function isClass(el){
  if (el[0].slice(0, 1) == '@'){
    return true
  }
  return false;
}

function isObj(el){
  if(typeof el === 'object'){
    return true;
  }
  return false;
};

function build(){
  for(var key in page2){
    if(isObj(page2[key])){
      for(var keyin in page2[key]){
        if(isClass([keyin])){
          var ell = document.createElement(key);
          var classs = [keyin][0].slice(1);
          ell.setAttribute(classs, page2[key][keyin]);
          document.getElementById('page1').appendChild(ell);
        }else{

          var elll = document.createElement([keyin][0]);
          elll.innerHTML = page2[key][keyin];
          ell.appendChild(elll);
        }
      }
    }
    var anel = document.createElement(key);
    anel.innerHTML = page2[key];
    document.getElementById('page1').appendChild(anel);

  }
}
// якась чернуха, хочу спати =(
