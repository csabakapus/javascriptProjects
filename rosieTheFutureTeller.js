function rosieTheFortuneTeller() {
  var name = prompt('Hi, dear! My name is Rosie and I am an expert fortune teller. What is your name?');
  var choice = prompt('Yes, I have seen that you will come to me, ' + name + ' Now please, choose one from the following and type it in the box: turtle, rose, teacup, moon.');
  
  switch (choice) {
    case 'turtle':
      alert('Here is your fortune: Don’t panic.');
      break;
  
    case 'rose':
      alert('Here is your fortune: You will find a thing. It may be important.');
      break;
    
    case 'teacup':
      alert('Here is your fortune: The end is near, might as well have dessert.');
      break;
  
    case 'moon':
      alert('Here is your fortune: Look before you leap. Or wear a parachute.');
      break;
    
    default: 
      alert('I am sorry, ' + name + '. I do not think I understand you correctly. Are you sure you typed in one of the offered possibilities?');
    
  }
}

rosieTheFortuneTeller();

