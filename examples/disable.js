webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267);


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcTouchable = __webpack_require__(2);
	
	var _rcTouchable2 = _interopRequireDefault(_rcTouchable);
	
	var _react = __webpack_require__(86);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(121);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var style = '\n.foo-button {\n  display: inline-block;\n  width: 200px;\n  height: 100px;\n  border: 1px solid #ccc;\n  color: blue;\n}\n.foo-button.disabled {\n  background-color: black;\n}\n'; /* tslint:disable:no-console */
	
	var Test = _react2['default'].createClass({
	    displayName: 'Test',
	    getInitialState: function getInitialState() {
	        return {
	            value: 1,
	            max: 3,
	            min: 1
	        };
	    },
	    onPress: function onPress(e) {
	        console.log('onPress', e);
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
	    render: function render() {
	        var _state = this.state,
	            value = _state.value,
	            min = _state.min,
	            max = _state.max;
	
	        return _react2['default'].createElement("div", { style: { margin: '20px' } }, _react2['default'].createElement("style", { dangerouslySetInnerHTML: { __html: style } }), _react2['default'].createElement(_rcTouchable2['default'], { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.onPress, onLongPress: this.onLongPress, disabled: value === min }, _react2['default'].createElement("a", { className: 'foo-button ' + (value === min ? 'disabled' : ''), onClick: value === min ? undefined : this.prev, role: "button" }, "prev page")), _react2['default'].createElement("div", null, "Now page: ", value, " "), _react2['default'].createElement(_rcTouchable2['default'], { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.onPress, onLongPress: this.onLongPress, disabled: value === max }, _react2['default'].createElement("a", { className: 'foo-button ' + (value === max ? 'disabled' : ''), onClick: value === max ? undefined : this.next, role: "button" }, "next page")));
	    }
	});
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=disable.js.map