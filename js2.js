function validate(){
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

  var name = $('[name=name]').val();
  var email = $('[name=email]').val();
  var date = $('[name=date]').val();
  var ip = $('[name=ip]').val();
  var regexp=/^\d+\.\d+\.\d+\.\d+$/i;

  name.length > 5 && name.length < 30 && _.contains(email.split(''), '@') && date == today && regexp.test(ip) ? alert('все норм') : alert('дата - інвалід');
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 91 * 24 * 60 * 60 * 1000 + 2 * 60 * 1000 + 15 * 1000);
initializeClock('clockdiv', deadline);
