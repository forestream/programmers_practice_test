function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.forEach((e) => {
        let section = e.split('').splice(s,l).join('');
        if (section > k) answer.push(+section);
    });
    return answer;
    
}