// TypeError: toLocaleDateString is not a function in JS

// EXAMPLE 1 - Only call the `toLocaleDateString` method on valid Date objects

const d1 = new Date().toLocaleDateString('en-US');
console.log(d1);

const d2 = new Date('Sept 24, 22 13:20:18').toLocaleDateString(
  'en-US',
);
console.log(d2); // 👉️ 9/24/2022

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is a valid Date before calling `toLocaleDateString`

// const d1 = new Date();

// if (
//   typeof d1 === 'object' &&
//   d1 !== null &&
//   'toLocaleDateString' in d1
// ) {
//   const result = d1.toLocaleDateString('en-US');
//   console.log(result);
// }
