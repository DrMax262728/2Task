function func1(arr, gender) {
    return arr.filter( obj => obj.gender === gender);
}

function func2(arr, obj) {
    let newArr = arr.slice();
    newArr.push(obj);
    return newArr;
}