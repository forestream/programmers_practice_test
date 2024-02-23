function solution(strArr) {
    return strArr.map((letter, idx) => {
        return idx % 2 ? letter.toUpperCase() : letter.toLowerCase();
    })
}