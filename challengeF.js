//Initialize variables
let date = 2050
let userstatus = 'student' //changed status from userstatus
let count = 0

// if statement check the year and console logs the holidays in that months 
if (date = 2050) {
	console.log("January", 'New Year’s Day') 
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4 // increases count by +4 according to the holidays in the time frame
}

//if statement checks if the user is a student  and counts youth day if the user is a student.
	if (userstatus = "student") { //changed status to userstatus
	    console.log('June', 'Youth Day')
		count = count + 1
}
// if statemnt check the date and console logs the holidays in the time frame
	if (date = 2050) {
    console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3  // increases count by +3 according to the holidays in the time frame
}

//if statemnt checks if the user is a parent and counts christmas if the user is a parent 
	if ( userstatus = "parent") {
	    console.log(date, 'Christmas Day')
		count = count + 1
}
//if statement counts and logs that last holiday of the year 
    if(date= 2050) {
	console.log(date, 'Day of Goodwill')
	count = count + 1
}
// the block of code logs the results from the code above adding the variable to the appropriate strings 
console.log('Your status is:', userstatus)
console.log('The year is:', date)
console.log('The total holidays is:', count)
