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
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}
