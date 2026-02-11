/*
    i/p = [1,2,[3,4,[5]]
	o/p = [1,2,3,4,5]

*/
//first approch

/*let input = [1, 2, [3, 4, [5]]];
let output = [];
input
  .toString()
  .split(",")
  .map((item) => {
    output.push(parseInt(item));
  });
console.log(output);*/

//second approch
/*let arr = [1, 2, [3, 4, [5]]];
console.log("Flatten array is ", arr.flat(Infinity));
//flattens all level of nesting

console.log("Flatten array is ", arr.flat());
//flattens only one level of nesting

*/

// Third approch
const flatten = function (arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    console.log("i = " + i + " length " + length);
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
      console.log(length);
    }
  }

  return result;
};
/*
How Recursion Returns to Previous Arrays
When you call a function recursively, each call is like opening a new tab in your browser.
You can only interact with the current tab, but once you're done, you close it and return to the previous one.

🧮 Time Complexity: O(n)
Where n is the total number of elements across all nested arrays.

Why?

Each element is visited exactly once.

Even nested arrays are just collections of elements — recursion ensures every value is processed once.

✅ So if you have [[1], 2, [3, [4, 5]]], there are 5 values → time complexity is O(5) = O(n)

🧠 Space Complexity
🔍 What consumes space:
Call Stack: due to recursion

Result Array: stores the flattened output

🧮 Space Complexity: O(d + n)
Where:

d is the maximum depth of nesting (affects recursion stack)

n is the total number of elements (affects result array size)

Why?

The result array holds all n elements → O(n)

The recursion stack can go as deep as the nesting → O(d)

✅ For [[1], 2, [3, [4, 5]]], depth is 3 → space complexity is O(3 + 5) = O(n + d)
*/
