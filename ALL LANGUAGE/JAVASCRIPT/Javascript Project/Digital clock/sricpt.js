window.addEventListener('load',calculateTime());

function calculateTime(){
    var date = new Date();
    var dayNamber = date.getDay();
    var dayHour = date.getHours();
    var dayMinutes = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];

    dayHour = dayHour % 12;
    dayHour = dayHour ? dayHour : '12';
    dayHour = dayHour < 10 ? '0' + dayHour : dayHour;
    dayMinutes = dayMinutes < 10 ? '0' + dayMinutes : dayMinutes;

    document.getElementById("day").innerHTML = dayNames[dayNamber];
    document.getElementById("hour").innerHTML = dayHour;
    document.getElementById("minute").innerHTML = dayMinutes;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);    
}

// calculateTime();







