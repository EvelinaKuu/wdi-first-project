$(() => {
  const $sentence = $('.sentence');
  const $options = $('.option'); // array of DOM elements (buttons)
  const $displayLevel = $('.displayLevel');
  const $startAgain = $('.startAgain');
  const $feedback = $('.feedback');
  const $popup = $('.popup');
  const $fromWinStartAgain = $('.fromWinStartAgain');
  const $instructionWindow = $('.instructionWindow');
  const $spanish = $('#spanish');
  const $norwegian = $('#norwegian');
  const $swedish = $('#swedish');
  const $randomLanguages = $('#randomLanguages');
  const spanishQuestions = [
    {
      question: 'Daniela will take the <span class="wordToTranslate"> bus </span> to work.',
      options: ['la bicileta', 'el tren', 'el autobus'],
      correct: 'el autobus'
    },
    {
      question: 'Mateo would like to have <span class="wordToTranslate"> eggs </span> for breakfast.',
      options: ['manzanas', 'huevos', 'piña'],
      correct: 'huevos'
    },
    {
      question: 'Juan would like to have <span class="wordToTranslate"> chicken </span> for dinner.',
      options: ['paella', 'pollo', 'gazpacho'],
      correct: 'pollo'
    },
    {
      question: 'Carmen likes <span class="wordToTranslate"> bread</span>.',
      options: ['pescado', 'yogur', 'pan'],
      correct: 'pan'
    },
    {
      question: 'Isabella is having <span class="wordToTranslate"> ice cream </span> for dessert.',
      options: ['helado', 'tarta', 'postre'],
      correct: 'helado'
    },
    {
      question: 'Maria got the <span class="wordToTranslate"> cat </span> when she was living in Spain.',
      options: ['el perro', 'la ardilla', 'el gato'],
      correct: 'el gato'
    },
    {
      question: 'Carlos always wanted to visit <span class="wordToTranslate"> Germany </span>.',
      options: ['Alemania', 'Francia', 'Dinamarca'],
      correct: 'Alemania'
    },
    {
      question: 'Esteban is walking to the <span class="wordToTranslate"> school</span>.',
      options: ['la librería', 'la escuela', 'el estadio'],
      correct: 'la escuela'
    },
    {
      question: 'Ignacio has three <span class="wordToTranslate"> sisters </span> and one brother.',
      options: ['hermanos', 'abuelas', 'hermanas'],
      correct: 'hermanas'
    },
    {
      question: 'Isabella is studying to be a  <span class="wordToTranslate"> chef </span>.',
      options: ['enfermera', 'cocinero', 'piloto'],
      correct: 'cocinero'
    },
    {
      question: 'Ana takes <span class="wordToTranslate"> swimming </span> classes.',
      options: ['de buceo', 'de pintura', 'la natación'],
      correct: 'la natación'
    }
  ];
  const norwegianQuestions = [
    {
      question: 'Anna is buying new <span class="wordToTranslate"> shoes </span>.',
      options: ['bukser', 'sokker', 'sko'],
      correct: 'sokker'
    },
    {
      question: 'Håkon goes <span class="wordToTranslate"> diving </span> in the summer time.',
      options: ['dykking', 'seiling', 'fisker'],
      correct: 'dykking'
    },
    {
      question: 'Anita has <span class="wordToTranslate"> porridge </span> for breakfast.',
      options: ['grøt', 'egg', 'frukt'],
      correct: 'grøt'
    },
    {
      question: 'Alf will take the <span class="wordToTranslate"> car </span> to work.',
      options: ['bilen', 'toget', 'sykkelen'],
      correct: 'bilen'
    },
    {
      question: 'Britt is studying to be a <span class="wordToTranslate"> nurse </span> .',
      options: ['doktor', 'pilot', 'sykepleier'],
      correct: 'sykepleier'
    },
    {
      question: 'Knut got the <span class="wordToTranslate"> snake </span> when she was living in Trondheim.',
      options: ['slangen', 'hesten', 'kaninen'],
      correct: 'slangen'
    },
    {
      question: 'Barbro always wanted to do <span class="wordToTranslate"> gardening </span>.',
      options: ['hagearbeid', 'håndverk', 'sport'],
      correct: 'hagearbeid'
    },
    {
      question: 'Magnus is going to the <span class="wordToTranslate"> office </span>.',
      options: ['sykehuset', 'kontoret', 'flyplassen'],
      correct: 'kontoret'
    },
    {
      question: 'Bodil has three <span class="wordToTranslate"> aunts </span> and one uncle.',
      options: ['fiender', 'tanter', 'søstre'],
      correct: 'tanter'
    },
    {
      question: 'Camilla will travel to visit her  <span class="wordToTranslate"> grandmother  </span>.',
      options: ['kjæresten', 'sjefen', 'bestemor'],
      correct: 'bestemor'
    },
    {
      question: 'Berit will study to be a <span class="wordToTranslate"> plumber </span> in fall.',
      options: ['frisør', 'lege', 'rørlegger'],
      correct: 'rørlegger'
    }
  ];
  const swedishQuestions = [
    {
      question: 'Gunnar will take the <span class="wordToTranslate"> bus </span> to work.',
      options: ['bussen', 'tåget', 'cykeln'],
      correct: 'bussen'
    },
    {
      question: 'Ellen likes <span class="wordToTranslate"> strawberries </span> and blueberries.',
      options: ['hjortron', 'jordgubbar', 'hallon'],
      correct: 'jordgubbar'
    },
    {
      question: 'Barbro always wanted to visit <span class="wordToTranslate"> Germany </span>.',
      options: ['Danmark', 'Tyskland', 'Finland'],
      correct: 'Tyskland'            },
    {
      question: 'For <span class="wordToTranslate"> dinner </span> the Lindströms are having pasta.',
      options: ['middag', 'lunch', 'fika'],
      correct: 'middag'
    },
    {
      question: 'Christoffer got the <span class="wordToTranslate"> bird </span> when she was living in Malmö.',
      options: ['musen', 'hunden', 'fågeln'],
      correct: 'fågeln'
    },
    {
      question: 'Elin is having <span class="wordToTranslate"> ice cream </span> for dessert.',
      options: ['glass', 'tårta', 'kaka'],
      correct: 'glass'
    },
    {
      question: 'Malin is going to the <span class="wordToTranslate"> airport </span>.',
      options: ['flygplatsen', 'biblioteket', 'simhallen'],
      correct: 'flygplatsen'
    },
    {
      question: 'Filip has three <span class="wordToTranslate"> uncles </span> and one brother.',
      options: ['morbröder', 'kusiner', 'bröder'],
      correct: 'morbröder'
    },
    {
      question: 'Åsa will travel to the  <span class="wordToTranslate"> city </span>.',
      options: ['staden', 'havet', 'stugan'],
      correct: 'staden'
    },
    {
      question: 'Karl takes <span class="wordToTranslate"> self defence </span> classes.',
      options: ['självförsvar', 'fotografering', 'målning'],
      correct: 'självförsvar'
    },
    {
      question: 'Ingrid will study to be a <span class="wordToTranslate"> chef </span> in fall.',
      options: ['servitris', 'kock', 'chef'],
      correct: 'kock'
    }
  ];

  let level = 0;
  let currentLevel = null;
  let currentCorrect = null;
  let questionsArray = null;



  $instructionWindow.show();

  $spanish.on('click', () => {

    // console.log('clicked');
    // var usersChoiceOfLanguage = event.target.textContent;
    // // store the users choice inside a variable
    // if (usersChoiceOfLanguage === $spanish) {
    questionsArray = spanishQuestions;
    $instructionWindow.hide();
    generateQuestion();
  });

  $norwegian.on('click', () => {
    // if (usersChoiceOfLanguage === $norwegian) {
    questionsArray = norwegianQuestions;

    $instructionWindow.hide();
    generateQuestion();
  });

  $swedish.on('click', () => {
  // if (usersChoiceOfLanguage === $swedish) {
    questionsArray = swedishQuestions;
    $instructionWindow.hide();
    generateQuestion();
  });

  $randomLanguages.on('click', () => {
    questionsArray = [];
    const allQuestions = spanishQuestions.concat(swedishQuestions).concat(norwegianQuestions);
    for (let i = 0; i < 11; i++) {
      questionsArray.push(allQuestions.splice(Math.floor(Math.random() * allQuestions.length),1)[0]);
    }


    $instructionWindow.hide();
    generateQuestion();
  });

  $displayLevel.html(level);

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






  // level++;
  // how to increase level by one
  // console.log(sentences[level].correct);
  // document.getElementsByClass('sentences').innerHTML = sentences[0];


  $options.on('click', (event) => {
    // console.log('clicked');
    var usersChoice = event.target.textContent;
    // store the users choice inside a variable
    if (usersChoice === currentCorrect) {
      $feedback.hide();
      $feedback.html('Well done! Now translate the next word!');
      //$feedback.delay(2000).fadeOut();
      $feedback.fadeIn(function(){
        $feedback.delay(1900).fadeOut();
      });
      level++;
      // same as level = level + 1
      $displayLevel.html(level);
      if (level === 10) {
        $popup.show();
        // $popup.delay(20000).fadeIn();
        $fromWinStartAgain.on('click', () => {
          level = 0;
          // storing the value of 0 into the variable level
          $displayLevel.html('0');
          generateQuestion();
          // and then call for the function again and now when I first told the level to be 0 it will start with the first question
        });
      }
      generateQuestion();

      // alert('Well done! Now translate the next word!');
      // WHY ISN'T IT WORKING?!?!?
      // $feedback.html('Well done! Now translate the next one!');
      // $feedback.delay(2000).fadeOut();
    } else {
      $feedback.hide();
      $feedback.html('Sorry, try again');
      //$feedback.delay(2000).fadeOut();
      $feedback.fadeIn(function(){
        $feedback.delay(1000).fadeOut();
      });
    }
  });


  $startAgain.on('click', () => {
    level = 0;
    // storing the value of 0 into the variable level
    $displayLevel.html('0');
    generateQuestion();
    // and then call for the function again and now when I first told the level to be 0 it will start with the first question
  });

});
