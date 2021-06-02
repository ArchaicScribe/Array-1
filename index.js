const sauron = ['sauron'];
const everyone = ['sauron' , 'lurtz', 'witch-king of angmar', 'khamul', 'ulaire toldea', 'balrog', 'morgoth', 'shelob',
'saruman', 'ulaire lemenya'];
const {performance} = require('perf_hooks');

function foundYou(array){
  let t0 = performance.now();
  for (let i = 0; i < array.length; i ++){
    if (array[i] == 'sauron'){
      console.log('Sauron has found you!');
    }
  }
  let t1 = performance.now();
  console.log('Call for Sauron to find you took ' + (t1-t0) + ' milliseconds');
}
foundYou(everyone);