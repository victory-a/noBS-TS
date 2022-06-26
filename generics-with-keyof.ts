function pluck<Datatype, KeyType extends keyof Datatype>(items: Datatype[], key: KeyType): Datatype[KeyType][] {
  return items.map(item => item[key])
}

const dogs = [
  {name: "Jack", age: 2},
  {name: "Bill", age: 5},
]
console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & {quantity: number; productID: string};
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name] ) {
  console.log([name, data])
}

sendEvent("checkout", {time: 3, user: "victory"})
sendEvent("addToCart", {
  time: 2, user: "victory", quantity: 4, productID: "too"
})