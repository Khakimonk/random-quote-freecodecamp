var content;

var main = function() {
    $('.btn').click(function() {
      runApi();
    });
};

$(document).ready(main);

var apiUrl = "https://api.chucknorris.io/jokes/random";

function runApi() {
    $.getJSON(apiUrl, function(data) {
        holdData(data);
    });
}

function holdData(data) {
    content = data.value;
    var link = data.url;
    showresult(content, link);
}

function showresult(content, link) {
  $('.quote-text').text(content);
  $('.quote-origin').text("Chuck Norris");
  $('footer').text("Quote Provided by " + link);
}

//runApi();
