// Responses for magic Eigth ball
var responses = [
    "Without a doubt",
    "Ask again later",
    "Don't count on it",
    "Signs point to yes",
    "Outlook not so good",
    "Better not tell you now"
    ];

var randomResponse = responses[Math.floor(Math.random() * responses.length)];
document.getElementById('response').textContent = randomResponse;