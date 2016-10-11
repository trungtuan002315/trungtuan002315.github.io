var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var numberDayInMonth = new Array("31","28","31","30","31","30","31","31","30","31","30","31");
var dayOfWeek = new Array("Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat");
var month = new Date().getMonth();
var year = new Date().getFullYear();
var positionDateNow;

// reate combobox month
function forMonth(){
    document.write('<SELECT id="month_" onchange="onChangeMonth();">');
    for (var i = 0; i < months.length; i++) {
        document.write('<option value="'+ i +'">' + months[i] + '</option> ');
        }    
    document.write("</SELECT>");

}
// reate combobox year
function forYear(){
 document.write('<SELECT id="year_" onchange="onChangeYear();">');
    for (var i = 1900; i <=2030; i++) {
        document.write('<option value="'+ i +'">' +i+ '</option> ');
        }    
    document.write("</SELECT>");  

}

// reate list dayOfWeek
function dawDayOfWeek() {
    document.write('<tr>');
    for (var i = 0; i < dayOfWeek.length; i++) {
        document.write('<td>' + dayOfWeek[i] + '</td>');
    }
    document.write('</tr>');    
}

// reate calendar 
function dawCalender(month, year){
    var count = 1;
    for (var i = 0; i < 6; i++) {
        document.write('<tr>');
        for (var j = 0; j< 7; j++) {
            document.write('<td ID="item' + count + '" CLASS="item" onClick="chooseDay('+count+');" ></td>');
            count++;
        }
        document.write('</tr>');
    }
    setDay();
    setMonth();
    setYear();
}

function setMonth(){
    document.getElementById("month_").value= month;
}
function setYear(){
    document.getElementById("year_").value= year;
}
function previousYear(){
    erase();
    year--;
    console.log(year);
    setDay();
    setMonth();
    setYear();
}
function previousMonth(){
    erase();
    month--;
    if( month < 0){
        month = 11;
        year--;
    }
    console.log(month);
    setDay();
    setMonth();
    setYear();
}

function nextMonth(){
    erase();
    month++;
    if(month > 11){
        month = 0;
        year++;
    }
    setDay();
    setMonth();
    setYear();
}

function nextYear(){
    erase();
    year++;
    setDay();
    setMonth();
    setYear();
}
function erase() {
        for (var i = 1; i <= 42; i++) {
            document.getElementById("item" + i).innerHTML = "";
            document.getElementById("item" + i).style.background = "none";
        }
}
function onChangeMonth(){
    erase();
    month = document.getElementById("month_").value;
    setDay();
}
function onChangeYear(){
    erase();
    year = document.getElementById("year_").value;
    setDay();
}
function chooseDay(position){
    var day =  document.getElementById("item" + position).innerHTML;
    var month_now = document.getElementById("month_").value;
    month_now =parseInt(month_now) +1;
    var year_now = document.getElementById("year_").value;
    var results = parseInt(day)+"/"+ parseInt(month_now) +"/"+ parseInt(year_now);

    document.getElementById("output").value = results;
    document.getElementById("content").style.display="none";
}
function openCalendar(){
    document.getElementById("content").style.display="block";
}

function setDay(){
    var dateNow = new Date().getDate();
    var month_now = new Date().getMonth();
    var year_now = new Date().getFullYear();
    var day = new Date(year, month, 1).getDay();
    var previous_month = month;
    var next_month = month;
    if(((year%4==0)&&(year%100!=0))|| (year%400==0)){
        numberDayInMonth[1]=29;
    }
    else{
        numberDayInMonth[1]=28;
    }
    if(previous_month<0){
        month=11;
    }
    if (next_month==12) {
        month = 0;
    }
    var numberDay = numberDayInMonth[month];
    var numberDayOfPreviousMonth = numberDayInMonth[previous_month];
    var numberDayOfNextMonth = numberDayInMonth[next_month];
    var check = true;
    var count =1;
    var position =1;
    var positionStart = day;
    var positionStop = parseInt(day)+parseInt(numberDay);
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if(count>=day){
                check==true;
            }
            if(check==true && position<=numberDay){
                document.getElementById("item" + (position + day)).innerHTML = position;
                document.getElementById("item" + (position + day)).style.background = "#99ccff";
                if(dateNow == position && month_now == month && year_now == year){
                    document.getElementById("item" + (position + day)).style.background = "#ff3300";
                    positionDateNow = "item" + (position + day);
                } 
                document.getElementById("item" + (position + day)).style.color = "#000000";
                position++;
            }
            count++;
            
        }

    }
    for (var i = positionStart; i > 0; i--) {
            document.getElementById("item" + (i)).innerHTML = numberDayOfPreviousMonth--;
            document.getElementById("item" + (i)).style.color = "#ccccff";
        }
    for (var j = 1; j <= (42 - positionStop); j++) {
            document.getElementById("item" + (j + positionStop)).innerHTML = j;
            document.getElementById("item" + (j + positionStop)).style.color = "#ccccff";
    }

}
