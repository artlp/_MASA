/* 1. forEach() inside map(). 

   const numAr = [[-7.65, 1.8, 34.5, -0.44], [1023, 55, -3.45, 1.2, 0.2], 
                  [0.01, 0.03, -0.05, 88.1, 0.2], [2034, 3.01], [166],
                  [-166, -5.4, -76]]

   Go over numAr elements and sum all their numbers. 
   Create new array of these sums.
 */

const numAr = [[-7.65, 1.8, 34.5, -0.44], [1023, 55, -3.45, 1.2, 0.2],
[0.01, 0.03, -0.05, 88.1, 0.2], [2034, 3.01], [166],
[-166, -5.4, -76]];

let sum = 0;
const array2 = numAr.map(e => {
  e.forEach(e => {
    return sum += e;
  });
  return sum;
});
console.log(array2);
