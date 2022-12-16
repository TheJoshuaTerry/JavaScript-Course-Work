/**Creation of the webpage */
$('head').append("<style>body {width:800px; margin: auto} header, footer {text-align: center; height: 100px; line-height: 100px;" + 
" background: lightblue} footer{clear: both} div {width:100px; height: 100px; float:left; background-color: #999; margin: 50px}" + 
" #red{background-color: red;} #green{background-color: green;} #blue{background-color: blue;} #yellow{background-color: yellow;} #removed{background-color: white}</style>");
$('body').prepend("<header><h1>How many tiles...? 8<input type=radio name=tilenumber value=8> 12<input type=radio name=tilenumber value=12> 16<input type=radio name=tilenumber value=16></h1></header>" + 
"<main></main><footer><h2></h2></footer>");

/**Global Varibles */
var $inputSelected = $('input'), numberOfTiles;
var $main = $('main');
var $header = $('header');
var $footer = $('footer');
var $div = $('div');
var $removedLen = 0;
var tries = 4;
var colorArray;
var classArray;
var ranNum;
var check;
var check1;
var check2;
var bHasVerified;
var bHasclickedOne = false;

/**Creation of memory tiles */
$header.on('change', function(e)
{
    numberOfTiles = e.target.value;                                 //Number of tiles to make
    var $lenDiv = $('div').length;                                  //How many tiles already created
    ranNum = Math.round(Math.random() * 15);                        //Random Gen for color array
    /**Pick array to use for tile creation */
    if(numberOfTiles == 8)
    {
        if(ranNum < 5)
        {
            colorArray = ['red', 'blue', 'green', 'blue', 'red', 'green', 'red', 'red'];
            classArray = ['one', 'two', 'three', 'two', 'one', 'three', 'one', 'one'];
        }
        else if(ranNum < 10)
        {
            colorArray = ['blue', 'red', 'green', 'blue', 'red', 'blue', 'green', 'blue'];
            classArray = ['two', 'one', 'three', 'two', 'one', 'two', 'three', 'two'];
        }
        else if(ranNum < 16)
        {
            colorArray = ['red', 'blue', 'green', 'red', 'red', 'green', 'red', 'blue'];
            classArray = ['one', 'two', 'three', 'one', 'one', 'three', 'one', 'two'];
        }
    }
    else if(numberOfTiles == 12)
    {
        if(ranNum < 5)
        {
            colorArray = ['red', 'blue', 'green', 'blue', 'green', 'red', 'green', 'blue', 'red', 'blue', 'green', 'red'];
            classArray = ['one', 'two', 'three', 'two', 'three', 'one', 'three', 'two', 'one', 'two', 'three', 'one'];
        }
        else if(ranNum < 10)
        {
            colorArray = ['blue', 'green', 'red', 'green', 'blue', 'red', 'red', 'blue', 'green','blue', 'green', 'red'];
            classArray = ['two', 'three', 'one', 'three', 'two', 'one', 'one', 'two', 'three', 'two', 'three', 'one'];
        }
        else if(ranNum < 16)
        {
            colorArray = ['red', 'blue', 'green', 'blue', 'green', 'red', 'green', 'blue', 'red', 'blue', 'green', 'red'];
            classArray = ['one', 'two', 'three', 'two', 'three', 'one', 'three', 'two', 'one', 'two', 'three', 'one'];
        }
    }
    else if(numberOfTiles == 16)
    {
        if(ranNum < 5)
        {
            colorArray = ['red', 'blue', 'blue', 'green', 'yellow', 'red', 'green', 'yellow', 'blue', 'green', 'yellow', 'red', 'green', 'yellow', 'red', 'blue'];
            classArray = ['one', 'two', 'two', 'three', 'four', 'one', 'three', 'four', 'two', 'three', 'four', 'one', 'three', 'four', 'one', 'two'];
        }
        else if(ranNum < 10)
        {
            colorArray = ['blue', 'green', 'yellow', 'red', 'green', 'yellow', 'red', 'blue', 'red', 'green', 'yellow', 'blue', 'yellow', 'red', 'blue', 'green'];
            classArray = ['two', 'three', 'four', 'one', 'three', 'four', 'one', 'two', 'one', 'three', 'four', 'two', 'four', 'one', 'two', 'three'];
        }
        else if(ranNum < 16)
        {
            colorArray = ['red', 'blue', 'blue', 'green', 'yellow', 'red', 'green', 'yellow', 'blue', 'green', 'yellow', 'red', 'green', 'yellow', 'red', 'blue'];
            classArray = ['one', 'two', 'two', 'three', 'four', 'one', 'three', 'four', 'two', 'three', 'four', 'one', 'three', 'four', 'one', 'two'];
        }
    }
    /**Check if tiles have been made */
    if($lenDiv > 0)
    {
        $main.empty();                                              //Remove tiles if they already exists
        var j = 0;                                                  
        for(var i = 0; i < numberOfTiles; i++)
        {
            $main.append('<div class = ' + classArray[j] +'></div>');  //Add tiles to main
            if(j < classArray.length - 1)
            {
                j++;
            }
            else
            {
                j = 0;
            }
        }
    }
    /**Check if no tiles have been made */
    if($lenDiv <= 0)
    {
        var j = 0;
        for(var i = 0; i < numberOfTiles; i++)
        {
            $main.append('<div class = ' + classArray[j] +'></div>');  //Add tiles to main
            if(j < classArray.length - 1)
            {
                j++;
            }
            else
            {
                j = 0;
            }
        }
        $removedLen = 0;
    }
    $('h2').text('Pick a tile...');                                 //Update footer text
});

