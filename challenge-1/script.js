const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name : leoName,
	balance: leoBalance,
	access_id: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		postal_code: leoPostal,
	},
}

const sarah = {
	name: sarahName + sarahSurname,
	age: 62,
	access_id: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postal_code: sarahPostal,
	},
}

console.log(leo.name, leo.balance, leo.access_id, leo.age, leo.address.number, leo.address.street, leo.address.postal_code);
console.log(sarah.name, sarah.balance, sarah.access_id, sarah.age, sarah.address.number, sarah.address.street, sarah.address.postal_code);

// BUG FIXES:
/*
 * 'leoSurname' was an undefined variable(Leo's surname was included in the 'leoName' string)
 * used only 'leoName' as reference in 'leo.name'  property
 * rewrote 'access id' and 'postal-code' as snakeCase
 * added ',' to end of each property declaration line in both elements
 * fixed both object literals format
 * 
 */
