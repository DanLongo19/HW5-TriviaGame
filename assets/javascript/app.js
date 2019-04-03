$('#start').on('click', function(){
    game.start();
})

$(document).on('click','#end', function(){
    game.done();
})

var questions = [{
    question: "What is the highest grossing film of all time?",
    answers: ['Titanic', 'Avatar', 'Star Wars', 'Gone With the Wind'],
    correctAnswer: 'Gone With the Wind'
}, {
    question: "What is the most watch TV show of all time?",
    answers: ['The Sopranos', 'MASH', 'Breaking Bad', 'Seinfeld'],
    correctAnswer: 'MASH'
}, {
    question: "What is the most popular sport if the world",
    answers: ['Soccer', 'Football', 'Cricket', 'Basketball'],
    correctAnswer: 'Soccer'
}, {
    question: "What is the largest freshwater lake in the world?",
    answers: ['Lake Michigan', 'Lake Victoria', 'Lake Superior', 'Lake Nicaragua'],
    correctAnswer: 'Lake Superior'
}, {
    question: "What is the worlds largest island?",
    answers: ['Greenland', 'Japan', 'Madagascar', 'Great Britain'],
    correctAnswer: 'Greeland'
}, {
    question: "What is the largest country in the world in terms of land mass?",
    answers: ['India', 'Australia', 'China', 'Russia'],
    correctAnswer: 'Russia'
}, {
    question: "Who is the highest grossing band or musical artist of all time?",
    answers: ['The Beatles', 'Garth Brooks', 'Elvis Pressley', 'The Rolling Stones'],
    correctAnswer: 'The Beatles'
}, {
    question: "What is the only man made object on earth that is visible from the moon?",
    answers: ['The Empire State Building', 'Stonehenge', 'The Pyramids of Giza', 'The Great Wall of China'],
    correctAnswer: 'The Great Wall of China'
}],

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter); 
        if(game.counter==0){
        // note - or <=0
        console.log('time is up');
        game.over();    
        }
    },
    
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#game-main').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').on('click', function(){
            $('#start').remove();
            for(var i=0;i<questions.length; i++){
                $('#game-main').append('<h2>'+questions[i].question+ '</h2>');
                for(var j=0;j<questions[i].answers.length; j++){
                $('#game-main').append("<input type='radio' name='question-" +i+"' value= '"+questions[i].answers[j]+" '>"+questions[i].answers[j]);
                }
            }
            $('#game-main').append('<br><button id="end">Finish</button>');
        },
    
    done: function(){
        $.each($('input[name="question-0]":checked'),function(){
            if ($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }),
    }

    done: function(){
        $.each($('input[name="question-1]":checked'),function(){
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                 game.incorrect++;
                }
            }),
        }

    done: function(){
        $.each($('input[name="question-2]":checked'),function(){
             if ($(this).val()==questions[2].correctAnswer){
                 game.correct++;
            } else {
                game.incorrect++;
                    }
                }),
        }

    done: function(){
        $.each($('input[name="question-3]":checked'),function(){
            if ($(this).val()==questions[4].correctAnswer){
                 game.correct++;
            } else {
                 game.incorrect++;
                    }
                }),
        }

    done: function(){
        $.each($('input[name="question-4]":checked'),function(){
            if ($(this).val()==questions[4].correctAnswer){
                 game.correct++;
            } else {
                 game.incorrect++;
                    }
                }),
            }

    done: function(){
        $.each($('input[name="question-5]":checked'),function(){
            if ($(this).val()==questions[5].correctAnswer){
                 game.correct++;
            } else {
                 game.incorrect++;
                }
            }),
        }

    done: function(){
        $.each($('input[name="question-6]":checked'),function(){
            if ($(this).val()==questions[6].correctAnswer){
                  game.correct++;
            } else {
                  game.incorrect++;
                }
            }),
        }

    done: function(){
        $.each($('input[name="question-7]":checked'),function(){
            if ($(this).val()==questions[7].correctAnswer){
                    game.correct++;
            } else {
                    game.incorrect++;
                }
            }),
    
    this.result();
        },
    
    result: function(){
        clearInterval(timer);
        $('#game-main h2').remove;

        $('#game-main').html("<h2>Time's Up!</h2>");
        $('#game-main').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#game-main').append("<h3>Incorrect Answers: "+this.Incorrect+"</h3>");
        $('#game-main').append("<h3>Unanswered: ")+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}
