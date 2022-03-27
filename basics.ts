let userName: string = 'victory';
let isLoggedIn: boolean = true;

userName += userName;

let myRegex = /foo/;

const names: string[] = userName.split(' ');
const myValues = [4, 5];

const ids: Record<number, string> = {
  4: '4',
  5: '7',
};

ids[30] = 'boo';

if (ids[30] === '20') {
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const myArr: Array<string | number> = [1, 2, 4, 'iu'];
myArr.forEach((v) => console.log(v));
