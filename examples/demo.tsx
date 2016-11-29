import Touchable from 'rc-touchable';
import React from 'react';
import ReactDOM from 'react-dom';
const style = `
.active {
  background: red;
}
`;

const Test = React.createClass({
  onPress(e) {
    console.log('onPress', e);
  },

  onLongPress(e) {
    console.log('onLongPress', e);
  },

  render() {
    return (
      <div style={{margin: 100}}>
        <style dangerouslySetInnerHTML={{__html: style}} />
        <Touchable
          activeStyle={{border:'1px solid yellow', padding:5}}
          activeClassName="active"
          onPress={this.onPress}
          onLongPress={this.onLongPress}
        >
          <div style={{width:100,height:100,border:'1px solid red', boxSizing:'border-box'}}>click</div>
        </Touchable>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
