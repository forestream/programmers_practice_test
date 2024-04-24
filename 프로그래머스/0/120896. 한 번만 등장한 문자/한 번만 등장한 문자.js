function solution(s) {
    let counts = {};
    for (let char of s) {
        if (!counts[char]) {
            counts[char] = 1; 
            continue;
        }
        counts[char]++;
    }
    let answer = Object.entries(counts).reduce((acc,e) => {
        return e[1] === 1 ? acc + e[0] : acc;
    },'');
    return answer.split('').sort().join('');
}