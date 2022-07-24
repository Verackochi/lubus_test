$(function () {


    $('.paslaugos').on('click', function () {
        $('.paslaugos__list').addClass('.--paslaugos__list-active');
    });

    $('.paslaugos').on('click', function () {
        $('.paslaugos__list').removeClass('.--paslaugos__list-active');
    });

});

/*quiz*/
const DATA = [{
        question: 'слайд 1',
        answers: [

            {
                id: '1',
                value: 'модель 1',
                correct: true,
            },
            {
                id: '2',
                value: 'модель 2',
                correct: true,
            },
            {
                id: '3',
                value: 'модель 3',
                correct: true,
            },
            {
                id: '4',
                value: 'модель 4',
                correct: true,
            },
        ]
    },
    {
        question: 'слайд 2',
        answers: [

            {
                id: '5',
                value: 'модель 5',
                correct: true,
            },
            {
                id: '5',
                value: 'модель 5',
                correct: true,
            },
            {
                id: '6',
                value: 'модель 6',
                correct: true,
            },
            {
                id: '7',
                value: 'модель 7',
                correct: true,
            },
        ]
    }
];




const quizJs = document.getElementById('quizJs');
const qustionsJs = document.getElementById('qustionsJs');
const indicatorJs = document.getElementById('indicatorJs');
const resultJs = document.getElementById('resultJs');
const btnNextJs = document.getElementById('btnNextJs');
const btnRestartJs = document.getElementById('btnRestartJs');

const renderQuestions = () => {
    qustionsJs.innerHTML = ' <
        div class = "qustions__item" >
        <
        div class = "qustions__item-qustion" > лот 1 < /div> <
    ul class = "qustions__item-answer answer flex --just-space" >
        <
        li class = "answer__item" >
        <
        label >
        <
        img src = ""
    alt = "lot"
    class = "answer__item-image" >
        <
        input type = "radio"
    name = "q1" >
        <
        input type = "text"
    name = "q"
    id = "" >
        <
        /label> < /
        li > <
        li class = "answer__item" >
        <
        label >
        <
        img src = ""
    alt = "lot"
    class = "answer__item-image" >
        <
        input type = "radio"
    name = "q1" >
        <
        input type = "text"
    name = "q"
    id = "" >
        <
        /label> < /
        li > <
        li class = "answer__item" >
        <
        label >
        <
        img src = ""
    alt = "lot"
    class = "answer__item-image" >
        <
        input type = "radio"
    name = "q1" >
        <
        input type = "text"
    name = "q"
    id = "" >
        <
        /label> < /
        li > <
        li class = "answer__item" >
        <
        label >
        <
        img src = ""
    alt = "lot"
    class = "answer__item-image" >
        <
        input type = "radio"
    name = "q1" >
        <
        input type = "text"
    name = "q"
    id = "" >
        <
        /label> < /
        li > <
        li class = "answer__item" >
        <
        label >
        <
        img src = ""
    alt = "lot"
    class = "answer__item-image" >
        <
        input type = "radio"
    name = "q1" >
        <
        input type = "text"
    name = "q"
    id = "" >
        <
        /label> < /
        li > <
        /ul> < /
        div >
        '
};
const renderResults = () => {};
const renderIndicator = () => {};

quizJs.addEventListener('change', (event) => {
    //логика ответ
})

quizJs.addEventListener('click', (event) => {
    //вперед или сначала
})