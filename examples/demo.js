webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcTouchable = __webpack_require__(2);
	
	var _rcTouchable2 = _interopRequireDefault(_rcTouchable);
	
	var _react = __webpack_require__(86);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(121);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var style = '\n.active {\n  background: red;\n}\n.x {\n display:inline-block;\n width:100px;\n height:100px;\n border:1px solid yellow;\n}\n.x:active {\n  background: red;\n}\n'; /* tslint:disable:no-console */
	
	var Test = _react2['default'].createClass({
	    displayName: 'Test',
	    componentWillMount: function componentWillMount() {
	        window.log = this.log;
	    },
	    onPress: function onPress(e) {
	        this.log('onPress', e);
	    },
	    onLongPress: function onLongPress(e) {
	        this.log('onLongPress', e);
	    },
	    log: function log(m) {
	        this.refs.log.innerHTML += '<p>' + m + ':' + Date.now() + '</p>';
	        this.refs.log.scrollTop = this.refs.log.scrollHeight;
	    },
	    render: function render() {
	        var _this = this;
	
	        return _react2['default'].createElement("div", { style: { margin: '20px' } }, _react2['default'].createElement("div", { ref: "log", style: { height: 100, overflow: 'auto', margin: 10 } }), _react2['default'].createElement("style", { dangerouslySetInnerHTML: { __html: style } }), _react2['default'].createElement(_rcTouchable2['default'], { activeStyle: { border: '1px solid yellow', padding: 5 }, activeClassName: "active", onPress: this.onPress, onLongPress: this.onLongPress }, _react2['default'].createElement("div", { style: {
	                width: 100,
	                height: 100,
	                border: '1px solid red',
	                boxSizing: 'border-box',
	                WebkitUserSelect: 'none'
	            } }, "click")), _react2['default'].createElement("br", null), _react2['default'].createElement("br", null), _react2['default'].createElement("div", { tabIndex: 0, className: "x", onClick: function onClick() {
	                _this.log('onClick');
	            } }, "click"));
	    }
	});
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=demo.js.map