// Variables
var totalDie, i, randNum;
        
// write a function that will draw a dice 
function drawDice(num)
{
    var dot = "dot";
    var noDot = "noDot";
    switch(num)
    {
        case 1:
        document.write('<div class="dice">' + 
                '<div class="' + noDot + '"></div><div class="' + noDot + '"style=align-items: center;></div><div class="' + noDot + '"style=align-items: flex-end;> </div>' + 
                '<div class="' + noDot + '"style=vertical-align: center></div><div class="' + dot + '"style=vertical-align: center; align-items:center></div><div class="' + noDot + '"style=vertical-align: center; align-items: flex-end></div>' + 
                '<div class="' + noDot + '"style=vertical-align: baseline></div><div class="' + noDot + '"style=vertical-align: baseline; align-items:center></div><div class="' + noDot + '"style=vertical-align: baseline; align-items: flex-end></div>' + 
                '</div>');
            break;
        case 2:
        document.write('<div class="dice">' + 
                '<div class="' + noDot + '"></div><div class="' + noDot + '"style=align-items: center;></div><div class="' + dot + '"style=align-items: flex-end;> </div>' + 
                '<div class="' + noDot + '"style=vertical-align: center></div><div class="' + noDot + '"style=vertical-align: center; align-items:center></div><div class="' + noDot + '"style=vertical-align: center; align-items: flex-end></div>' + 
                '<div class="' + dot + '"style=vertical-align: baseline></div><div class="' + noDot + '"style=vertical-align: baseline; align-items:center></div><div class="' + noDot + '"style=vertical-align: baseline; align-items: flex-end></div>' + 
                '</div>');
            break;
            
        case 3:
        document.write('<div class="dice">' + 
                '<div class="' + dot + '"></div><div class="' + noDot + '"style=align-items: center;></div><div class="' + noDot + '"style=align-items: flex-end;> </div>' + 
                '<div class="' + noDot + '"style=vertical-align: center></div><div class="' + dot + '"style=vertical-align: center; align-items:center></div><div class="' + noDot + '"style=vertical-align: center; align-items: flex-end></div>' + 
                '<div class="' + noDot + '"style=vertical-align: baseline></div><div class="' + noDot + '"style=vertical-align: baseline; align-items:center></div><div class="' + dot + '"style=vertical-align: baseline; align-items: flex-end></div>' + 
                '</div>');
            break;
        case 4:
        document.write('<div class="dice">' + 
                '<div class="' + dot + '"></div><div class="' + noDot + '"style=align-items: center;></div><div class="' + dot + '"style=align-items: flex-end;> </div>' + 
                '<div class="' + noDot + '"style=vertical-align: center></div><div class="' + noDot + '"style=vertical-align: center; align-items:center></div><div class="' + noDot + '"style=vertical-align: center; align-items: flex-end></div>' + 
                '<div class="' + dot + '"style=vertical-align: baseline></div><div class="' + noDot + '"style=vertical-align: baseline; align-items:center></div><div class="' + dot + '"style=vertical-align: baseline; align-items: flex-end></div>' + 
                '</div>');
            break;
        case 5:
        document.write('<div class="dice">' + 
                '<div class="' + dot + '"></div><div class="' + noDot + '"style=align-items: center;></div><div class="' + dot + '"style=align-items: flex-end;> </div>' + 
                '<div class="' + noDot + '"style=vertical-align: center></div><div class="' + dot + '"style=vertical-align: center; align-items:center></div><div class="' + noDot + '"style=vertical-align: center; align-items: flex-end></div>' + 
                '<div class="' + dot + '"style=vertical-align: baseline></div><div class="' + noDot + '"style=vertical-align: baseline; align-items:center></div><div class="' + dot + '"style=vertical-align: baseline; align-items: flex-end></div>' + 
                '</div>');
            break;
        case 6:
        document.write('<div class="dice">' + 
                '<div class="' + dot + '"></div><div class="' + noDot + '"style=align-items: center;></div><div class="' + dot + '"style=align-items: flex-end;> </div>' + 
                '<div class="' + dot + '"style=vertical-align: center></div><div class="' + noDot + '"style=vertical-align: center; align-items:center></div><div class="' + dot + '"style=vertical-align: center; align-items: flex-end></div>' + 
                '<div class="' + dot + '"style=vertical-align: baseline></div><div class="' + noDot + '"style=vertical-align: baseline; align-items:center></div><div class="' + dot + '"style=vertical-align: baseline; align-items: flex-end></div>' + 
                '</div>');
            break;
    }
}
// prompt - how many dice does user wish to draw?
totalDie = prompt("How many Dice?");

// create for-loop to run for number of dice
for(i = 0; i < totalDie; i++)
{
    randNum = Math.floor(Math.random() * 6 + 1);
    drawDice(randNum);
}
