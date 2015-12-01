//Firebase Reference
var db = new Firebase('https://user-stories.firebaseio.com/');

var interval = null;
var updateTime = 5000;
var currentTabInfo = {};
var userActive = true;
// var tabURL;
// var activeTab;
// function updateActive(tab){
// 	activeTab = tab;
// }
// function onActivated(info){
// 	chrome.tabs.get(info.tabId, updateActive);
// }
// function onUpdated(info, tab){
// 	if(tab.active)
// 		updateActive(tab);
// }
// function.tabs.query({active: true, lastFocusedWindow}, function(tabs){
// 	updateActive(tabs[0]);
// 	chrome.tabs.onActivated.addListerner(onActivated);
// 	chrome.tabs.onUpdated.addListerner(onUpdated);
// });

chrome.tabs.query({
	active: true,
	currentWindow: true
}, function(tabs){
	getURL(tabs[0].url);
});

// when tab opens get tab
// chrome.tabs.getSelected(null, function(tab){
// 	tabURL = tab.url;
// 	var d = new Date();
// 	//Save data to Firebase
// 	db.push({url:tabURL});
// });


//listen for active tab
// if(){
// 	var url = ;
// 	var ftime = ;
//
// 	//save data to firebase
// 	db.push({url:url, time:time});
// }
