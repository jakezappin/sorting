function bubbleSort(arr) {

var swapped = true
var backwards = arr.length-1

while (swapped) {
	swapped = false
	for (var i = 0; i< backwards; i++) {
		if (arr[i]>arr[i+1]) {
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			swapped = true
		}
	}
	backwards--
}

return arr

}