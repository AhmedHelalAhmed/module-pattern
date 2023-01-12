import {numChar} from './string.js'

const doc = document;
const $ = function (domElement) {
    if (!singleSelector(domElement)) {
        try {
            return doc.querySelectorAll(domElement);
        } catch (e) {
            console.log(e);
        }
    } else {
        if (domElement.indexOf('#') === 0) {
            try {
                return [(doc.getElementById(domElement.substring(1, domElement.length)))];
            } catch (e) {
                console.log(e);
            }
        } else if (domElement.indexOf('.') === 0) {
            try {
                return doc.getElementsByClassName(domElement.substring(1, domElement.length));
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                return doc.getElementsByTagName(domElement);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
const singleSelector = function (str) {
    let arr;

    arr = str.split(" ");
    if (arr.length === 1 && numChar(str, "#") <= 1 && numChar(str, ".") <= 1) {
        return true;
    } else {
        return false;
    }
}
const assignEvent = function (de, event, funct) {
    //use for loop since node list is not an array
    try {
        for (let i = 0; i < de.length; i++) {
            de[i].addEventListener(event, funct);
        }
    } catch (e) {
        console.log(e);
    }

}
const data = function (de, term) {
    const arr = [];
    if (de.length > 1) {
        for (let i = 0; i < de.length; i++) {
            arr[i] = de[i].getAttribute('data-' + term);
        }
    } else {
        return de[0].getAttribute('data-' + term);
    }
}
const addClass = function (de, cls) {
    for (let i = 0; i < de.length; i++) {
        if (de[i].classList) {
            de[i].classList.add(cls);
        } else {
            de[i].className += ' ' + cls;
        }
    }
}
const removeClass = function (de, cls) {
    for (let i = 0; i < de.length; i++) {
        if (de[i].classList) {
            de[i].classList.remove(cls);
        } else {
            de[i].className.replace(/\bcls\b/, '');
        }
    }
};


export {
    $,
    assignEvent,
    data,
    addClass,
    removeClass,
    doc
}