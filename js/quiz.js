import {breakOut} from './string.js'
import {
    $, data, addClass, removeClass,
} from './dom.js'

const checkAnswer = function (value) {
    let ans, correct, result;

    if (value !== "") {
        ans = breakOut(data($('#q01'), 'answer'), ",");
        correct = ans.every(function (val) {
            return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
        });
        result = (correct) ? 'correct' : 'incorrect';
        displayFeedback(result);
    } else {
        displayFeedback('no-answer');
    }
}

const displayFeedback = function (result) {
    const feedback = $('.feedback.' + result);
    addClass(feedback, 'visible');
}

const hideFeedback = function () {
    const feedback = $('.feedback.visible');
    removeClass(feedback, 'visible');
}
const initialize = function () {
    hideFeedback();
};


export {
    initialize, checkAnswer
}

