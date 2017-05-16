import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Touchable from '../index';
import TestUtils from 'react-dom/test-utils';
import PressEvent from '../src/PressEvent';

describe('Touchable', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it('onPress works', (done) => {
    function onPress() {
      done();
    }

    const com = ReactDOM.render((
      <Touchable onPress={onPress} activeClassName="t">
        <div id="t" style={{ width: 100, height: 100 }}>touch</div>
      </Touchable>
    ), container);
    const t = document.getElementById('t');
    const rect = t.getBoundingClientRect();
    const touches = [{
      pageX: 20 + rect.left,
      pageY: 20 + rect.top,
    }];
    com.touchableHandleResponderGrant({
      touches,
    });
    setTimeout(() => {
      expect(t.className).to.be('t');
      com.touchableHandleResponderRelease(new PressEvent({
        touches,
      }));
    }, 200);
  });

  it('onLongPress works', (done) => {
    function onPress() {
      expect('should not call onLongPress').to.be('');
    }

    function onLongPress() {
      setTimeout(() => {
        done();
      }, 900);
    }

    const com = ReactDOM.render((
      <Touchable
        onPress={onPress}
        onLongPress={onLongPress}
        activeClassName="t"
      >
        <div id="t" style={{ width: 100, height: 100 }}>touch</div>
      </Touchable>
    ), container);
    const t = document.getElementById('t');
    const rect = t.getBoundingClientRect();
    const touches = [{
      pageX: 20 + rect.left,
      pageY: 20 + rect.top,
    }];
    com.touchableHandleResponderGrant({
      touches,
    });
    setTimeout(() => {
      expect(t.className).to.be('t');
      com.touchableHandleResponderRelease(new PressEvent({
        touches,
      }));
    }, 600);
  });

  it('onPress move works', (done) => {
    function onPress() {
      setTimeout(() => {
        done();
      }, 100);
    }

    function onLongPress() {
      expect('should not call onLongPress').to.be('');
    }

    const com = ReactDOM.render((
      <Touchable
        onLongPress={onLongPress}
        onPress={onPress}
        activeStyle={{ color: 'red' }}
        delayPressOut={0}
      >
        <div id="t" style={{ width: 100, height: 100 }}>touch</div>
      </Touchable>
    ), container);
    const t = document.getElementById('t');
    const rect = t.getBoundingClientRect();
    const touches = [{
      pageX: 20 + rect.left,
      pageY: 20 + rect.top,
    }];
    const moveTouches = [
      {
        pageX: 380 + rect.left,
        pageY: 380 + rect.top,
      }
    ];
    com.touchableHandleResponderGrant({
      touches,
    });
    setTimeout(() => {
      expect(t.style.color).to.be('red');
      com.touchableHandleResponderMove({
        touches: moveTouches,
        changedTouches: moveTouches,
      });
      expect(t.style.color).to.be('');
      com.touchableHandleResponderMove({
        touches,
        changedTouches: touches,
      });
      setTimeout(()=> {
        com.touchableHandleResponderRelease(new PressEvent({
          touches,
          changedTouches: touches,
        }));
      }, 700);

    }, 200);
  });

  // https://github.com/ant-design/ant-design-mobile/issues/937#issuecomment-284625667
  it('props.disabled should works fine with onClick', () => {
    class Demo extends React.Component {
      state = {
        currentPage: 1,
        disabled: false,
      };
      handleClick = () => {
        const { currentPage } = this.state;
        const nextPagae = currentPage + 1;
        this.setState({
          currentPage: nextPagae,
          disabled: nextPagae >= 3,
        });
      }
      render() {
        return (
          <Touchable activeClassName="t" disabled={this.state.disabled} ref={com => this.com = com}>
            <div id="t" style={{ width: 100, height: 100 }} onClick={this.handleClick}>touch {this.state.currentPage}</div>
          </Touchable>
        )
      }
    }
    const instance = ReactDOM.render(<Demo />, container)
    const com = instance.com;
    const t = document.getElementById('t');

    TestUtils.Simulate.click(t);
    TestUtils.Simulate.click(t);
    expect(t.className).to.be('');
    expect(com.props.disabled).to.be(true);
  });
});
