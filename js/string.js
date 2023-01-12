const numChar = function (str, char) {
    //return (str.match(new RegExp(char, 'g')) || []).length;
    return (str.split(char).length - 1);
}
const breakOut = function (str, delim) {
    const arr = str.split(delim);
    return arr.map(function (val) {
        return val.trim();
    });
};

export {numChar, breakOut}