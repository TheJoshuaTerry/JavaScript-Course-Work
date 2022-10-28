
// CREATE HOTEL OBJECT using object literal syntax
var hotel = 
{
    name: 'Bates Motel',
    roomRate: 100,      // Amount in dollars
    roomsCapacity: 20,  
    roomsBooked : 10,   
    roomsAvailable: function() {
        var roomsLeft = this.roomsCapacity - this.roomsBooked;
        return roomsLeft;
    }
}

// declare function to produce total cost message
function totalCost(totalNights)
{
    var dayNames, today,subToday, checkOut, subCheckOut, day, outDay, msg;

    // Get todays date
    today = new Date('Sep 11, 2018');
    subToday = today.toDateString();

    // Arrays holding the days and months in a year
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get check in date information
    day = dayNames[today.getDay()];

    // Check out date information
    checkOut = new Date(today.getTime() + totalNights * 24 * 60 * 60 * 1000);
    subCheckOut = checkOut.toDateString();
    outDay = dayNames[checkOut.getDay()];

    // msg = 'Total cost for checking in ' + day + ' ' + month + ' ' + date + ' ' + year + ' and checking out ' + outDay + ' ' + outMonth + ' ' + outDate + ' ' + year + ' is $' + totalNights * hotel.roomRate;
    msg = 'Total cost for checking in ' + day + ' ' + subToday.substring(4) + ' and checking out ' + outDay + ' ' + subCheckOut.substring(4) + ' is $' + totalNights * hotel.roomRate;
    return msg;
}
    // example text 'Total cost for checking in Tuesday Sep 11 2018 and checking out Tuesday Sep 18 2018 is $700'
    
//end of function
hotelName = document.getElementById('hotelName');    
roomRate = document.getElementById('roomRate');
roomsAvailable = document.getElementById('roomsAvailable');
hotelName.textContent = hotel.name;                                         // Write hotel name
roomsAvailable.textContent ="Rooms Available - " + hotel.roomsAvailable();  // Write rooms available
roomRate.textContent =  'Room Rate - $' + hotel.roomRate.toFixed(2);        // call function

// Varibles
var totalNights;
var elEnds;

totalNights = prompt("How many nights will you be staying?");
elEnds = document.getElementById('totalcost');
elEnds.innerHTML = totalCost(totalNights);