// @flow

/* eslint-disable */

type Suit =
  | 'Hearts'
  | 'Diamonds'
  | 'Clubs';

export default (type: Suit): number => {
  if (type === 'Spades') {
    return 4;
  } else if (type === 'Clubs') {
    return 3
  } else if (type === 'Diamonds') {
    return 2;
  } else if (type === 'Hearts') {
    return 1;
  }
};
