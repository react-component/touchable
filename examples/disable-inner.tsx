/* tslint:disable:no-console */

import Touchable from 'rc-touchable';
import React from 'react';
import ReactDOM from 'react-dom';
const style = `
.foo-button {
  display: inline-block;
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  color: blue;
}
.foo-button.disabled {
  background-color: black;
}
`;

const Test = React.createClass({
  getInitialState() {
    return {
      value: 1,
      max: 3,
      min: 1,
    };
  },
  onPressPrev(e) {
    console.log('onPressPrev', e);
    this.prev();
  },

  onPressNext(e) {
    console.log('onPressNext', e);
    this.next();
  },

  onLongPress(e) {
    console.log('onLongPress', e);
  },
  prev() {
    this.setState({
      value: this.state.value - 1,
    });
  },
  next() {
    this.setState({
      value: this.state.value + 1,
    });
  },
  handlePressOuterPrev() {
    console.log('handlePressOuterPrev');
  },
  handlePressOuterNext() {
    console.log('handlePressOuterNext');
  },
  render() {
    const { value, min, max } = this.state;
    return (
      <div style={{margin: '20px'}}>
        <style dangerouslySetInnerHTML={{__html: style}}/>
        <Touchable
          activeStyle={{border: '1px solid yellow', padding: 5}}
          activeClassName="active"
          onPress={this.handlePressOuterPrev}
          disabled={value === min}
        >
          <button
            className={`foo-button ${value === min ? 'disabled' : ''}`}
            role="button"
            onClick={value === min ? undefined : this.onPressPrev}
          >
              prev page
          </button>
        </Touchable>
        <div>Now page: {value} </div>
        <Touchable
          activeStyle={{border: '1px solid yellow', padding: 5}}
          activeClassName="active"
          onPress={this.handlePressOuterNext}
          disabled={value === max}
        >
          <button
            className={`foo-button ${value === max ? 'disabled' : ''}`}
            role="button"
            onClick={value === max ? undefined : this.onPressNext}
          >
              next page
          </button>
        </Touchable>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
