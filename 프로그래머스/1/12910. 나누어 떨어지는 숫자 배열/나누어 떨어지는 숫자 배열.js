function merge(arr1, arr2) {
    const sortedArray = [];
    
    let pointer1 = 0;
    let pointer2 = 0;
    
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            sortedArray.push(arr1[pointer1]);
            pointer1++;
        } else {
            sortedArray.push(arr2[pointer2]);
            pointer2++;
        }
    }
    
    while (pointer1 < arr1.length) {
        sortedArray.push(arr1[pointer1]);
        pointer1++;
    }
    
    while (pointer2 < arr2.length) {
        sortedArray.push(arr2[pointer2]);
        pointer2++;
    }
    
    return sortedArray;
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    
    const middle = Math.ceil(array.length / 2);
    
    const arr1 = mergeSort(array.slice(0, middle));
    const arr2 = mergeSort(array.slice(middle));
    
    return merge(arr1, arr2);
}

function solution(arr, divisor) {
    const answer = [];
    
    for (let elem of arr) {
        if (elem % divisor === 0) answer.push(elem);    
    }
    
    return answer.length ? mergeSort(answer) : [-1];    
}