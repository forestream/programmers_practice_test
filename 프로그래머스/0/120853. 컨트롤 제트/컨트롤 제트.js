function solution(s) {
    let answer = s.split(' ').reduce((acc,e,i, arr) => {
        return e === 'Z' ? acc - +(arr[i - 1]) : acc + +e;
    }, 0);
    return answer;
}