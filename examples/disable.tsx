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
  onPress(e) {
    console.log('onPress', e);
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
          onPress={this.onPress}
          onLongPress={this.onLongPress}
          disabled={value === min}
        >
          <a
            className={`foo-button ${value === min ? 'disabled' : ''}`}
            onClick={value === min ? undefined : this.prev}
            role="button">
              prev page
          </a>
        </Touchable>
        <div>Now page: {value} </div>
        <Touchable
          activeStyle={{border: '1px solid yellow', padding: 5}}
          activeClassName="active"
          onPress={this.onPress}
          onLongPress={this.onLongPress}
          disabled={value === max}
        >
          <a
            className={`foo-button ${value === max ? 'disabled' : ''}`}
            onClick={value === max ? undefined : this.next}
            role="button">
              next page
          </a>
        </Touchable>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
