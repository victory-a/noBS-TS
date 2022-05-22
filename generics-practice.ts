function simpleState2<T>(initial: T): [() => T, (v: T) => void] {
  let val = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [state, setState] = simpleState2('');
console.log(state);
setState('bounty');
console.log(state);

// overriding inferred types
const [state2, setState2] = simpleState2<string | null>(null);
console.log(state2());
setState2('hoooge');
console.log(state2());

function myForEach<T>(items: T[], forEachFunc: (v: T) => T): void {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

const values = [1, 2, 3, 4];
console.log(myForEach(values, (i) => i * 5));
console.log(values);

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}

console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => (v * 10).toString()));
