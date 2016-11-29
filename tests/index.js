import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Touchable from '../index';

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
      com.touchableHandleResponderRelease({
        touches,
      });
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
      com.touchableHandleResponderRelease({
        touches,
      });
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
        com.touchableHandleResponderRelease({
          touches,
          changedTouches: touches,
        });
      }, 700);

    }, 200);
  });
});