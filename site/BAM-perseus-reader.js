var perseusTextBaseUrl = "http://www.perseus.tufts.edu/hopper/CTS?request=GetPassage&urn=urn:cts:greekLit:tlg0031.tlg003.perseus-eng1:";

//TO DO: Make these global
var activeChapter = 1;
var activeVerse =1;


$( "#perseusAllBack" ).click(function()
{
  getPerseusText('Lk 1:1',0);
  activeChapter = 1;
  activeVerse = 1;
});


$( "#perseusOneForward" ).click(function() {
activeVerse++;
  checkIfInText('Luke', activeChapter, activeVerse);
});

$( "#perseusAllForward" ).click(function() {
  getPerseusText('Lk 24:53',0);
    activeChapter = 24;
  activeVerse = 53;
});

$( "#perseusOneBack" ).click(function()
{

checkIfInTextReverse('Luke', activeChapter, activeVerse)

});


function getPerseusText(reference, isFirst)
{
var firstString = '<center><b>';
if (isFirst ==0){
firstString = firstString + reference;
}
else
{
	var lk1 ='Lk 1:1';
	firstString = firstString + lk1;
}
firstString = firstString + '</b></center>';
if (isFirst ==0){

reference = reference.replace('Lk ','');
reference = reference.replace(':','.');
var finalPerseusUrl = perseusTextBaseUrl + reference;
}
else
{
	finalPerseusUrl = 'http://www.perseus.tufts.edu/hopper/CTS?request=GetPassage&urn=urn:cts:greekLit:tlg0031.tlg003.perseus-eng1:1.1';
}
$.ajax({
    type: "GET",
    url: finalPerseusUrl,
    dataType: "xml",
    success: function(xml) {

var x=xml.getElementsByTagName("p")[0].childNodes[0];
var finalString = firstString + x.nodeValue;

$("#textcontainer").html(finalString);


    }
});
}


function checkIfInText(textname, chapter, verse)
{

switch (textname)
{
	case 'Luke':
	switch (chapter)
	{
		case 1:
		if (verse > 80)
			{
				chapter = 2;
				verse = 1;
			}
	break;
		case 2:
		if (verse > 52)
			{
				chapter = 3;
				verse = 1;
			}
break;
		case 3:
		if (verse > 38)
			{
				chapter = 4;
				verse = 1;
			}
	break;
		case 4:
		if (verse > 44)
			{
				chapter = 5;
				verse = 1;
			}
	break;	
	 	
		case 5:
		if (verse > 39)
			{
				chapter = 6;
				verse = 1;
			}
		break;	
	
			case 6:
		if (verse > 49)
			{
				chapter = 7;
				verse = 1;
			}
		break;	
	
				case 7:
		if (verse > 50)
			{
				chapter = 8;
				verse = 1;
			}
			break;	
			
						case 8:
		if (verse > 56)
			{
				chapter = 9;
				verse = 1;
			}
			break;	
			
		case 9:
		if (verse > 62)
			{
				chapter = 10;
				verse = 1;
			}
			break;	
 	
 		case 10:
		if (verse > 42)
			{
				chapter = 11;
				verse = 1;
			}
			break;
 
 		case 11:
		if (verse > 54)
			{
				chapter = 12;
				verse = 1;
			}
			break; 	
			
 		case 12:
		if (verse > 59)
			{
				chapter = 13;
				verse = 1;
			}
			break; 					
 	
 		case 13:
		if (verse > 35)
			{
				chapter = 14;
				verse = 1;
			}
			break;

	case 14:
		if (verse > 35)
			{
				chapter = 15;
				verse = 1;
			}
			break;
	
		case 15:
		if (verse > 32)
			{
				chapter = 16;
				verse = 1;
			}
			break;
	
	case 16:
		if (verse > 31)
			{
				chapter = 17;
				verse = 1;
			}
			break;	

	case 17:
		if (verse > 37)
			{
				chapter = 18;
				verse = 1;
			}
			break;	

	case 18:
		if (verse > 43)
			{
				chapter = 19;
				verse = 1;
			}
			break;				

	case 19:
		if (verse > 48)
			{
				chapter = 20;
				verse = 1;
			}
			break;	
			
	case 20:
		if (verse > 47)
			{
				chapter = 21;
				verse = 1;
			}
			break;										

	case 21:
		if (verse > 38)
			{
				chapter = 22;
				verse = 1;
			}
			break;	

	case 22:
		if (verse > 71)
			{
				chapter = 23;
				verse = 1;
			}
			break;

	case 23:
		if (verse > 56)
			{
				chapter = 24;
				verse = 1;
			}
			break;		
			
				case 24:
		if (verse > 53)
			{
				chapter = 24;
				verse = 53;
			}
			break;			
	
	}
	activeChapter = chapter;
	activeVerse = verse;
	var reference ='Lk '+ chapter + ':' +verse;
	getPerseusText(reference,0);

	break;
}
}


function checkIfInTextReverse(textname, chapter, verse)
{
/*this is ugly. For the demo this is hardcoded - for the finished version
it will be a config file and grabbed from the server */
	activeVerse--;
	var chapter = activeChapter;
	var verse = activeVerse;
	
	switch (textname)
{
	case 'Luke':
	if (activeVerse == 0)
	{
	
		if (activeChapter > 1)
		{
			switch (activeChapter)
			{
				case 2:
				chapter = 1;
				verse = 80;
				break;
				
				case 3:
				chapter = 2;
				verse = 52;
				break;
		
				case 4:
				chapter = 3;
				verse = 38;
				break;
				
				case 5:
				chapter = 4;
				verse = 44;
				break;	
	 	
				case 6:
				chapter = 5;
				verse = 39;
				break;	
	
				case 7:
				chapter = 6;
				verse = 49;
				break;	
	
				case 8:
				chapter = 7;
				verse = 50;
				break;	
			
				case 9:
				chapter = 8;
				verse = 56;
				break;	
			
				case 10:
				chapter = 9;
				verse = 62;
				break;	
 	
 				case 11:
				chapter = 10;
				verse = 42;
				break;
 
 				case 12:
				chapter = 11;
				verse = 54;
				break; 	
			
 				case 13:
				chapter = 12;
				verse = 59;
				break; 					
 	
 				case 14:
				chapter = 13;
				verse = 35;
				break;

				case 15:
				chapter = 14;
				verse = 35;
				break;
	
				case 16:
				chapter = 15;
				verse = 32;
				break;
	
				case 17:
				chapter = 18;
				verse = 31;
				break;	
	
				case 18:
				chapter = 19;
				verse = 37;
				break;	

				case 19:
				chapter = 18;
				verse = 43;
				break;				

				case 20:
				chapter = 19;
				verse = 48;
				break;	
			
				case 21:
				chapter = 20;
				verse = 47;
				break;										

				case 22:
				chapter = 21;
				verse = 38;
				break;	

				case 23:
				chapter = 22;
				verse = 71;
				break;

				case 24:
				chapter = 23;
				verse = 56;
				break;
				}
			}
			
			//if these conditions are not met, reset to the first part of the text
			else
			{
				chapter = 1;
				verse = 1;
			}
		}
		activeChapter = chapter;
	activeVerse = verse;

	var reference ='Lk '+ chapter + ':' +verse;
	getPerseusText(reference,0);	
		}
		

	}


