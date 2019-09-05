'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let dictionary = {}
  let temp = linkedlist.head;
  while (temp.next !== null) {

    if (!dictionary[temp.value]) {
      dictionary[temp.value] = 1
    } else {
      // console.log()
      return true
    }

    temp = temp.next
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
