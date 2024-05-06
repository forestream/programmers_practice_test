function solution(quiz) {
    var answer = quiz.map((e) => {
        let arr = e.split(' ');
        console.log(arr);
        if (arr[1] === '+') {
            return +arr[0] + +arr[2] === +arr[4] ? 'O' : 'X';
        } else {
            return +arr[0] - +arr[2] === +arr[4] ? 'O' : 'X';
        }
    });
    return answer;
}