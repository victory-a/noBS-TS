export function print(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction) {
  return numbers.map(mutate);
}

const myNeMutateFn: MutationFunction = (v: number) => 3 * v;
console.log(arrayMutate([1, 2, 3, 4], (v) => v * 10));

type adderFn = (val: number) => number;
export function createAdder(num: number): adderFn {
  return (val: number) => {
    return num + val;
  };
}

const addOne = createAdder(1);

console.log(addOne(2));
