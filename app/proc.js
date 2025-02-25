function init(){
    let accept = true;
    do {
        let val1 = prompt('enter date');
        let val2 = prompt('enter month');
        let val3 = prompt('enter year');
        let date,month,year;
        if (val1 === null || val1 === '' || val2 === null || val2 === '' || val3 === null || val3 === ''){
            accept = errorStatus('Some values is empty or not given! TRY AGAIN!!!');
            continue;
        }else{
            date = parseInt(val1);
            month = parseInt(val2);
            year = parseInt(val3);
            accept = myIsNumeric(date, month, year);
        }
        accept = confirm('date-' + date + '; month-' + month + '; year-' + year + ';') && accept ;
        if (accept == false){
            continue;
        }
        if (date < 1 || date > 31 || month < 1 || month > 12){
            accept = errorStatus('no such day or month! TRY AGAIN!!!');
            continue;
        }
        if (year< 1583){
            accept = errorStatus('Our solution doesnt work with year less than 1583! SELECT ANOTHER DAY!!!');
            continue;
        }
        accept = maxMonthDayCheck(date, month, year);
        if (accept == false){
            continue;
        }
        let dayOfWeek = searchOfDay(date,month,year)
        daySelect(dayOfWeek);
        accept = !confirm('Want to try again?');
    }while(accept !== true);
}
function searchOfDay (date, month, year){
    let a = parseInt((14 - month)/12);
    let newYear = year - a;
    let newMonth = month + 12 * a - 2;
    return (date + parseInt((31 * newMonth)/12) + newYear + parseInt(newYear/4) - parseInt(newYear/100) + parseInt(newYear/400)) % 7;
}
function daySelect (dayOfWeek){
    if (dayOfWeek == 0){
        alert('Day of week is Sunday!');
    }else if(dayOfWeek == 1){
        alert('Day of week is Monday!');
    }else if(dayOfWeek == 2){
        alert('Day of week is Tuesday!');
    }else if(dayOfWeek == 3){
        alert('Day of week is Wednesday!');
    }else if(dayOfWeek == 4){
        alert('Day of week is Thursday!');
    }else if(dayOfWeek == 5){
        alert('Day of week is Friday!');
    }else if(dayOfWeek == 6){
        alert('Day of week is Saturday!');
    }
}
function errorStatus(message){
    alert(message);
    return false;
}

function maxMonthDayCheck(date, month, year){
    if(month == 4 || month == 6 || month || month == 9 || month == 11){
        if (date<1 && date == 30){
            return errorStatus('no such day in this month! TRY AGAIN!!!');
        }
    }else if (month == 2){
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
            if (date > 29){
                return errorStatus('no such day in this month! TRY AGAIN!!!');
            }
        }else{
            if (date > 28){
                return  errorStatus('no such day in this month! TRY AGAIN!!!');
            }
        }
    }
    return true;
}
function myIsNumeric(date, month, year){
    if (Infinity + date + month + year !== Infinity){
        return errorStatus('not a number given!');
    }
    return true;
}


init();