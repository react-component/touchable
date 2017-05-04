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

  render() {
    const { value, min, max } = this.state;
    return (
      <div style={{margin: '20px'}}>
        <style dangerouslySetInnerHTML={{__html: style}}/>
        <Touchable
          activeStyle={{border: '1px solid yellow', padding: 5}}
          activeClassName="active"
          onPress={this.onPressPrev}
          onLongPress={this.onLongPress}
          disabled={value === min}
        >
          <button
            className={`foo-button ${value === min ? 'disabled' : ''}`}
            role="button">
              prev page
          </button>
        </Touchable>
        <div>Now page: {value} </div>
        <Touchable
          activeStyle={{border: '1px solid yellow', padding: 5}}
          activeClassName="active"
          onPress={this.onPressNext}
          onLongPress={this.onLongPress}
          disabled={value === max}
        >
          <button
            className={`foo-button ${value === max ? 'disabled' : ''}`}
            role="button">
              next page
          </button>
        </Touchable>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
