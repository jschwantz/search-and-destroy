'use strict';

// Complete this algo

const minJumps = arr => {
  let counter = 1;
  let latestIndex = 0;
  let len = arr.length - 1;
  console.log(arr);
  if (arr[0] + latestIndex >= len) return counter;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] + i >= len) latestIndex = i;
  }
  return counter + minJumps(arr.slice(0, latestIndex + 1));
};

module.exports = minJumps;
