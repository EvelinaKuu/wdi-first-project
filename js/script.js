// alert('loaded JS');


$(function() {
  let level = 0;
  const sentences = [
    {
      question: 'Maria would like to have <span class="wordToTranslate"> eggs </span> for breakfast.',
      options: ['manzanas', 'huevos', 'panqueques'],
      correct: 'huevos'
    },

    {
      question: 'Juan will take the <span class="wordToTranslate"> bus </span> to work.',
      options: ['bicileta', 'tren', 'autobus'],
      correct: 'autobus'
    }
  ];
  // level++;
  // how to increase level by one
  console.log(sentences[level].correct);
});
// i would probably have on object for sentences inside that object I´d have a sentence0, sentence1, sentence3, until sentence10. the key of those are the actual sentence in English, the key is the words that is the options like huevos and manzanas and something and the values are true, false and false. Make the button option display the key of the object 1 and make the div with the class sentences show the sentence.

//
// }
//  var determineAnswer {
//    // if the key value is === "true" go to next sentence and add a number +1 to the level p tag class "level"
//    // else alert a pop up window 1. saying wrong choice, try again, or ig you have time 2. explaining the word and try again
// }
//
// // In the DOM
// $(() => {
//
//   const $choices = $('.button.choices');
//
//
// // make a start again button and an event listener
// // const $reset = $('.button.reset');
//
//   function startAgain (){
//     $level.text('1');
//   }
//   // $choices.on('click',determineAnswer);
// //   $startAgain.on('click',level);
// });
