$(function(){     // same thing as window.onload
  $("body").css("background-color", "gray");

  // In order to matchID - It basically turns it into CSS syntax
  $("#first").css({
    backgroundColor: "red",
    width: "100px",
    height: "100px"
  });

  // You can pass a list of elements just like CSS.
  //$("#first", ".second")({

  //});

  // You can change one element directly on the side without calling {}
  $(".second").css("background-color", "green");
  
  // And you can change text
  $("h2").text("changed via JQuery");

  // Rather than writing a for loop we can:
  $("body").append("<ul></ul>");

  var students = ["Luke", "Ali", "Virginia", "James", "Rosa", "Marine"];

  $.each(students, function(i, element){
    $("ul").append("<li>" + element + "</li>")
  });

  // To create a listener just do:
  $("#click").on("click", function(){
    $(this).css("background-color", "yellow");
  });

  //jQuery can check things in real time like where you mouse is and do stuff with it.
  $(document).on("mousemove", function(event){
    $("#coordinates").text("x: " + event.pageX + " y: " + event.pageY)

    // Turns the coordinates into a ratio of the screen between 0 and 1.
    var documentHeight = $(document).height();
    var ratio = event.pageY/documentHeight;

    // Then turns that number into the alpha of the background colour.
    $("body").css("background-color", "rgba(128,128,128," + ratio + ")");
  });

  // You can navigate through the DOM using jQuery and apply things to children or parents.
  // This is called DOM traversal.
  $("#square-3").children("div").css({
    width: "100px",
    height: "100px",
    backgroundColor: "orange"
  });

  // This chooses the parent.
  $("#square-4").parent("div").css({
    width: "200px",
    height: "200px",
    backgroundColor: "blue"
  });

  // This chooses a sibling.
  $("#square-3").siblings("div").css({
    width: "300px",
    height: "300px",
    backgroundColor: "goldenRod"
  });

  // This tries to find that element in the html.
  // You can use this to replace GetElementByID.
  $("body").find("#square-1").css({
    width: "600px",
    height: "600px",
    backgroundColor: "purple"
  });

  // This means only do it for this element, not all.
  // There is baked in animation in jQuery and Javascript. Hence slideUp()
  $("#square-4").on("click", function(){
    $(this).slideUp();
  });

  // We can change the speed eg making it 600ms by parsing in 600 into the function.
  // And you can add a function inside a function to make it slide up.
  $("#square-1").on("click", function(){
    $(this).slideUp(3000, function(){
      $(this).slideDown(100)
    });
  });

  $("#square-2").on("click", function(event){
    // This little bit of code prevents event bubbling. So square 1 will not slide up.
    event.stopPropagation()
    $(this).fadeOut(3000, function(){
      $(this).fadeIn(100)
    });
  });

  // Animate things with css in jQuery if fading and sliding is not enough.
  $("#square-3").on("click", function(event){
    event.stopPropagation()
    $(this).animate({
      // Takes css properties.
      width: "700px",
      backgroundColor: "white",
      transform: "rotate(120deg)"
    })
  })

})
