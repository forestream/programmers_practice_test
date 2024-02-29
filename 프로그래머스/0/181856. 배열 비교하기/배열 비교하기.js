function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let sum1 = arr1.reduce((acc, num) => acc + num, 0);
        let sum2 = arr2.reduce((acc, num) => acc + num, 0);
        
        if (sum1 === sum2) return 0;
        if (sum1 > sum2) return 1;
        else return -1;
    }
    return arr1.length > arr2.length ? 1 : -1;
}