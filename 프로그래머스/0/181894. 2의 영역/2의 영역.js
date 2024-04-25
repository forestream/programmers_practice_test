function solution(arr) {
    
    let answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    if (!answer[0]) answer = [-1];
    return answer;
}