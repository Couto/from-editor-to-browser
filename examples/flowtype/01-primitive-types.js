// @flow

const list:Array<number> = [1, 2, 3, 4];

function toString(n: number): string {
  return (n).toString();
}

type Hobbie = 'Reading' | 'Skating' | 'Music'

type Person = {
  name: string,
  age: number,
  hobbies: Array<Hobbie>,
  address?: {
    street: string
  }
}

toString('Hello');

const User: Person = {
  name: 'Luis',
  age: 30,
  hobbies: ['Reading', 'Skating'],
  address: {
    street: 'Rua Manuel',
  },
};

console.log(list);
