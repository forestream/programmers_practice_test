function solution(s1, s2) {
    return s1.reduce((acc, word) => {
        s2.includes(word) ? ++acc : 0;
        console.log(acc);
        return acc;
    }, 0);
}