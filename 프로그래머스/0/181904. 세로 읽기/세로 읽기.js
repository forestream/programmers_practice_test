function solution(my_string, m, c) {
    let arr = [];
    
    for (let i = 0; i < my_string.length; i += m) {
        arr.push(my_string.slice(i, i + m));
    }
    
    let answer = '';
    
    arr.forEach((e) => answer += e[c-1]);
    return answer;
    
}