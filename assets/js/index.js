//Функция, которая решает квадратные уравнения

/**
 * Solves quadric equations
 * @param {number} a -
 * @param {number} b 
 * @param {number} c 
 * @returns {false | null | [number, number]} -returns false on invalid input
 */
function quadricEquation(a, b, c){
  if( isNaN(a - b- c) ) return false;
  if(a === 0) return null;

  const d = b ** 2 - 4 * a * c;
  if(d < 0) return null;
  if(d === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }

  const x1 = (-b + d ** (1 / 2)) / (2 * a);
  const x2 = (-b - d ** (1 / 2)) / (2 * a);
  return [x1, x2];
}

const result = quadricEquation(1, 8, 12);
if(!result) {
  console.log("Ошибка вычислений");
} else {
  console.log("x1 =", result[0], "x2 =", result[1]);
}

