function solution(str1, str2) {
    var answer = 0;
    if (str1.indexOf(str2) !== -1) {
        return 1;
    } else {
        return 2;
    }
    return answer;
}