function solution(my_string, indices) {
    let answer= my_string.split('');
    indices.forEach((e) => answer.splice(e, 1, ''));
    return answer.join('');
}