//Firebase Reference
var db = new Firebase('https://user-stories.firebaseio.com/');

var activeTab;
function updateActive(tab){
	activeTab = tab;
}
function onActivated(info){
	chrome.tabs.get(info.tabId, updateActive);
}
function onUpdated(info, tab){
	if(tab.active)
	db.push({url:tab.url,active_time:time});
		updateActive(tab);
}
function.tabs.query({active: true, lastFocusedWindow}, function(tabs){
	updateActive(tabs[0]);
	chrome.tabs.onActivated.addListerner(onActivated);
	chrome.tabs.onUpdated.addListerner(onUpdated);
});

//when tab opens get tab
// chrome.tabs.getSelected(null, function(tab){
// 	var tabURL = tab.url;
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
