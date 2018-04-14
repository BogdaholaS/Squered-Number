// function message() {
// 	alert('Message')

// }
// var block = document.getElementById('block').style;
// function replacingCl() {
	
// 	if(block.style.background = 'orange')
// 		var addCl = document.getElementById('block').classList.add('block_2')
// 	else
// 		var removeCl = document.getElementById("block").classList.remove('block');

// }

// function pow(x , n) {
// 	x = prompt('Enter a number: ');
// 	n = prompt('Enter a number: ');
// 	var result = Math.pow(x, n);
// 	alert(result);

function pow( x , n ){
	var result = x;
	for(var i = 1; i < n ; i++){
		result *= x;
	}
	return result;
}
var x = prompt("x?",'');
var n = prompt("n?",'');
alert(pow(x, n));





