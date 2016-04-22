
// var split = function (wholeArray) {
// 	debugger
// 	if (wholeArray.length > 1) {
// 		var middle = Math.floor(wholeArray.length/2);
// 		var firstHalf = wholeArray.slice(0, middle);
// 		var secondHalf = wholeArray.slice(middle+1; wholeArray.length-1);

// 		return [split(wholeArray), split(wholeArray)];
// 	}

// }


function mergeSort (wholeArray){

	if (wholeArray.length < 2) {

		return wholeArray;

	} else {

		var middle = Math.floor(wholeArray.length/2);
		var firstHalf = wholeArray.slice(0, middle);
		var secondHalf = wholeArray.slice(middle, wholeArray.length)
		return merge(mergeSort(firstHalf), mergeSort(secondHalf));
	}

}


function merge (leftArray, rightArray){

	var result = [];
	var left = 0;
	var right = 0;

	while (left < leftArray.length && right < rightArray.length){
		if (leftArray[left] && rightArray[right]) {
			if(leftArray[left] > rightArray[right]){
				result.push(rightArray[right]);
				right++;
			} else {
				result.push(leftArray[left]);
				left++;
			}
		}
	}

	return result.concat(leftArray[left], rightArray[right]);

}