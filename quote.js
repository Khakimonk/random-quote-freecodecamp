var quoteArray = ["The extensive literature addressed to the definition or characterization of science is filled with inconsistent points of view and demonstrates that an adequate definition is not easy to attain. Part of the difficulty arises from the fact that the meaning of science is not fixed, but is dynamic. As science has evolved, so has its meaning. It takes on a new meaning and significance with successive ages.",
    "The sciences we are familiar with have been installed in a number of great 'continents'. Before Marx, two such continents had been opened up to scientific knowledge: the continent of Mathematics and the continent of Physics. The first by the Greeks (Thales), the second by Galileo. Marx opened up a third continent to scientific knowledge: the continent of History.",
    "Science doesn't purvey absolute truth. Science is a mechanism. It's a way of trying to improve your knowledge of nature. It's a system for testing your thoughts against the universe and seeing whether they match. And this works, not just for the ordinary aspects of science, but for all of life. I should think people would want to know that what they know is truly what the universe is like, or at least as close as they can get to it.",
    "We often frame our understanding of what the space telescope will do in terms of what we expect to find, and actually it would be terribly anticlimactic if in fact we find what we expect to find. … The most important discoveries will provide answers to questions that we do not yet know how to ask and will concern objects we have not yet imagined.",
    "We say that the string is 'random' if there is no other representation of the string which is shorter than itself. But we will say that it is 'non-random' if there does exist such an abbreviated representation. ...In general, the shorter the possible representation... the less random... On this view we recognize science to be the search for algorithmic compressions. ...It is simplest to think of mathematics as the catalogue of all possible patterns. ...When viewed in this way, it is inevitable that the world is described by mathematics. ...In many ways the search for a Theory of Everything is a manifestation of a faith that this compression goes all the way down to the bedrock of reality..."
];

var quoteAuthor = ["Russell L. Ackoff", "Louis Althusser", "Isaac Asimov", "John N. Bahcall", "John D. Barrow"];

var main = function() {
    $('.btn').click(function() {
        var quoteRand = Math.floor((Math.random() * 5));
        $('.quote-text').text(quoteArray[quoteRand]);
        $('.quote-origin').text(quoteAuthor[quoteRand]);
    });
};

$(document).ready(main);

/*      api call example
[
{
"ID": 1051,
"title": "Frank Lloyd Wright",
"content": "<p>You can use an eraser on the drafting table or a sledge hammer on the construction site.  </p>\n",
"link": "http://quotesondesign.com/frank-lloyd-wright/"
}
]*/

var apiUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function runApi() {
    $.getJSON(apiUrl, function(data) {
        holdData(data);
    });
}

function holdData(data) {
    var content = data[0].content;
    var title = data[0].title;
    var link = data[0].link;
    console.log(content);
}

runApi();
