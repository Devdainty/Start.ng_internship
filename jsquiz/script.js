const quiz = [
  {
    id: 1,
    question: " Which country in Africa can also be found inside another country?",
    options: ['Angola', 'swaziland', 'Lesotho'],
    answer: 'Lesotho'
  },
  {
    id: 2,
    question: "Who captained Chelsea in their victory against FC Bayern? ",
    options: ['Drogba', 'Cech','Lampard'],
    answer: 'Lampard'
  },
  {
    id: 3,
    question: " Who is the most educated President in the whole world?",
    options: ['R.Mugabe', 'V.Putin', 'B.Obama'],
    answer: 'R.Mugabe'
  },
  {
    id: 4,
    question: "The first country to lift the world cup?",
    options: [ 'Uruguay', 'France', 'Brazil'],
    answer: 'Uruguay'
  },
  {
    id: 5,
    question: "When was the first world cup hosted?",
    options: ['1946', '1930', '1942'],
    answer: '1930'
  }
]
let count = 0;
let score = 0;
let rate = 0;


if (count === 0) {
  document.querySelector('#incipere').style.display = 'block';
  document.querySelector('.Button').style.display = 'none';
} else {
  document.querySelector('#incipere').style.display = 'none';
  document.querySelector('.Button').style.display = 'block';
}


const clickMe = () => {
  const question = document.querySelector('#question_box');
  const options = document.querySelector('.optionz');


  document.querySelector('#show_answer').style.display = 'none';
  document.querySelector('#incipere').style.display = 'none';
  document.querySelector('.Button').style.display = 'block';
  document.querySelector('#show_next').style.display = 'block';
  document.querySelector('.plus').style.display = 'block';

  count++;
  rate++;

  document.querySelector('#question_count').innerHTML = `Question: ${count} of ${quiz.length} `;


  options.innerHTML = '';
  for (let i = 0; i < quiz.length; i++) {
    if (count === quiz[i].id) {
      questions.innerHTML = `${quiz[i].id}.)  ${quiz[i].question}</li> `;

      if (count === quiz[i].id) {
        quiz[i].options.forEach(optionz => {
          const createList = document.createElement('li');
          const createLabel = document.createElement('label')
          const createRadio = document.createElement('input')

          createRadio.setAttribute('type', 'radio');
          createRadio.setAttribute('value', optionz);
          createRadio.setAttribute('name', 'answer');
          createLabel.setAttribute('for', optionz);
          createRadio.setAttribute('id', optionz);
          createRadio.setAttribute('onClick', 'selectAnswer(event)');
          createLabel.appendChild(createRadio);
          createLabel.append(optionz)
          createList.appendChild(createLabel);

          options.appendChild(createList)
        })
      }
    }
  }
  if (count == quiz.length) {
    document.querySelector('#show_next').style.display = 'none';
    count = quiz.length;
  }


}
function show_result() {
  show_answer.innerHTML = 'Thanks for particpating, you scored ' + score;
  count = 0;
  rate = 0;
  score = 0;
  document.querySelector('#show_answer').style.display = 'block';
  document.querySelector('#incipere').style.display = 'block';
  document.querySelector('.Button').style.display = 'none';
  document.querySelector('.plus').style.display = 'none';
}
const selectAnswer = event => {
  if (event.target.value === quiz[rate - 1].answer) {
    score++
  } else {
    score = score;
  }

  quiz.forEach(test => {
    if (count === test.id) {
      const allInput = document.querySelectorAll('input');
      for (let i = 0; i < allInput.length; i++) {
        if (allInput[i].value === test.answer) {
          allInput[i].setAttribute('disabled', 'true');
          const parent = allInput[i].parentNode;
          parent.classList.add('correct');
        } else {
          allInput[i].setAttribute('disabled', 'true');
          const parent = allInput[i].parentNode;
          parent.classList.add('wrong');
        }
      }

    }
  })


}
