import assign from 'object-assign';

function PressEvent(nativeEvent) {
  this.nativeEvent = nativeEvent;
  ['type', 'currentTarget', 'target', 'touches', 'changedTouches'].forEach(m => {
    this[m] = nativeEvent[m];
  });
  if (!nativeEvent.$longPressSeq) {
    nativeEvent.$longPressSeq = 1;
  } else {
    nativeEvent.$longPressSeq += 1;
  }
  this.$longPressSeq = nativeEvent.$longPressSeq;
}

assign(PressEvent.prototype, {
  preventDefault() {
    this.nativeEvent.preventDefault();
  },
  stopPropagation() {
    const { nativeEvent, $longPressSeq } = this;
    if (nativeEvent.$longPressStopSeq) {
      return;
    }
    nativeEvent.$longPressStopSeq = $longPressSeq;
  },
});

export function shouldFirePress(e) {
  const { nativeEvent, $longPressSeq } = e;
  if (!nativeEvent.$longPressStopSeq) {
    return true;
  }
  return nativeEvent.$longPressStopSeq >= $longPressSeq;
}

export default PressEvent;
