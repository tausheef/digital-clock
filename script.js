function twelveHourClock() {
	// Get the current time
	var now = new Date();
  
	// Set the time in the clock
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
  
	// If the hour is greater than 12, subtract 12 from it and set AM/PM to PM
	if (hours > 12) {
	  hours -= 12;
	  document.getElementById("ampm").innerHTML = "PM";
	} else {
	  document.getElementById("ampm").innerHTML = "AM";
	}
  
	// Set the time in the HTML elements
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
  }
  
  // Set the timer to update the time every second
  setInterval(twelveHourClock, 1000);