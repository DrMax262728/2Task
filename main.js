function func1(arr, gender) {
    return arr.filter( obj => obj.gender === gender);
}

function func2(arr, obj, index) {
    return [...arr.slice(0, index), obj, ...arr.slice(index)];
}