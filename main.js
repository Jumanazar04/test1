let ism = prompt('Ismingizni kiriting')

let char = ism.charAt(0)
let sliciee = ism.slice(1)
let newchar = char.toUpperCase()
let newslice = sliciee.toLowerCase()

console.log('Salom', newchar + newslice);
console.log(sliciee);