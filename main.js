function randomQuote() {
$.ajax({
url: "http://api.forismatic.com/api/1.0/?",
dataType: "jsonp",
data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
success: function( response ) {
$("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
response.quote + "<br/>&dash; " + response.author + " &dash;</p>");
}
});
}

$(function() {
randomQuote();
});

$("button").onclick(function(){
randomQuote();
});
