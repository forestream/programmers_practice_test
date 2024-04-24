function solution(array, n) {
    let answer = array.reduce((acc, e, i) => {
       return Math.abs(n - e) < Math.abs(n - acc) ? e : Math.abs(n - e) === Math.abs(n - acc) ? Math.min(e, acc) : acc;
    }, Infinity);
    return answer;
}