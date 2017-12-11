// alert('loaded JS');


$(() => {
  const $sentence = $('.sentence');
  const $options = $('.option'); // array of DOM elements (buttons)
  const $displayLevel = $('.displayLevel');
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


  $options.on('click', (event) => {
    // console.log('clicked');
    var usersChoice = event.target.textContent;
    // store the users choice inside a variable
    if (usersChoice === currentCorrect) {
      // alert('Well done! Now translate the next word!');
      // instead of pop up put it somewhere else
      $('.feedback').html('Well done! Now translate the next one!');
      $('.feedback').delay(2000).fadeOut();

      level++;
      // same as level = level + 1
      $displayLevel.html(level);
      generateQuestion();
    } else {
      // alert('Sorry, try again');
      $('.feedback').html('Sorry, try again');
      $('.feedback').delay(2000).fadeOut();
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
  $startAgain.on('click', () => {
    level = 0;
    // storing the value of 0 into the variable level
    $displayLevel.html('0');

    generateQuestion();
    // and then call for the function again and now when I first told the level to be 0 it will start with the first question
  }

  );
});

//
// // In the DOM
// $(() => {
//
//   const $choices = $('.button.choices');
//
//
// // make a start again button and an event listener
// // const $reset = $('.button.reset');
