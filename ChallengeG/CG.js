const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let customers = '1'; // single customer
let ulocation = 'RSA'; // South Africa
let currency = null;
let shipping = 0;

if (ulocation === 'RSA') {
    shipping = 400;
    currency = 'R';
} else if (ulocation === 'NAM') {
    shipping = 600;
    currency = '$';
} else if (ulocation === 'NK') {
    console.warn(BANNED_WARNING); // North Korea banned
} else {
    shipping = 800;
    currency = '$';
}

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let totalCost = shoes + batteries + pens + shirts + toys; // total cost of items

// Check for free shipping
if (totalCost >= 1000 && (ulocation === 'NAM' || ulocation === 'RSA') && customers === '1') {
    shipping = 0;  // Free shipping for RSA/NAM and totalCost >= 1000 with one customer
} else if (totalCost >= 1000 && (location === 'NAM' || ulocation === 'RSA') && customers !== '1') {
    console.warn(FREE_WARNING);  // Free shipping only applies to single customers
}

// Use the ternary operator to handle banned country or show the price
ulocation === 'NK' ? console.warn(BANNED_WARNING) : console.log('Price:', currency, totalCost + shipping);