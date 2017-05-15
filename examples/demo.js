webpackJsonp([2],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_touchable__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_touchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_touchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* tslint:disable:no-console */



var style = '\n.active {\n  background: red;\n}\n.x {\n display:inline-block;\n width:100px;\n height:100px;\n border:1px solid yellow;\n}\n.x:active {\n  background: red;\n}\n';
var Test = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createClass({
    displayName: 'Test',
    componentWillMount: function componentWillMount() {
        window.log = this.log;
    },
    onPress: function onPress(e) {
        e.stopPropagation();
        console.log(e.type, e.target.id);
    },
    onLongPress: function onLongPress(e) {
        e.stopPropagation();
        console.log(e.type, e.target.id);
    },
    render: function render() {
        var _this = this;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: '20px' } }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { ref: "log", style: { height: 100, overflow: 'auto', margin: 10 } }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_rc_touchable___default.a, { onPress: this.onPress, onLongPress: this.onLongPress }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { id: "outer", style: {
                padding: 100,
                border: '1px solid red',
                boxSizing: 'border-box',
                WebkitUserSelect: 'none'
            } }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_rc_touchable___default.a, { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.onPress, onLongPress: this.onLongPress }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { id: "inner", style: {
                width: 100,
                height: 100,
                border: '1px solid red',
                boxSizing: 'border-box',
                WebkitUserSelect: 'none'
            } }, "click")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { tabIndex: 0, className: "x", onClick: function onClick() {
                _this.log('onClick');
            } }, "click"));
    }
});
__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ })

},[269]);
//# sourceMappingURL=demo.js.map