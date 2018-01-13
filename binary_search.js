binary_search = (list, item) => {
  let low = 0;
  let high = list.length;

  while( low <= high) {
    let mid = Math.floor((low + high) /2);
    let guess = list[mid];
    if(guess === item) {
      return mid;
    }
    else if (guess > item) {
      high = mid -1;
    }
    else {
     low = mid + 1
    }
  }
  return null;
}


test_list = [1,3,5,7,9];

console.log(test_list.length)

console.log(binary_search(test_list,3))
console.log(binary_search(test_list,7))
console.log(binary_search(test_list, -1))
