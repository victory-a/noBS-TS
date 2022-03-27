function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ''): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number) => `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]) {
  return `${salutation} ${names.join(' ')}`;
}

interface User {
  first: string;
  last: string;
}
function getNames(user: User) {
  return `${user.first} ${user.last}`;
}
