var today = new Date();
var getHour = today.toDateString();

var writeHour = document.getElementById('timestamp');
writeHour = document.write('<h3>' + getHour + '</h3>');
