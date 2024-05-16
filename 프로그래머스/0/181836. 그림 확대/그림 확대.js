function solution(picture, k) {
    let dot = Array(k).fill('.').join('');
    let x = Array(k).fill('x').join('');
    let answer = picture.map((e) => {
        e = e.replaceAll('.', dot);
        e = e.replaceAll('x', x);
        return e;
    })
    answer = answer.reduce((acc, e) => [...acc, ...Array(k).fill(e)], []);
    return answer;
}