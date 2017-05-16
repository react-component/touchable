import assign from 'object-assign';

function PressEvent(nativeEvent) {
  this.nativeEvent = nativeEvent;
  ['type', 'currentTarget', 'target', 'touches', 'changedTouches'].forEach(m => {
    this[m] = nativeEvent[m];
  });
  if (!nativeEvent.$pressSeq) {
    nativeEvent.$pressSeq = 1;
  } else {
    nativeEvent.$pressSeq += 1;
  }
  this.$pressSeq = nativeEvent.$pressSeq;
}

assign(PressEvent.prototype, {
  preventDefault() {
    this.nativeEvent.preventDefault();
  },
  stopPropagation() {
    const { nativeEvent, $pressSeq } = this;
    if (nativeEvent.$stopPressSeq) {
      return;
    }
    nativeEvent.$stopPressSeq = $pressSeq;
  },
});

export function shouldFirePress(e) {
  const { nativeEvent, $pressSeq } = e;
  if (!nativeEvent.$stopPressSeq) {
    return true;
  }
  return nativeEvent.$stopPressSeq >= $pressSeq;
}

export default PressEvent;
