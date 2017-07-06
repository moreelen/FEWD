// https://api.github.com/users/moreelen?client_id=801600193faf6accd0ab&client_secret=1c265f06981533e743aa23a5c0432be6d91d04ee
// This is all in JavaScript with jQuery on top and calling AJAX to request and read data.

$(function(){

  function searchUserInfo(){
    console.log("Looking for info about " + window.nickname);

    // .ajax is a function. We don'tneed to understand how it works but look on the documents to find our more.
    $.ajax({
      url: "https://api.github.com/users/" + window.nickname + "?client_id=801600193faf6accd0ab&client_secret=1c265f06981533e743aa23a5c0432be6d91d04ee",
      
      // Then call back the data using the below.
      // Success means once data has been retrieved then execute. The function takes in the data retrieved.
      success: function(data){
        // Then it prints out the result.
        console.log("result", data);

        // HTML will change all the html in the div of class avatar
        // You have to use single quotes inside double quotes.
        // Then to undo you have to do double quotes again. Confusing!
        $(".avatar").html("<img src='"  + data["avatar_url"] +  "' class='col l12' />");

        $(".details h1").text(data["name"]);
        $("li .city").text(data["location"]);
        $("li .company").text(data["company"]);
        $("li .since").text(data["created_at"]);
      }
    })
  }

  function getUserRepos(){
    // Empty the content of the tbody before filling it again.
    $("#repos-tab tbody").empty();

    // Call the API data and append that data into the HTML.
    $.ajax({
      url: "https://api.github.com/users/" + window.nickname + "/repos?client_id=801600193faf6accd0ab&client_secret=1c265f06981533e743aa23a5c0432be6d91d04ee",
      success: function(data){
        // debugger This command will stop the execution of code here if console is open.

        // Run through every element in the data.
        for(var i = 0; i < data.length; i++){
          // console.log(data[i]["name"]);
          // Add a line inside the table (inside the tbody tag) for every repo.
          $("#repos-tab tbody").append("<tr><td>" + data[i]["name"] + "</td><td>" + data[i]["language"] + "</td><td><a href='" + data[i]["html_url"] + "'>Go on github</a></td></tr>");
        }

      }
    })
  }


  $("#search").on("keypress", function(event){
    //
    console.log($("#search").val());
    // When the keycode 13 is pressed (aka. enter key).
    if(event.keyCode === 13){
      // Stop the default behaviour.
      // event.preventDefault();

      // Saves the nickname typed into search as a variable called nickname.
      // var nickname = $(this).val();
      // Window object is the web browser. Here I am attaching the variable to the window.
      // That way I can access it later, no matter of scope.
      window.nickname = $(this).val();
      // searchUserInfo(nickname); We no longer have to call nickname. Just window.nickname.
      searchUserInfo();
      getUserRepos();
    }
  })

  //We have an element on the page called repos. When user clickson it we want to execut a function.
  //$("#repos").on("click", )
})