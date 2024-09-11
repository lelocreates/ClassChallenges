const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let customers = 1; // single customer, now treated as a number
let location = 'RSA'; // South Africa
let currency = null;
let shipping = 0;
//currency = null

if (location === 'RSA') {
	shipping = 400;
	currency = 'R';
} else if (location === 'NAM') {
	shipping = 600;
	currency = '$';
} else if (location === 'NK') {
	console.warn(BANNED_WARNING); // North Korea banned
} else {
	shipping = 800;
	currency = '$';
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 'NONE_SELECTED'
let batteries = 35 * 2
let pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = '$'

/*if (shoes + batteries + pens + shirts > 1000  ) {
	if (userLocation = "NAM" && customers < 2) {
			if (userLocation = RSA)
		    shipping = 0  //calcShipping
		}
	}
*/
	let totalCost = shoes + batteries + pens + shirts + toys; // total cost of items
	

/*if (shipping = 0 && customers !== 1) { console.warn(FREE_WARNING) }

userLocation = 'NK' ? console.warn(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)
*/

	// Check for free shipping
	if (totalCost >= 1000 && (location === 'NAM' || location === 'RSA') && customers === '1') {
		shipping = 0;  // Free shipping for RSA/NAM and totalCost >= 1000 with one customer
	} else if (totalCost >= 1000 && (location === 'NAM' || location === 'RSA') && customers !== '1') {
		console.warn(FREE_WARNING);  // Free shipping only applies to single customers
	}
	
	// Use the ternary operator to handle banned country or show the price
	location === 'NK' 
		? console.warn(BANNED_WARNING) 
		: console.log('Price:', currency, totalCost + shipping);