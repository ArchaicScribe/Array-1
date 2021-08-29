//   const sauron = ['sauron'];
//  const everyone = ['sauron' , 'lurtz', 'witch-king of angmar', 'khamul', 'ulaire toldea', 'balrog', 'morgoth', 'shelob',
//  'saruman', 'ulaire lemenya'];
//  const large = new Array(100000).fill('sauron');
//  const {performance} = require('perf_hooks');

//  function foundYou(array){
//    for (let i = 0; i < array.length; i ++){
//      console.log('running')
//      if (array[i] == 'sauron'){
//        console.log('Sauron has found you!');
//        break;
//      }
//    }
//  }
//  foundYou(large); //O(n) or linear time


// const boxes = [400,10,2,3,4,5];
// function logFirstTwoBoxes(boxes){
//   console.log(boxes[0]);//O(1)
//   console.log(boxes[1]);//O(1);
// }
// logFirstTwoBoxes(boxes); // O (2)

// function funChallenge(input) {
//   let a = 10;//O(1)
//   a = 50 + 3;//O(1)

//   for (let i = 0; i < input.length; i++) { //O(n)
//     anotherFunction();//O(n) it depends on what our input is and the length of said input. 
//     let stranger = true;//O(n)
//     a++;//o(n)
//   }
//   return a;//o(1)
// }

// funChallenge();

// //Big O(3 + 4n)

// function anotherFunChallenge(input) {
//   let a = 5;//O(1)
//   let b = 10;//O(1)
//   let c = 50;//O(1)
//   for (let i = 0; i < input; i++) {//O(n)
//     let x = i + 1;//O(n)
//     let y = i + 2;//O(n)
//     let z = i + 3;//O(n)

//   }
//   for (let j = 0; j < input; j++) {//O(n)
//     let p = j * 2;//O(n)
//     let q = j * 2;//O(n)
//   }
//   let whoAmI = "I don't know";//O(1)
// }

//O(n)
//Big O(4 + 7n)



//Log all pairs of array
const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes)