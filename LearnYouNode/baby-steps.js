// First element of process.argv array is always 'node', and the second
// element is always the path to your js file.
var totalSum = 0;
for (var i = 2; i < process.argv.length; i++) {
  totalSum += Number(process.argv[i])
}
console.log(totalSum);