function add(a, b) {
    console.log(a, b);
}
add(1, 2);
function array(para) {
    var new_arr = [];
    for (var i = 0; i < para.length; i++) {
        new_arr.push(para[i]);
    }
    console.log(new_arr);
}
array([1, 2, 3, 4]);
array(['hai', 'hello']);
