var MAINAPP = (function (nsp) {

    // sub module
    var sub = nsp.quiz = nsp.quiz || {};

    // dependencies
    var dom = nsp.dom;
    var string = nsp.string;


    var checkAnswer = function (value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = string.breakOut(dom.data(dom.$('#q01'), 'answer'), ",");
                correct = ans.every(function (val) {
                    return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        displayFeedback = function (result) {
            var feedback = dom.$('.feedback.' + result);
            dom.addClass(feedback, 'visible');
        },
        hideFeedback = function () {
            var feedback = dom.$('.feedback.visible');
            dom.removeClass(feedback, 'visible');
        },
        initialize = function () {
            hideFeedback();
        };


    // public methods
    sub.initialize = initialize;
    sub.checkAnswer = checkAnswer;

    return nsp;

})(MAINAPP || {});