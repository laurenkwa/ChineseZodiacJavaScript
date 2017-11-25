var signs = new Array(12);
	for (var ndx = 0; ndx < 12; ndx++) {
		signs[ndx] = new Array(2);
	}
	
	// The names first
	signs[0][0] = "Rat";
	signs[1][0] = "Ox";
	signs[2][0] = "Tiger";
	signs[3][0] = "Rabbit";
	signs[4][0] = "Dragon";
	signs[5][0] = "Snake";
	signs[6][0] = "Horse";
	signs[7][0] = "Goat";
	signs[8][0] = "Monkey";
	signs[9][0] = "Rooster";
	signs[10][0] = "Dog";
	signs[11][0] = "Pig";
	
	// Next the image file names
	signs[0][1] = "Images/rat.gif";
	signs[1][1] = "Images/ox.gif";
	signs[2][1] = "Images/tgr.gif";
	signs[3][1] = "Images/rbt.png";
	signs[4][1] = "Images/drgn.png";
	signs[5][1] = "Images/snk.png";
	signs[6][1] = "Images/hrs.gif";
	signs[7][1] = "Images/gt.gif";
	signs[8][1] = "Images/mnky.png";
	signs[9][1] = "Images/rstr.gif";
	signs[10][1] = "Images/dog.gif";
	signs[11][1] = "Images/pig.gif";
    
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

for (var i = 0; i < signs.length ; i++) {
    
    text += "<td>" + signs[i][0] + "<br/><img src='" + signs[i][1] + "'/></td>";
    
    
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
    
       
