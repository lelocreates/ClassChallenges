FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

let userLocation = "";
let shipping = 0
let currency = ""
customers = '1'
//currency = null

if (userLocation = "RSA") { shipping === 400 && currency === 'R' }

if (userLocation= "NAM") {
    shipping = 600 
} else {shipping = 800
}
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 'NONE_SELECTED'
let batteries = 35 * 2
let pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = '$'

if (shoes + batteries + pens + shirts > 1000  ) {
	if (userLocation = "NAM" && customers < 2) {
			if (userLocation = RSA)
		    shipping = 0  //calcShipping
		}
	}


if (shipping = 0 && customers !== 1) { console.warn(FREE_WARNING) }

userLocation = 'NK' ? console.warn(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

