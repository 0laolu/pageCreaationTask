const dayOfTheWeek = document.querySelector(".day p")
const utcTimeElement = document.querySelector(".utc-time p")


// getting the date
const date = new Date()
// using the date to get the number of day
const dayNumber = date.getDay()
// creating an array to store each day number
const dayArr = new Array(7)
dayArr[0] = "Sunday"
dayArr[1] = "Monday"
dayArr[2] = "Tuesday"
dayArr[3] = "Wednesday"
dayArr[4] = "Thursday"
dayArr[5] = "Friday"
dayArr[6] = "Saturday"

// setting the day number to return the actual day
let day = dayArr[dayNumber]
// display the current day on webpage
dayOfTheWeek.textContent = day


const utcInMilliseconds = date.getUTCMilliseconds()
utcTimeElement.textContent = utcInMilliseconds