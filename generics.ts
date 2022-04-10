function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

// inferred types
const [st1getter, st1setter] = simpleState(1);
// console.log(st1getter());
// st1setter(62);
// console.log(st1getter());

// overriding inferred types
const [st2getter, st2setter] = simpleState<string | null>(null);
// console.log(st2getter());
// st2setter('str');
// console.log(st2getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  console.log(ranks);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: 'Bob', hp: 20 },
  { name: 'Jack', hp: 3 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
// console.log(ranks);
