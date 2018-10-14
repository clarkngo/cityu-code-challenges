/**
 * Transform an integer to binary and count how may 1 it has.
 * @param {int} n is the integer will be transformed.
 * @return {int} Return the number of 1 this binary has.
 */
const countBits = n => n.toString(2).replace(/0/g, '').length;
