var movies = ["this is the end", "pineapple express", "big mommas house", "bluestreak", "black knight", "national security"];
var letters = [];
var hasWon = false;
var randNum = Math.floor(Math.random() * movies.length);
var movie = movies[randNum];
var movieCheck = [];
var count = 0;
var word;
movie = movie.toUpperCase();
var movieWords = movie.split(" ");
// I simplified your tile creation here...
for(var i = 0; i < movieWords.length; i++)
{
    word = movieWords[i];
    for(var j = 0; j < word.length; j++)
    {
        var boxEl = document.createElement('div');
        boxEl.setAttribute('class', 'box');
        var letter = document.createTextNode(word[j]);
        boxEl.appendChild(letter);
        document.body.appendChild(boxEl);
    }
    var head = document.createElement('h1');
    document.body.appendChild(head);
}
for(var i = 0; i < movie.length; i++)
{
    if(movie[i] == " ")
    {
        count++;
        movieCheck[i] = " ";
    }
}
while(!hasWon)
{
    if(count == movie.length)
    {
        var checkMovie = "";
        for(var i = 0; i < count; i++)
        {
            checkMovie = checkMovie + movieCheck[i];
        }
    }
    if(checkMovie == movie)
    {
        alert("You Won!!!!");
        break;
    }
    var ans = prompt("Pick a Letter or Guess the Title:");
    ans = ans.toUpperCase();
    if(ans == "")
    {
        hasWon = true;
        
    } else if(ans == movie)
    {
        alert("You Won!!!!");
        for (var i = 0; i <= movie.length; i++)
        {
            var listItems = document.querySelectorAll('div');
            listItems[i].className = 'found';
        }
        break;
    }
    var listItems = document.querySelectorAll('div, h1');
    for(var i = 0; i < movie.length; i++)
    {
        if(ans == movie[i])
        {
            listItems[i].className = 'found';
            movieCheck[i] = ans;
            count++;
        }
    }
}