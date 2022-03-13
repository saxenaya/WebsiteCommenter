$(function () {
    function fetch() {
        // load username, message, and clear the currently loaded comments
        var username = $('#username').val();
        var msg = $('#comment').val();
        $("#loadedCommentsHere").empty();


        var loadComments = [];
        chrome.tabs.getSelected(null, function (tab) {
            // initialize a comment with the URL of the current tab
            newComment = new Comment(username, msg, tab.url);
            chrome.runtime.sendMessage({ command: "fetch", data: JSON.stringify(newComment) }, (response) => {
                loadComments = response.data; // get all comments on the current page
                function putInTemplate(d) {
                    $("#loadedCommentsHere").append(['<div class="loadedComments">',
                        `<div class="flexContainer"> `,
                        `<h4 class="displayName"><strong>${d.name}</strong></h4>`,
                        `<h5 class="displayDate"> &nbsp; ${d.date}</h5> </div>`,
                        `<h3 class="displayMessage">${d.message}</h3>`,
                        '</div><br>'].join("\n"));
                }
                // display all the loaded comments using the template
                for (i = 0; i < loadComments.length; i++) {
                    putInTemplate(loadComments[i]);
                }

            });
        });
    }
    // call fetch() as soon as the extension window is opened
    fetch();

    class Comment {
        constructor(name, message, commentURL) {
            this.name = name;
            this.message = message;
            this.upvotes = 0;
            this.downvotes = 0;
            this.commentURL = commentURL;
            var d = new Date();
            var month = d.getMonth() + 1;
            this.date = month.toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString();
        }
        upvote() {
            this.upvotes++;
        }

        downvote() {
            this.downvotes++;
        }

        toString() {
            return this.name + ' said ' + this.message;
        }
    }

    // upon hitting the submit button automatically call fetch 
    // to load the new list of comments
    $('#fetch').click(function () {
        fetch();
    });

    $("#post").click(function () {
        var username = $('#username').val();
        var msg = $('#comment').val();
        
        function isEmpty(x) {
            return (
                (typeof x == 'undefined')
                ||
                (x == null)
                ||
                (x == false)
                ||
                (x.length == 0)
                ||
                (x == "")
                ||
                (x.replace(/\s/g, "") == "")
                ||
                (!/[^\s]/.test(x))
                ||
                (/^\s*$/.test(x))
            );
        }
        if (isEmpty(username) || isEmpty(msg)) {
            alert("Name or Message cannot be empty!")
        } else {
            var newComment;
            chrome.tabs.getSelected(null, function (tab) {
                newComment = new Comment(username, msg, tab.url);
                // post the comment, no response interpretation necessary
                chrome.runtime.sendMessage({ command: "post", data: JSON.stringify(newComment) }, (response) => {
                });
            });
            // clear the username and comment fields
            $('#username').val('');
            $('#comment').val('');
        }
    });
});