function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let questions = [
    {
        question : 'who wrote linux?',
        correctAnswer : 'Linus Torvalds',
        incorretTAnswers : [
            'Steve Jobs',
            'Samy Kamkar',
            'Alfred Linux'
        ]
    },
    {
        question : ' What made apple computers?',
        correctAnswer : 'Steve Jobs',
        incorretTAnswers : [
            'Bill Gates',
            'Samy Kamkar',
            'Alfred Linux'
        ]
    },
]

let i = 0;

function renderQuestion() {
    $('#question').text(questions[i].question);
    let ans = new Set(questions[i].incorretTAnswers);
    ans.add(questions[i].correctAnswer);
    $('#answers').empty();
    ans.forEach(a => $('#answers').append(`<p class='ans'>${a}</p>`));
}

$(document).on('click', '.ans', function(){
    if($(this).text() === questions[i].correctAnswer ) {
        console.log('Correct!')
    } else console.log('Incorrect!')
    i++;
    if (i > questions.length -1) {
        i=0;
    };
    renderQuestion()
})


renderQuestion()


