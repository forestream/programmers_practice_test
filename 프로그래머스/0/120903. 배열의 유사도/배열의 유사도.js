function solution(s1, s2) {
    return s1.reduce((acc, word) => s2.includes(word) ? ++acc : acc, 0);
}