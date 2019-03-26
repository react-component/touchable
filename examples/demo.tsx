/* tslint:disable:no-console */

import Touchable from 'rc-touchable';
import React from 'react';
import ReactDOM from 'react-dom';

const style = `
.active {
  background: red;
}
.x {
 display:inline-block;
 width:100px;
 height:100px;
 border:1px solid yellow;
}
.x:active {
  background: red;
}
`;

const Test = React.createClass({
  componentWillMount() {
    (window as any).log = this.log;
  },

  onPress(e) {
    e.stopPropagation();
    console.log(e.type, e.target.id);
  },

  onLongPress(e) {
    e.stopPropagation();
    console.log(e.type, e.target.id);
  },
  log(m) {
    this.refs.log.innerHTML += `<p>${m}:${Date.now()}</p>`;
    this.refs.log.scrollTop = this.refs.log.scrollHeight;
  },
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <div ref="log" style={{ height: 100, overflow: 'auto', margin: 10 }}/>
        <style dangerouslySetInnerHTML={{ __html: style }}/>
        <Touchable
          activeStyle={{ background: 'blue' }}
          onPress={this.onPress}
          onLongPress={this.onLongPress}
        >
          <div
            id="outer"
            style={{
              padding: 100,
              border: '1px solid red',
              boxSizing: 'border-box',
              WebkitUserSelect: 'none',
            }}
          >
            <Touchable
              activeStyle={{ border: '1px solid yellow', padding: 5 }}
              activeClassName="active"
              activeStopPropagation
              onPress={this.onPress}
              onLongPress={this.onLongPress}
              delayPressIn={20}
              delayPressOut={70}
            >
              <div
                id="inner"
                style={{
                  width: 100,
                  height: 100,
                  border: '1px solid red',
                  boxSizing: 'border-box',
                  WebkitUserSelect: 'none',
                }}
              >click
              </div>
            </Touchable>
          </div>
        </Touchable>
        <br/><br/>

        <div tabIndex={0} className="x" onClick={() => {
          this.log('onClick');
        }}>click
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
