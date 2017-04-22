// this is bad, but ESLint throws a warning
function toNumber(str) {
  return eval(str);
}

// this is also bad, but ESlint gets our backs
function call(str) {
  return Function(str);
}

// We can't blame JavaScript for this one, and ESlint is not perfect
function throttle(str) {
  return setTimeout(str);
}


toNumber('5');

call('alert("Hello World")');

throttle('alert("Seriously?")');
