var Timer;
var TotalSeconds;

function CreateTimer(TimerID, Time) {
Timer = document.getElementById(TimerID);
TotalSeconds = Time;

UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function Tick() {
if (TotalSeconds <= 0) {
alert("Time's up!")
return;
}

TotalSeconds -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}
function UpdateTimer() {
var Seconds = TotalSeconds;

var Days = Math.floor(Seconds / 86400);
Seconds -= Days * 86400;

var Hours = Math.floor(Seconds / 3600);
Seconds -= Hours * (3600);

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);
    
var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)

Timer.innerHTML = TimeStr;
}


function LeadingZero(Time) {

return (Time < 10) ? "0" + Time : + Time;

//http://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm

var timeoutID;

function setup() {
    this.addEventListener('mousemove', resetTimer, false);
    this.addEventListener('mousedown', resetTimer, false);
    this.addEventListener('keypress', resetTimer, false);
    this.addEventListener('DOMMouseScroll', resetTimer, false);
    this.addEventListener('mousewheel', resetTimer, false);
    this.addEventListener('touchmove', resetTimer, false);
    this.addEventListener('MSPointerMove', resetTimer, false);

    startTimer();
}

setup();

function startTimer() {
    timeoutID = window.setTimeout(goInactive, 5000);
}

function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}

function goInactive() {
    chrome.runtime.sendMessage({ userActive: false });
}

function goActive() {
    chrome.runtime.sendMessage({ userActive: true });
    startTimer();
}