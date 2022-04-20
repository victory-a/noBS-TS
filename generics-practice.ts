// function simpleState2<T>(initial: T): [() => T, (v: T) => void] {
//   let val = initial;

//   return [
//     () => val,
//     (v: T) => {
//       val = v;
//     },
//   ];
// }

// const [state, setState] = simpleState2('one');
// // console.log(state);
// // setState('bounty');
// // console.log(state);

// // overriding inferred types
// const [state2, setState2] = simpleState2<string | null>(null);
// console.log(state2());
// setState2('hoooge');
// console.log(state2());

function myForEach<T>(items: T[], forEachFunc: (v: T) => T): void {
  items.reduce((a, v) => {
    return forEachFunc(v);
    // return undefined;
  }, undefined);
}

const values = [1, 2, 3, 4];
console.log(myForEach(values, (i) => i * 5));
console.log(values);
