//Webapp Config
var firebaseConfig = {
    apiKey: "AIzaSyDFic9pKb5-zppUNdFIgXvh7FxondBL7mU",
    authDomain: "commentinge.firebaseapp.com",
    databaseURL: "https://commentinge.firebaseio.com",
    projectId: "commentinge",
    storageBucket: "commentinge.appspot.com",
    messagingSenderId: "491402447021",
    appId: "1:491402447021:web:0b213091c3f6630a29de24",
    measurementId: "G-348V040XWP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// converts from JSON object returned by firestore to Comment object
// and vice versa
dataConverter = {
    toFirestore: function(comment) {
        return {
            name: comment.name,
            message: comment.message,
            upvotes: comment.upvotes,
            downvotes: comment.downvotes,
            commentURL: comment.commentURL,
            date: comment.date
        }
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return new Comment(data.name, data.message, data.commentURL);
    }
}

// listener upon chrome recieving an action (either fetch or post comments)
chrome.runtime.onMessage.addListener((msg, sender, resp) => {
    var url = JSON.parse(msg.data).commentURL;
    var unchangedUrl = url
    // minor string manipulation to make the URL indexable in firebase
    url = url.split("//").pop();
    var changedUrl = url.replace(/\//g,"aza")
    if(msg.command == "post"){
        // get the comments database from firebase, convert it to a class using the data converter
        // index for the 
        var docRef = db.collection("Comments").withConverter(dataConverter).doc(changedUrl)
        docRef.get().then(function(doc) {
            if(doc.exists) {
                docRef.update({
                    // append to the current list of comments
                    comments: firebase.firestore.FieldValue.arrayUnion(msg.data)
                })
            } else {
                // make a new document and append the message data to it
                db.collection("Comments").doc(changedUrl).set({
                    comments: firebase.firestore.FieldValue.arrayUnion(msg.data)
                })
            }
        });
    } else if(msg.command == "fetch"){
        var arr = [];
        db.collection(`Comments`).get()
        .then(function(querySnapshot) { 
            if (!querySnapshot.empty) {
                querySnapshot.docs.map(function(documentSnapshot) {
                    try {
                        var incomingComments = documentSnapshot.data().comments;
                        // find comments for the current webpage
                        for (c in incomingComments) {
                            if(JSON.parse(incomingComments[c]).commentURL == unchangedUrl) {
                                arr[c] = JSON.parse(incomingComments[c])
                            }
                        }
                    } catch (error) {}
                });
            }
            resp({type:"result", status:"success", data:arr, request:msg})
        });
    }

    return true
});