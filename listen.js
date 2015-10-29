//Firebase Reference
var db = new Firebase('https://user-stories.firebaseio.com/');

//when tab opens get tab
chrome.tabs.getSelected(null, function(tab){
	var tabURL = tab.url;
	//Save data to Firebase
	db.push({url:tabURL});
});


// //listen for tab close
// if(){
// 	var url = ;
// 	var ftime = ;
//
// 	//save data to firebase
// 	db.push({url:url, time:time});
// }
