// const sauron = ['sauron'];
// const everyone = ['sauron' , 'lurtz', 'witch-king of angmar', 'khamul', 'ulaire toldea', 'balrog', 'morgoth', 'shelob',
// 'saruman', 'ulaire lemenya'];
// const large = new Array(100000).fill('sauron');
// const {performance} = require('perf_hooks');

// function foundYou(array){
//   for (let i = 0; i < array.length; i ++){
//     if (array[i] == 'sauron'){
//       console.log('Sauron has found you!');
//     }
//   }
// }
// foundYou(large); //O(n) or linear time
const boxes = [0,1,2,3,4,5];
function logFirstTwoBoces(boxes){
  console.log(boxes[0]);//O(1)
  console.log(boxes[1]);//O(1);
}
logFirstTwoBoces(boxes); // O (2)