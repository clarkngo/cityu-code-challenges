## Weird String

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

Hint: This StackOverflow post walks you through changing an array into a character array
Hint: Checkout the toUpperCase and toLowerCase methods in JavaScript.
Hint: Checkout the indexOf method.
Hint: Build a new method called removeAtIndex, that removes an item at a certain index.

Sample Tests:
describe('toWeirdCase', function(){
  it('should return the correct value for a single word', function(){
    Test.assertEquals(toWeirdCase('This'), 'ThIs');
    Test.assertEquals(toWeirdCase('is'), 'Is');
  });
  it('should return the correct value for multiple words', function(){
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});

Source: https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
