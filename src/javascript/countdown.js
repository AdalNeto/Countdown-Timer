// Set the date we're counting down to
function getGoalDate() {
    let goalDateTime = document.getElementById("goalDateTime").value;
    return dateTimeToDate(goalDateTime);
  }

function dateTimeToDate(goalDateTime){
    let year = goalDateTime.slice(0, 4);
    let month;
    switch(goalDateTime.slice(5, 7)){
        case "01": 
            month = "January"; 
            break;
        case "02": 
            month = "February";
            break;
        case "03": 
            month = "March";
            break;
        case "04": 
            month = "April";
            break;
        case "05": 
            month = "May";
            break;
        case "06": 
            month = "June";
            break;
        case "07": 
            month = "July";
            break;
        case "08": 
            month = "August";
            break;
        case "09": 
            month = "September";
            break;
        case "10": 
            month = "October";
            break;
        case "11": 
            month = "November";
            break;
        case "12": 
            month = "December";
            break;
        default:
            break;
    }
    let day = goalDateTime.slice(8, 10);
    let hour = goalDateTime.slice(11, 13);
    let minute = goalDateTime.slice(14, 16);

    return `${month} ${day}, ${year} ${hour}:${minute}:00` ;

}

function startContdown(){
    let x = setInterval(function() {

    let countDownDate = new Date(getGoalDate())
    
    let now = new Date()        
   
    let distance = (countDownDate - now)/1000;
        
   
    let days = Math.floor(distance / (60 * 60 * 24));
    let hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((distance % (60 * 60)) / (60));
    let seconds = Math.floor((distance % (60)));
    
   
    if (distance>=(60 * 60 * 24)){
            document.getElementById("timedisplay").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        }
    if (distance<(60 * 60 * 24) && distance>=(60*60)){
            document.getElementById("timedisplay").innerHTML = hours + "h "
            + minutes + "m " + seconds + "s ";
        }
    if (distance<(60 * 60) && distance>=(60)){ 
            document.getElementById("timedisplay").innerHTML = minutes + "m " + seconds + "s ";
        }
    if (distance<60 ){
            document.getElementById("timedisplay").innerHTML = seconds + "s ";
        }
            

    
    
        
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timedisplay").innerHTML = "EXPIRED";
    }
    }, 1000);
}