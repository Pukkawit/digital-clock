const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const amPmEl = document.getElementById('am-pm');
const currYear = document.getElementById('year');
const currMonth = document.getElementById('month');
const currDay = document.getElementById('day');
const currDates = document.getElementById('date');


function updateClock (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let y = new Date().getFullYear();
    let months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // Create an array of day names
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Create a new Date object
    let currDate = new Date();
    // Get the current day of the week (0 for Sunday, 1 for Monday, and so on)
    let currentDayOfWeek = currDate.getDay();
    let currentDate = currDate.getDate();
    let currentMonth = currDate.getMonth();
    // Use the current day of the week as an index to retrieve the day name
    let currentDayName = daysOfWeek[currentDayOfWeek];
    let mnth = months[currentMonth];
    let amPm = 'AM';

    if (h > 12) {
        h = h-12;
        amPm = 'PM';
    }

    h = h<10? '0'+h:h;
    m = m<10? '0'+m:m;
    s = s<10? '0'+s:s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    amPmEl.innerText = amPm;
    currYear.innerText = y;
    currMonth.innerHTML = mnth;
    // Output the current day of the week
    currDay.innerHTML = currentDayName+',';
    // Output the current day of the week

    let dateSuffix;
    if (currentDate === 1) {
        dateSuffix = 'st';
    } else if (currentDate === 2){
        dateSuffix ='nd';
    } else if (currentDate === 3){
        dateSuffix ='rd';
    } else if (currentDate >= 4){
        dateSuffix ='th';
    }
    else {
        dateSuffix = ''
    };

    currDates.innerHTML = currentDate + dateSuffix;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();
