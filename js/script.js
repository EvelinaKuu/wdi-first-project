// alert('loaded JS');


$(() => {
  const $sentence = $('.sentence');
  const $options = $('.option'); // array of DOM elements (buttons)
  // const $displayLevel = $('.$displayLevel');
  const $startAgain = $('.startAgain');
  let level = 0;
  let currentLevel = null;
  let currentCorrect = null;

  const questionsArray = [
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

  function generateQuestion() {
    currentLevel = questionsArray[level]; // currentLevel holds the whole object from the array
    const currentQuestion = currentLevel.question;
    const currentOptions = currentLevel.options;
    currentCorrect = currentLevel.correct;

    $sentence.html(currentQuestion); // just updating the DOM with the currentQuestion string

    for (let i = 0; i < currentOptions.length; i++) { // this will run once for each item in the array
      const wordToAdd = currentOptions[i]; // pull a string out of the options array and store it inside wordToAdd
      $options.eq(i).text(wordToAdd); // find the button with the same index, and add the words as text
    }
  }

  generateQuestion();



  // level++;
  // how to increase level by one
  // console.log(sentences[level].correct);
  // document.getElementsByClass('sentences').innerHTML = sentences[0];
  function addLevel() {
    const numberOfLevel =
  $sentence.html(currentQuestion);
}


  $options.on('click', (event) => {
    // console.log('clicked');
    var usersChoice = event.target.textContent;
    // store the users choice inside a variable
    if (usersChoice === currentCorrect) {
      alert('Well done! Now translate the next word!');
      // how do I add a level in the displayLevel class AND
      generateQuestion();
    } else {
      alert('Sorry, try again');
    }

  });


  // function determineAnswer {
  //
  //
  //
  // const text = document.getElementsByClassName('sentences').innerHTML;
  // text();

  // .html sentences[level].question);

  // (sentences[level].options);

  //
  $options.on('click', () => {
    location.reload();
  }

  );
});
// i would probably have on object for sentences inside that object I´d have a sentence0, sentence1, sentence3, until sentence10. the key of those are the actual sentence in English, the key is the words that is the options like huevos and manzanas and something and the values are true, false and false. Make the button option display the key of the object 1 and make the div with the class sentences show the sentence.


//
// // In the DOM
// $(() => {
//
//   const $choices = $('.button.choices');
//
//
// // make a start again button and an event listener
// // const $reset = $('.button.reset');
