function solution(id_pw, db) {
    let answer = '';
    answer = db.some((user) => user[0] === id_pw[0] && user[1] === id_pw[1]) ? 'login' : db.some((user) => user[0] === id_pw[0]) ? 'wrong pw' : 'fail';
    return answer;
}