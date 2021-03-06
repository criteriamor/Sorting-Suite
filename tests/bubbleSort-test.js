const assert = require('chai').assert;
const bubbleSort = require('../lib/bubbleSort');
const randomNumber = require('../lib/randomNumber');

describe('bubbleSort', function () {

  it('should be a function', function () {
    assert.isFunction(bubbleSort);
  });

  it('should sort an array of numbers', function () {
    let crazyArray = [4, 1, 8, 10, 6];

    assert.deepEqual(bubbleSort(crazyArray), [1, 4, 6, 8, 10]);
  });

  it('should sort an array of letters', function () {
    let letterArray = ['c', 'b', 'a', 'g', 'f'];

    assert.deepEqual(bubbleSort(letterArray), ['a', 'b', 'c', 'f', 'g']);
  });

  it('should sort positive and negative numbers', function () {
    let numbersArray = [-1, 5, -3, 10, 4];

    assert.deepEqual(bubbleSort(numbersArray), [-3, -1, 4, 5, 10]);
  });

   it('should sort an array of large random numbers', function() {
      let random = randomNumber(16001, 16000) //1741ms
      let sortedArray = bubbleSort(random);

      for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });
});