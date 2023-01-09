var MAINAPP = (function (nsp) {

    /*
    DOM Functionality
    */
    var dom = nsp.dom;

    /*
    Other Utilities
    */

    var domReady = function (funct) {
        dom.doc.addEventListener('DOMContentLoaded', function () {
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    /*
    Quiz Functionality
    */
    var quiz = nsp.quiz;

    var initQuiz = function () {
        dom.assignEvent(dom.$('.fill-in-submit.btn-primary'), 'click', function () {
            quiz.initialize();
            quiz.checkAnswer(dom.$('#q01_ans')[0].value);
        });
    };


    /*
    Setup
    */
    domReady(function () {
        initQuiz();
    });

    return nsp;

})(MAINAPP || {});