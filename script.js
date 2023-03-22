$(".secondP").hide();

/*First Page*/

$("button").click(function() {
    let input = $("input").val();
    if(input === "") {
        alert("You're not getting any cookies");
    } else {
        $(".firstP").hide();
        $(".secondP").show();
        $(".title").text('Welcome to ' + input + ' s Bakery');
        
    }
    
});



/*Second Page*/

let achieve = ["You're just getting started!", "Yum! 50 cookies for me", "Watch out! The cookie monster might steal them.", "You're on your way to becoming a cookie expert!"];

let num = ["20 Cookies", "50 Cookies", "100 Cookies", "200 Cookies"];

let count = 0;


$(".cookie").click(function() {
    count++;
      $("h2").text('You currently have ' + count + ' cookies');
    if (count === 20) {
       $(".achievements").append("<h1>" + achieve[0] + "</h1>" + "<div>" + num[0] + "</div>"); 
    } else if(count === 50){
    $(".achievements").append("<h1>" + achieve[1] + "</h1>" + "<div>" + num[1] + "</div>"); 
    } else if(count === 100){
    $(".achievements").append("<h1>" + achieve[2] + "</h1>" + "<div>" + num[2] + "</div>"); 
    } else if(count === 200){
    $(".achievements").append("<h1>" + achieve[3] + "</h1>" + "<div>" + num[3] + "</div>"); 
    }
  
});
