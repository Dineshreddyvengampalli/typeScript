function sort(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
sort([8, 7, 9, 0, 0, 4, 4, 5]);
sort(['hai', 'dinsh']);
function array(para) {
    var new_arr = [];
    for (var i = 0; i < para.length; i++) {
        new_arr.push(para[i]);
    }
    console.log(new_arr);
}
array([1, 2, 3, 4]);
array(['hai', 'hello']);
