import {company, year} from './configuration.js'; 
/*changed the import statements to one line
added curly brackets
added ./ to configuration.js
incorrect spelling of from
add semi colons*/
const message = '© ' + company + '' + year; 
//add the const to define the message variable
document.querySelector('footer').innerText = message;

