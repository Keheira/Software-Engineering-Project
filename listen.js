//Firebase Reference
var db = new Firebase('https://user-stories.firebaseio.com/');
// var time = null;
// var tabs = null;
var interval = setInterval(timer,1000);
var date;

function timer(){
	date = new Date();
	document.getElementById('time').innerHTML = date.toLocaleTimeString();
}

//personal reference
// chrome.windows.getAll({populate:true},function(windows){
//   windows.forEach(function(window){
//     window.tabs.forEach(function(tab){
//       console.log(tab.url);
//     });
//   });
// });

// var getTabs = function() {
// 	d = new Date();
// };

// var resetVariables = function(){
// 	time = null;
// 	tabs = null;
// 	clearInterval(time);
// }
chrome.tabs.getSelected(null, function(tab){
	var tabURL = tab.url;
	console.log('This works');
	//Save data to Firebase
	db.push({url:tabURL});
 });
// chrome.tabs.query({
// 	active: true,
// 	currentWindow: true,
// },function(tab){
	// console.log("working..");
	// if(tabs === null) tabs = tab.url;
	// if(tabs != tab.url){
		// var newDate = new Date();
		// var record = newDate - d;
		// console.log("push!!!!");
		// db.push({url:tab.url, time: date.toLocaleTimeString()});
		// tabs = tab.url;
	// }
	// console.log("I got the tab!" + tab.url);
// });
// chrome.windows.onRemoved.addListener(resetVariables);
// chrome.windows.onCreated.addListener(getTabs);