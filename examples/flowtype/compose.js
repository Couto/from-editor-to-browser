// @flow

type UnaryFn<I, O> = (I) => O;


const compose = <I, O, X>(
  f: UnaryFn<X, O>,
  g: UnaryFn<I, X>,
): UnaryFn<I, O> => (x: I): O => f(g(x));

const shout = (msg: string): string => msg.toLowerCase();
const hi = (subject: string): string => `Hi ${subject}`;
const greet = compose(shout, hi);

greet('world');
