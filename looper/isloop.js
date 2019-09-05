'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // let dictionary = {}
  let temp = linkedlist.head;
  let temp2 = linkedlist.head;

  while (temp.next !== null) {

    if (temp === temp2 && temp !== linkedlist.head) {
      return true
    }

    temp = temp.next
    if (!temp2.next) break
    temp2 = temp2.next.next
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
