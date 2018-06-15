// Current date - http://stackoverflow.com/a/4929629/412329
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
	dd='0'+dd
	} 

if(mm<10) {
	mm='0'+mm
	} 

today = yyyy+'-'+mm+'-'+dd;

function saveFormAsTextFile()
	// Based on https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
	var textToSave =
	  'TID:' + document.getElementById('tid').value + '\r\n' + // =TID
	  'SID:' + document.getElementById('sid').value + '\r\n' + // =SID
	  'OT:' + document.getElementById('ot').value + '\r\n' + // =SID
	  'Gender:' + document.getElementById('gender').value + '\r\n' + // = Gender
	  'Country:' + document.getElementById('country').value + '\r\n' + // =Country
	  'SubRegion:' + document.getElementById('subregion').value + '\r\n' + // =SubRegion
	  '3DSRegion:' + document.getElementById('consoleregion').value

	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = "trainerdata.txt";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);

	downloadLink.click();
	}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}