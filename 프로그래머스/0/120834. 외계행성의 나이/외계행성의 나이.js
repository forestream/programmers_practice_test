function solution(age) {
    let letter = ('abcdefghij').split('');
    return age.toString().split('').map((num) => letter[num]).join('');
}