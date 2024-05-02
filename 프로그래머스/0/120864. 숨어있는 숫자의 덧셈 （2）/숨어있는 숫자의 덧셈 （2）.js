function solution(my_string) {
    let answer = my_string.split(/[a-zA-z]/);
    return answer.reduce((acc,e)=>{
       return acc + +e; 
    },0);
}