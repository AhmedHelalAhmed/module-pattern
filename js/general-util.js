import {doc} from "./dom.js";

const domReady = function (funct) {
    doc.addEventListener('DOMContentLoaded', function () {
        if (typeof funct === "function") {
            funct();
        }
    }, false);
};

export {domReady as default};