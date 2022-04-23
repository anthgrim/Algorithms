let values = [];

//Add values to the array
for (let i = 0; i <= 100; i++) {
  values.push(i);
}

//Note: Binary Search needs a sorted array

const binarySearch = (value, arr) => {
  //Step 1. Set your lower level (lowest index in array), and your upper level (highes index in the array)
  let lower = 0;
  let upper = arr.length - 1;

  //Step 2. Create a while loop that iterates as long as the lower level is less than or equal to the upper level
  while (lower <= upper) {
    //Step 3. Find the middle index in the array
    const mid = lower + Math.floor((upper - lower) / 2);

    //Step 4. Evaluate if the value that we are looking for is equal to the value at the middle of the array. If so, we found it
    if (value === arr[mid]) return arr[mid];

    //Step 5. If not found in previous step. Evaluate if the value is less than the value located at the middle array. If so,
    // that means the the value is to the left of the array, so we need to set the new upper level at the left of the middle element of the array.
    if (value < arr[mid]) {
      upper = arr[mid] - 1;
    }

    //Step 6. If not found in Step 4, and is not less than the middle value. Then the value must be to the right of the array. If so,
    //we set up the new lower level to the right side of the middle element of the array
    if (value > arr[mid]) {
      lower = arr[mid] + 1;
    }
  }

  //Step 7. If not found at all, return -1 or false
  return -1;
};

console.log(binarySearch(70, values));
