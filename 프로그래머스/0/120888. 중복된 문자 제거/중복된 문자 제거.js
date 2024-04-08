function solution(my_string) {
    let answer = my_string.split('').reduce((a, e) => {
        if (!(a.includes(e))) a.push(e);
        return a;
    },[]).join('');
    return answer;
}