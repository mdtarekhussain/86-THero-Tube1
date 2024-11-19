var arr = [12, 32, 23, 112, 32, 1, 32, 76];
var find = 12;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("data is found  " + i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("data not found");
}
