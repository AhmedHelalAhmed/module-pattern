import {
    assignEvent,
    $
} from './dom.js';
import {initialize, checkAnswer} from './quiz.js';
import domReady from './general-util.js';

const initQuiz = function () {
    assignEvent($('.fill-in-submit.btn-primary'), 'click', function () {
        initialize();
        checkAnswer($('#q01_ans')[0].value);
    });
};

/*
Setup
*/
domReady(function () {
    initQuiz();
});


