webpackJsonp([1],{

/***/ 123:
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



var style = '\n.foo-button {\n  display: inline-block;\n  width: 200px;\n  height: 100px;\n  border: 1px solid #ccc;\n  color: blue;\n}\n.foo-button.disabled {\n  background-color: black;\n}\n';
var Test = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createClass({
    displayName: 'Test',
    getInitialState: function getInitialState() {
        return {
            value: 1,
            max: 3,
            min: 1
        };
    },
    onPressPrev: function onPressPrev(e) {
        console.log('onPressPrev', e);
        this.prev();
    },
    onPressNext: function onPressNext(e) {
        console.log('onPressNext', e);
        this.next();
    },
    onLongPress: function onLongPress(e) {
        console.log('onLongPress', e);
    },
    prev: function prev() {
        this.setState({
            value: this.state.value - 1
        });
    },
    next: function next() {
        this.setState({
            value: this.state.value + 1
        });
    },
    handlePressOuterPrev: function handlePressOuterPrev() {
        console.log('handlePressOuterPrev');
    },
    handlePressOuterNext: function handlePressOuterNext() {
        console.log('handlePressOuterNext');
    },
    render: function render() {
        var _state = this.state,
            value = _state.value,
            min = _state.min,
            max = _state.max;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { style: { margin: '20px' } }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: style } }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_rc_touchable___default.a, { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.handlePressOuterPrev, disabled: value === min }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { className: 'foo-button ' + (value === min ? 'disabled' : ''), role: "button", onClick: value === min ? undefined : this.onPressPrev }, "prev page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, "Now page: ", value, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_rc_touchable___default.a, { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.handlePressOuterNext, disabled: value === max }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { className: 'foo-button ' + (value === max ? 'disabled' : ''), role: "button", onClick: value === max ? undefined : this.onPressNext }, "next page")));
    }
});
__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ })

},[269]);
//# sourceMappingURL=disable-inner.js.map