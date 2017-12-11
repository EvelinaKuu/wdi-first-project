alert('loaded JS');




// i would probably have on object for sentences inside that object I´d have a sentence0, sentence1, sentence3, until sentence10. the key of those are the actual sentence in English, the key is the words that is the options like huevos and manzanas and something and the values are true, false and false. Make the button option display the key of the object 1 and make the div with the class sentences show the sentence.
var sentences {
  var sentence1 = {
    "Maria would like to have [eggs] for breakfast." {
      manzanas: "false",
      huevos: "true",
      panqueques: "false"
    }
    var sentence2 = {
      "Juan will take the [bus] to work."{
        bicileta: "false",
        tren: "false",
        autobus: "true"
      }
    }
}
 var determineAnswer {
   // if the key value is === "true" go to next sentence and add a number +1 to the level p tag class "level"
   // else alert a pop up window 1. saying wrong choice, try again, or ig you have time 2. explaining the word and try again
}

// In the DOM
$(() => {

  const $choices = $('.button.choices');


// make a start again button and an event listener
// const $reset = $('.button.reset');

  function startAgain (){
    $level.text('1');
  }
  // $choices.on('click',determineAnswer);
//   $startAgain.on('click',level);
});
