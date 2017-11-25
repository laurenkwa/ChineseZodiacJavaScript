var SignNames = [
		 "Rat",
		 "Ox",
		 "Tiger",
		 "Rabbit",
		 "Dragon",
		 "Snake",
		 "Horse",
		 "Goat",
		 "Monkey",
		 "Rooster",
		 "Dog",
		 "Pig"];

var SignImages = new Array(
         "Images/rat.gif",
         "Images/ox.gif",
         "Images/tgr.gif",
         "Images/rbt.png",
         "Images/drgn.png",
         "Images/snk.png",
         "Images/hrs.gif",
         "Images/gt.gif",
         "Images/mnky.png",
         "Images/rstr.gif",
         "Images/dog.gif",
         "Images/pig.gif");
         
var date = new Date().getFullYear();
var startYear = 1912;
var arrayLimit = date - startYear;    
    
var yearArray = new Array(arrayLimit);        

function makeYearArray() {
    
    
    for(var i=0; startYear < date; i++) {
        yearArray[i] = startYear;
        startYear++;
    }
}

makeYearArray();
         
    
var text = "";

for (var i = 0; i < SignNames.length ; i++) {
    
    
    
    text += "<td>" + SignNames[i] + "<br/><img src='" + SignImages[i] + "'/></td>";
    
    
}
     

     
document.getElementById("firstRow").innerHTML = text;     
document.getElementById("secondRow").innerHTML = outputYearArray(0); 
document.getElementById("thirdRow").innerHTML = outputYearArray(1);   
document.getElementById("fourthRow").innerHTML = outputYearArray(2); document.getElementById("fifthRow").innerHTML = outputYearArray(3); 
document.getElementById("sixthRow").innerHTML = outputYearArray(4); 
document.getElementById("seventhRow").innerHTML = outputYearArray(5); 
document.getElementById("eigthRow").innerHTML = outputYearArray(6); 
document.getElementById("ninthRow").innerHTML = outputYearArray(7); 
document.getElementById("tenthRow").innerHTML = outputYearArray(8);     
    
function outputYearArray(arg) {
    var start = arg * 12; 
    var end = start + 11;
    var yearText="";
    
    for(var i=start; (i <= end) && (i < yearArray.length); i++) {


        yearText += "<td>" + yearArray[i] + "</td>";
            
        
    }
    return yearText;
    
 }
    
   
		 

