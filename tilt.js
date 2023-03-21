"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
function tiltOnMouseEnter(elementId, opt) {
    var _a, _b, _c, _d, _e, _f;
    var htmlElement = document.querySelector("#".concat(elementId));
    var options = {
        perspective: (_a = opt === null || opt === void 0 ? void 0 : opt.perspective) !== null && _a !== void 0 ? _a : 1000,
        scale: (_b = opt === null || opt === void 0 ? void 0 : opt.scale) !== null && _b !== void 0 ? _b : 1,
        maxTiltX: (opt === null || opt === void 0 ? void 0 : opt.xNegative) ? -((_c = opt === null || opt === void 0 ? void 0 : opt.maxTiltX) !== null && _c !== void 0 ? _c : 30) : ((_d = opt === null || opt === void 0 ? void 0 : opt.maxTiltX) !== null && _d !== void 0 ? _d : 30),
        maxTiltY: (opt === null || opt === void 0 ? void 0 : opt.yNegative) ? ((_e = opt === null || opt === void 0 ? void 0 : opt.maxTiltY) !== null && _e !== void 0 ? _e : 30) : -((_f = opt === null || opt === void 0 ? void 0 : opt.maxTiltY) !== null && _f !== void 0 ? _f : 30),
    };
    htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.addEventListener("mousemove", function (event) {
        var elementWidth = htmlElement.offsetWidth;
        var elementHeight = htmlElement.offsetHeight;
        var centerX = htmlElement.offsetLeft + elementWidth / 2;
        var centerY = htmlElement.offsetTop + elementHeight / 2;
        var mousePosX = event.clientX - centerX;
        var mousePosY = event.clientY - centerY;
        var rotateX = options.maxTiltX * mousePosY / (elementHeight / 2);
        var rotateY = options.maxTiltY * mousePosX / (elementWidth / 2);
        var perspective = options.perspective ? options.perspective : 1000;
        gsap_1.gsap.set(htmlElement, { transformPerspective: perspective });
        gsap_1.gsap.to(htmlElement, { rotateY: rotateY, rotateX: rotateX, scale: options.scale, duration: 0.2 });
        /*  htmlElement.style.transform = `
           perspective(${perspective}px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           scale(${options.scale ? options.scale : 1})
         ` */
    });
    htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.addEventListener("mouseleave", function () {
        gsap_1.gsap.to(htmlElement, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.2 });
    });
}
