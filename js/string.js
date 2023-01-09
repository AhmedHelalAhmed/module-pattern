var MAINAPP = (function (nsp) {

    // sub module
    var sub = nsp.string = nsp.string || {};
    var numChar = function (str, char) {
            //return (str.match(new RegExp(char, 'g')) || []).length;
            return (str.split(char).length - 1);
        },
        breakOut = function (str, delim) {
            var arr = str.split(delim);
            return arr.map(function (val) {
                return val.trim();
            });
        };

    sub.numChar = numChar;
    sub.breakOut = breakOut;
    return nsp;

})(MAINAPP || {});