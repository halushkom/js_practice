function polidrome() {
  	var re = /[\W_]/g;
	let str = 'race car';
  	let newstr = str.replace(re, '')
	let reversed = newstr.split('').reverse().join('');
	console.log(newstr === reversed)
}

polidrome()