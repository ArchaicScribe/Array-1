const sauron = ['sauron'];
const everyone = ['sauron', 'lurtz', 'witch-king of angmar', 'khamul', 'ulaire toldea', 'balrog', 'morgoth', 'shelob',
	'saruman', 'ulaire lemenya'];
const large = new Array(100000).fill('sauron');
const { performance } = require('perf_hooks');

function foundYou(array) {
	for (let i = 0; i < array.length; i++) {
		console.log('running')
		if (array[i] == 'sauron') {
			console.log('Sauron has found you!');
			break;
		}
	}
}
foundYou(everyone); //O(n) or linear time

const foundYou2 = array => {
	array.forEach(antagonist => {
		if (antagonist === 'sauron') {
			console.log('Sauron has found you!');
		}
	})
}


const foundYou3 = array => {
	for (let antagonist of array) {
		if (antagonist === 'sauron') {
			console.log('Sauron has found you!');
		}
	}
}


foundYou2(everyone);
foundYou3(everyone);