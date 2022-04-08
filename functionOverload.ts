interface Cooridinates {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Cooridinates): Cooridinates {
  return { ...obj };
}

function parseCordinateFromNumbers(x: number, y: number): Cooridinates {
  return { x, y };
}

function parseCoordinate(str: string): Cooridinates;
function parseCoordinate(obj: Cooridinates): Cooridinates;
function parseCoordinate(x: number, y: number): Cooridinates;
function parseCoordinate(arg1: unknown, arg2?: unknown): Cooridinates {
  let coord: Cooridinates = {
    x: 0,
    y: 0,
  };

  // typecheck is done at runtime here
  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Cooridinates),
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate('x:10,y:20'));
