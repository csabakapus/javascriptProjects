/*
 oscarTheLifetimeSupplier droid who needs some basic information about our age, what we think how long we will survive in this world and more.
*/


function oscarTheLifetimeSupplier() {
	var age = prompt('How old are you?');
	var liveUntil = prompt('What do you think, how long do you live?');
	var snackName = prompt('What is your favorite snack?');
	var eatPerWeek = prompt('How much of it you eat a week?');
	
	var neededSupply = (eatPerWeek * 52) * (liveUntil - age);
	
	
	alert('Your favorite snack "' + snackName + '" you need is enough for you until you die.\nWhich is ' + liveUntil + ' years old ... Is it old, my lord?\nFor this the estimated supply is: ' + neededSupply + ' piece.');
	return;
	
}

oscarTheLifetimeSupplier();


