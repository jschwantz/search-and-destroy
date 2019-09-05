'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);
  if (target === array[midPoint]) return true;
  else if (target < array[midPoint] && array.length > 1)
    return binarySearch(array.slice(0, midPoint), target);
  else if (target > array[midPoint] && array.length > 1)
    return binarySearch(array.slice(midPoint), target);
  else return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
