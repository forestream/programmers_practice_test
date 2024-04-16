function solution(arr) {
    let bi = arr.length.toString(2).split('');
    let power = 0;
    if (bi.lastIndexOf('1') !== 0) {
        
        power = bi.length;
        while (arr.length < 2 ** power) {
            arr.push(0);
        }
        return arr;
    }
    return arr;
}