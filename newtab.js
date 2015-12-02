var ref = new Firebase('https://user-stories.firebaseio.com/');
    // Retrieve new posts as they are added to our database
    ref.on("child_added", function(snapshot, prevChildKey) {
        var newPost = snapshot.val();
        var table = document.getElementById("results");
        var row = table.insertRow(1);
        // var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        // var cell3 = row.insertCell(1);
        // cell1.innerHTML = newPost.header;
        cell2.innerHTML = newPost.url;
        // cell3.innerHTML = newPost.time;
        console.log("title: " + newPost.header);
        console.log("url: " + newPost.url);
        console.log("Time: " + newPost.time);
        console.log("Previous Post ID: " + prevChildKey);
    });