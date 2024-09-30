const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const posLeoBalance = Math.abs(leoBalance) 
const posSarahBalance = Math.abs(sarahBalance)
const owed = parseInt(Math.abs(leoBalance)) + parseInt(Math.abs(sarahBalance))
const leo = `\n`+leoName +' '+leoSurname+`(Owed: R` + posLeoBalance +`)\n`
const sarah = `\n`+sarahName+''+sarahSurname + `(Owed: R`+posSarahBalance +`)\n`
const total = `Total amount owed: `
const result = leo + sarah +`\n` + divider +`\n`+ '   ' + total + owed+`\n`+ divider
console.log(result)