$main.on('click', 'div', function()
{
    var $this = $(this);
    /**Check if tile has been removed */
    if($this.hasClass('removed'))
    {
        return;
    }
    /**Check if there isnt a tile already clicked on */
    if(!bHasclickedOne)
    {
        for(var i = 0; i < colorArray.length; i++)
        {
            /**Check if the tile has the class in loop */
            if($this.hasClass(classArray[i]))
            {
                $this.attr('id', colorArray[i]);                    //Add an id with specific color
                check = classArray[i];                              //Class check
                check1 = colorArray[i];                             //ID check
                bHasclickedOne = true;                              //Has clicked boolean
            }
        }
        $('h2').text('Pick another tile...');                       //Update footer text
    }
    else
    {       
        /**Check if tile already clicked */
       if($this.is('#' + check1))
       {
           return;
       }
       
        bHasVerified = $this.hasClass(check);
        /**Check if tile has match */
        if(bHasVerified)
        {
            for(var i = 0; i < colorArray.length; i++)
            {
                if($this.hasClass(classArray[i]))
                {
                    $this.attr('id', colorArray[i]);
                    bHasclickedOne = false;
                    $('h2').text('YOU HAVE MATCH!!!');                 //Update footer text
                }
            }
            $('div').each(function()
            {
                var $funThis = $(this);
                if($funThis.is('#' + check1))
                {
                    /**Delay when clicking on tiles */
                    setTimeout(function()
                    {
                        $funThis.removeAttr('id');                      //Remove ID
                        $funThis.attr('id', 'removed');                 //Add ID that makes tile invisible
                        $funThis.removeAttr('class');                   //Remove Class
                        $funThis.attr('class', 'removed');              //Add class to check if the tile has been removed
                    }, 200);
                    $removedLen++;  
                    var $lenDiv = $('div').length;
                    if($removedLen === $lenDiv)
                    {
                        $main.empty();                              //Remove tiles
                        $('h2').text('YOU WIN!!!');                 //Update footer text
                    }                  
                }
            });
            
        }
        else
        {
            for(var i = 0; i < colorArray.length; i++)
            {
                if($this.hasClass(classArray[i]))
                {
                    $this.attr('id', colorArray[i]);
                    check2 = colorArray[i];
                }
            }
            $('h2').text('No match! ... number of misses remaining = ' + tries);    //Update footer text
            /**Delay when clicking on tiles */
            setTimeout(function()
                    {
                        $('div').each(function()                        //Cycle through all div's
                        {
                            var $funThis = $(this);
                            if($funThis.is('#' + check1))
                            {
                                $funThis.removeAttr('id');
                                bHasclickedOne = false;             
                            }
                            if($funThis.is('#' + check2))
                            {
                                $funThis.removeAttr('id');
                                bHasclickedOne = false;             
                            }
                        });
                    }, 700);
            tries--;
            if(tries < 0)
            {
                alert('You Lost the game!!!!');                     //Update footer text
                location.reload(true);
            }
        }
    }
});