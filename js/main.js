import {
    doc,
    assignEvent,
    $
} from './dom.js';
import {initialize, checkAnswer} from './quiz.js'


const domReady = function (funct) {
    doc.addEventListener('DOMContentLoaded', function () {
        if (typeof funct === "function") {
            funct();
        }
    }, false);
};


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


