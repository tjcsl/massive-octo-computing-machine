function getClicks(){

//Magic get request from Fox's python wizardry
//Will be from a MySQL column
//Would it be easier to use PHP?


// var click = ...
//$('#clicks').text(click);


//return click;



return 0;

}



function submitClick(){

	//Magic post request to another .py
	//Overwrites current user click value, assigns current one



}

var clicks = 0;
var lim = 200;

$(function(){

	clicks = getClicks();


});


function incClick(){

	clicks++;
	$('#clicks').text(clicks);
	if(clicks % lim == 0)
		submitClick();


}

//Rather than do a post every click, which would bog servers, send a post method every [lim] clicks.


//If any of this is confusing (due to my code being sloppy, which it is), email me at mjkaufer@gmail.com