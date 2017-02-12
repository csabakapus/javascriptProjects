// count the number of letters in a sentence that is asked/said by the user 

function bernardTheLetterCounter() {
	var sentence = prompt('Please enter a sentence to analyze.');
	var letter = prompt('Which letter dou you want me to count for you?');
	var counter = 0;

	
	for(var i = 0; i < sentence.length; i++) {
		if (sentence.charAt(i) === letter) {
			counter++;		
		}
	}

	if (counter === 0) {
		alert('The character is missing!');
	} else {
	alert('The letter ' + letter + ' occurs ' + counter + ' times in this sentence.');
	}	
 return;
}


bernardTheLetterCounter();