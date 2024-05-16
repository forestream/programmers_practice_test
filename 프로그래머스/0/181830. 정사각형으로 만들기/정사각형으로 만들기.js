function solution(arr) {
    let row = arr[0].length;
    let col = arr.length;
    
    if (row === col) return arr;
    
    if (row < col) {
        return arr.map((e) => [...e, ...Array(col - row).fill(0)]);
    } else {
        return [...arr, ...Array(row - col).fill(Array(row).fill(0))];
    }
}