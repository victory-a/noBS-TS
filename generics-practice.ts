function simpleState2<T>(initial: T): [() => T, (v: T) => void] {
  let val = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [state, setState] = simpleState2('one');
// console.log(state);
// setState('bounty');
// console.log(state);

// overriding inferred types
const [state2, setState2] = simpleState2<string | null>(null);
console.log(state2());
setState2('hoooge');
console.log(state2());

interface RankInterface<T> {
  item: T;
  rank: number;
}

function ranker2<T>(items: T[], callback: (v: T) => number): T[] {
  const ranks: RankInterface<T>[] = items.map((item) => ({
    item,
    rank: callback(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}
