function solution(l, r) {
    let answer = [];
    const regExp = /[^05]+/;
    
    for (let i = l; i <= r;) {
        if (!regExp.test(i + '')) {
            answer.push(i);
            i += 5
        } else {
            i += 1;
        }
    }
    
    return !answer.length ? [-1] : answer;
}