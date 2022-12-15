"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.remainder = exports.randomNumber = exports.randomValue = exports.root = exports.pow = exports.division = exports.multiply = exports.sub = exports.add = exports.E = exports.PI = exports.isNum = void 0;
/**
 * Returns false if the value is NaN
 */
function isNum(num) {
    if (typeof num === 'number')
        return true;
    return false;
}
exports.isNum = isNum;
;
/**
 * Pi. This is the ratio of the circumference of a circle to its diameter
*/
exports.PI = Math.PI;
/**
 * The mathematical constant e. This is Euler's number, the base of natural logarithms.
 */
exports.E = Math.E;
/**
 * Returns the addition of x and y
 */
function add(...nums) {
    if (!nums[1])
        throw new Error('Please, establish at least two numbers!');
    const num = nums.join('+');
    return eval(num);
}
exports.add = add;
/**
 * Returns the substraction of x and y
 */
function sub(...nums) {
    if (!nums[1])
        throw new Error('Please, establish at least two numbers!');
    const num = nums.join('-');
    return eval(num);
}
exports.sub = sub;
/**
 * Returns the multiplication of x and y
 */
function multiply(...nums) {
    if (!nums[1])
        throw new Error('Please, establish at least two numbers!');
    const num = nums.join('*');
    return eval(num);
}
exports.multiply = multiply;
/**
 * Returns the division of x and y
 */
function division(...nums) {
    if (!nums[1])
        throw new Error('Please, establish at least two numbers!');
    const num = nums.join('/');
    return eval(num);
}
exports.division = division;
/**
 * Returns the power of x and y
 */
function pow(...nums) {
    if (!nums[1])
        throw new Error('Please, establish at least two numbers!');
    const num = nums.join('**');
    return eval(num);
}
exports.pow = pow;
/**
 * Returns the root of x (index) and y(number)
 */
function root(index, num) {
    if (!index)
        throw new Error('Please, set the index number');
    if (!num)
        throw new Error('Please, set the num!');
    let result = 0;
    if (index === 1 || '1')
        index = 2;
    if (index >= 2)
        result = eval(`${num}**[1/${index}]`);
    return result;
}
exports.root = root;
/**
 * Returns a random value of an array
 */
function randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.randomValue = randomValue;
/**
 * Returns a random number between 0-1000000
 */
function randomNumber() {
    Math.round(multiply(Math.random(), 1000000));
}
exports.randomNumber = randomNumber;
/**
 * Returns the remainder of a division
 */
function remainder(...nums) {
    if (!nums[1])
        throw new Error('Please, establish at least two numbers!');
    const num = nums.join('%');
    return eval(num);
}
exports.remainder = remainder;
/**
 * Returns the round of the number
 */
function round(num) {
    return Math.round(eval(`${num}*1`));
}
exports.round = round;