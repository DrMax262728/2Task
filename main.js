function func1(arr, gender) {
    return arr.filter( obj => obj.gender === gender);
}

function func2(arr, obj) {
    "use strict";
    let newArr = [];
    let [firstObj = "Empty", secondObj = "Empty", , ...other] = arr;
    newArr.push(firstObj);
    newArr.push(secondObj);
    newArr.push(obj);
    newArr = newArr.concat(other);
    return newArr;
}