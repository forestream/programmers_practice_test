function solution(myStr) {
    var answer = myStr.split('a').join(' ').split('b').join(' ').split('c').join(' ').split(' ').filter((e)=>e!=='');
    return answer.length ? answer : ['EMPTY'];
}