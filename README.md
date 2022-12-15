# Math Basics

This package adds mathematic functions like: multiply, add, substract, etc.

## Install
```bash
npm install math-basics@latest
yarn add math-basics@latest
pnpm add math-basics@latest
```
**If you use this package with ESM (EcmaScript), please use the package: `math-basics-esm`**



## Example

```js
const math = require("math-basics");
console.log(math.add(3, 2)); // Output: 5
console.log(math.sub(6, 3)); // Output: 3
console.log(math.multiply(7,6)) // Output: 42
console.log(math.division(27,9)) // Output: 3
console.log(math.remainder(70, 10)) // Output: 0
console.log(math.pow(3,2)) // Output: 9
console.log(math.root(4,256)) // Output: 4
console.log(math.randomArray([ 'one', 'two', 'three' ])) // 'one'
console.log(math.randomNumber()) // Output: 47
```