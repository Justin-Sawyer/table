$(document).ready(function() {
    /*
    
    //underline h2 elements
    $("h2").css("text-decoration", "underline")
    //create border for ul elements
    $("ul").css("border", "solid 2px #ccc")

    Since we don't want inline styling, we add classes to CSS instead and then add classes to jQuery
    */
   $("h2").addClass("underline");
   $("ul").addClass("border");

   $("tr:odd").addClass("odd");
   $("tr:even").addClass("even");
});