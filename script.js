// Questions sur HTML, CSS, et JavaScript
const questions = [
  // HTML
  {
    question: 'Que signifie HTML ?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlinks and Text Marking Language',
      'Home Tool Markup Language',
      'Hyper Tool Markup Language',
    ],
    answer: 0,
  },
  {
    question: 'Quel élément HTML est utilisé pour insérer une image ?',
    options: ['<img>', '<image>', '<picture>', '<photo>'],
    answer: 0,
  },
  {
    question: "Quel élément HTML représente le titre principal d'une page ?",
    options: ['<h1>', '<title>', '<head>', '<header>'],
    answer: 0,
  },
  {
    question: 'Quelle balise est utilisée pour créer un lien hypertexte ?',
    options: ['<link>', '<a>', '<href>', '<url>'],
    answer: 1,
  },
  // CSS
  {
    question: 'Que signifie CSS ?',
    options: [
      'Cascading Style Sheets',
      'Creative Style System',
      'Cascading Script Sheets',
      'Custom Style Sheets',
    ],
    answer: 0,
  },
  {
    question:
      'Quelle propriété CSS est utilisée pour changer la couleur de fond ?',
    options: ['background-color', 'color', 'bg-color', 'back-color'],
    answer: 0,
  },
  {
    question:
      "Quel sélecteur CSS est utilisé pour cibler un élément avec l'ID 'header' ?",
    options: ['#header', '.header', 'header', '*header'],
    answer: 0,
  },
  {
    question:
      'Quelle unité est relative à la taille de la police par défaut du navigateur ?',
    options: ['px', 'em', 'rem', '%'],
    answer: 1,
  },
  // JavaScript
  {
    question: 'Comment affiche-t-on un message dans la console en JavaScript ?',
    options: ['print()', 'console.log()', 'alert()', 'write()'],
    answer: 1,
  },
  {
    question:
      'Quelle méthode est utilisée pour sélectionner un élément par son ID en JavaScript ?',
    options: [
      'getElementByTagName()',
      'getElementById()',
      'querySelector()',
      'getElementsByClassName()',
    ],
    answer: 1,
  },
  {
    question: "Quel est le résultat de 2 + '2' en JavaScript ?",
    options: ['4', "'22'", 'NaN', 'Erreur'],
    answer: 1,
  },
  {
    question:
      'Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?',
    options: ['var', 'let', 'const', 'Toutes les réponses'],
    answer: 3,
  },
];

// Références au DOM
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');

// Générer les questions dynamiquement
function generateQuiz() {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');

    // Styliser la question
    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionText.className = 'quiz-question'; // Ajout de la classe
    questionDiv.appendChild(questionText);

    const optionsList = document.createElement('ul');

    q.options.forEach((option, i) => {
      const optionItem = document.createElement('li');

      const radioInput = document.createElement('input');
      radioInput.type = 'radio';
      radioInput.name = `question-${index}`;
      radioInput.value = i;
      radioInput.id = `q${index}-o${i}`;

      const label = document.createElement('label');
      label.htmlFor = `q${index}-o${i}`;
      label.textContent = option;
      label.className = 'quiz-option'; // Ajout de la classe

      optionItem.appendChild(radioInput);
      optionItem.appendChild(label);
      optionsList.appendChild(optionItem);
    });

    questionDiv.appendChild(optionsList);
    quizContainer.appendChild(questionDiv);
  });

  // Ajouter le bouton de soumission avec classe
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Soumettre';
  submitButton.className = 'form-btn'; // Classe pour le design
  submitButton.addEventListener('click', submitQuiz);
  quizContainer.appendChild(submitButton);
}

// Calculer le score et afficher les résultats
function submitQuiz() {
  let score = 0;
  const results = [];

  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (selectedOption && parseInt(selectedOption.value) === q.answer) {
      score++;
      results.push(`Question ${index + 1}: Correct`);
    } else {
      results.push(`Question ${index + 1}: Faux`);
    }
  });

  // Afficher les résultats
  resultContainer.innerHTML = `
        <p>Votre score : ${score} / ${questions.length}</p>
        <ul>${results.map((r) => `<li>${r}</li>`).join('')}</ul>
    `;
}

// Initialiser le quiz
generateQuiz();
