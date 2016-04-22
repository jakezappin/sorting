

function split (array){

	var center = Math.floor(array.length / 2);
	var left = array.slice(0, center);
	var right = array.slice(center);

	return [left, right];
}

function mergeSort (wholeArray){

	if (wholeArray.length < 2) {

		return wholeArray;

	} else {

		var splits = split(wholeArray);
		var left = splits[0];
		var right = splits[1];

		return merge(mergeSort(left), mergeSort(right));

	}

}


function merge (left, right){

	var merged= [];
	var leftIndex = 0;
	var rightIndex = 0;


	while(leftIndex < left.length || rightIndex < right.length){
		if(left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined){
			merged.push(left[leftIndex]);
			leftIndex++;
		} else {
			merged.push(right[rightIndex]);
			rightIndex++;
		}

	}

	return merged;
	
}