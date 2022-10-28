var elHeader, elFooter, elButton, elNav;									//Create element varibles
var textHead, textFoot;														//
/*Store Element locations*/
elHeader = document.querySelector('header > h1');							//Location of h1 inside of the header
elFooter = document.querySelector('footer > h2');							//Location of h2 inside of the footer
elNav = document.querySelector('nav');  									//Location of the nav tag
elButton = document.getElementById('buttons');								//Location of the radio buttons
elTextHead = document.getElementById('headerText');							//Location of the header input
elTextFoot = document.getElementById('footerText');							//Location of the footer input
elDone = document.getElementById('done');									//Location of the span element with the done text
function changeText(e, type)												//Change Text
{
	/*Change Header and Footer Text*/
	var target = e.target;													//set target
	var input = target.value;												//get targets value
	type.textContent = input;												//change types text to value
}
function changeMain()														//Change form to ipsumText
{
	/*Change the forms to text*/
	var elRemove = document.getElementsByTagName('form')[0];				//get form location
	var remove = elRemove.parentNode;										//get parent node
	remove.removeChild(elRemove);											//remove form element
	var ipsumText = 'Lorem ipsum dolor sit amet, consectetur ' +			//IpsumText
	'adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
	'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
	'exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
	'consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
	'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
	'occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
	'mollit anim id est laborum.';
	var newP = document.createElement('p');									//create first 'p' element
	var ipsum = document.createTextNode(ipsumText);							//create text node
	newP.appendChild(ipsum);												//append text tp element
	var pos = document.getElementsByTagName('main')[0];						//get location
	pos.appendChild(newP);													//append to loaction
	var ipsumText1 = 'Mauris augue neque gravida in fermentum et ' +		//IpsumText
	'sollicitudin. Non nisi est sit amet facilisis magna. Magna etiam tempor ' +
	'orci eu lobortis elementum. Tristique risus nec feugiat in fermentum posuere ' +
	'urna nec. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Dolor ' +
	'sed viverra ipsum nunc aliquet bibendum enim. Lacus vestibulum sed arcu ' +
	'non odio euismod lacinia at quis. Amet aliquam id diam maecenas ultricies ' +
	'mi eget. Amet facilisis magna etiam tempor orci eu lobortis. Purus faucibus ' +
	'ornare suspendisse sed nisi lacus sed viverra. Eget aliquet nibh praesent ' +
	'tristique magna sit amet purus. Tristique magna sit amet purus.';
	var newP1 = document.createElement('p');								//Create second 'p' element
	var ipsum1 = document.createTextNode(ipsumText1);						//create text node
	newP1.appendChild(ipsum1);												//append test to element
	var pos1 = document.getElementsByTagName('main')[0];					//get location
	pos1.appendChild(newP1);												//append to location
	var el = document.getElementsByTagName('button');					    //Get nav button
	var buttonValue = el.length;
	if(buttonValue > 0)
	{
		var elH2 = document.createElement('h3');							//Create h3 Element
		var phrase = document.createTextNode('Remove all buttons ' + 
		'below to reset page');												//Create new header text
		elH2.appendChild(phrase);											//Append text to h3
		var position = document.getElementsByTagName('header')[0];			//Get location to put h3
		position.appendChild(elH2);											//Append location with the h3
	}							
}
function addButton()														//Add Nav Buttons
{
	/*Add Buttons to the Nav Element*/
	var el = document.getElementsByName('numberButtons');					//Get Radio Button
	var value = 0;															//Radio button value
	var elLength = document.getElementsByTagName('button');					//Get nav button
	var buttonValue = elLength.length;										//Set button length value
	for (var i = 0; i < el.length; i++)
	{
		if(el[i].checked)
		{
			value = el[i].value;											//Set value of the changed radio button
		}
	}
	if(buttonValue > 0)
	{
		for(var i = 0; i < buttonValue; i++)
		{
			var elRemove = document.getElementsByClassName('button')[0];	//Get location of the first nav button
			var remove = elRemove.parentNode;								//Get parent node of the button
			remove.removeChild(elRemove);									//Remove the button
		}
	}
	for(var k = 1; k < el.length + 1; k++)
	{
		if(value == k)
		{
			for(var j = 0; j < value; j++)
			{
				var boxEl = document.createElement('button');				//Create button Element
				boxEl.setAttribute('class', 'button');						//Set attribute to Button Element
				var letter = document.createTextNode('button' + (j + 1));	//Create button text
				boxEl.appendChild(letter);									//Append text to button
				var position = document.getElementsByTagName('nav')[0];		//Get location to put button
				position.appendChild(boxEl);								//Append location with the button
			}
		}
	}
}

function removeButton(e, type)												//Remove Nav Buttons
{
	/*Remove Buttons from the Nav Element*/
	var target, elParent;													//Element Variables
	target = e.target;														//Get Target
	elParent = target.parentNode;											//Get targets parentNode
	var el = document.getElementsByTagName('button');					    //Get nav button
	var buttonValue = el.length;										    //Get number of buttons
	if(buttonValue > 0)
	{
		elParent.removeChild(target);										//remove button
		if(buttonValue <= 1)
		{
			location.reload(true);
		}
	}
}

function clearForm(type)													//Clear form inputs
{
	/*Clear the forms input*/
	var elText = type;														//Store element in function
	elText.focus();															//Create focus on the first 
	document.getElementById('myform').reset();								//Clear form and reload
	
}
/*Events to make changes to the website*/
elTextHead.addEventListener('blur', function (e){							//Change Header Text
	changeText(e, elHeader)}, false);
elTextFoot.addEventListener('blur', function (e){							//Change Footer Text
	changeText(e, elFooter)}, false);
elDone.addEventListener('click', changeMain, false);						//Delete form and change main to text
elButton.addEventListener('change', addButton, false);						//Add buttons to nav
window.addEventListener('load', function (){								//Reset forms "Has glitch that will cause the page to need to be reloaded twice to clear"
	clearForm(elTextHead)}, false);
elNav.addEventListener('dblclick', function(e){								//Remove buttons from nav "Has glitch that will remove nav if clicked off of the button"
	removeButton(e, elTextHead)}, false);