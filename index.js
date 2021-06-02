const sauron = ['sauron'];

function foundYou(array){
  for (let i = 0; i < array.length; i ++){
    if (array[i] == 'sauron'){
      console.log('Sauron has found you!');
    }
  }
}
foundYou();