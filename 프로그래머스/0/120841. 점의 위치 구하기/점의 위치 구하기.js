function solution(dot) {
    var answer = 0;
    
    answer = dot[0] < 0 ? (dot[1] < 0 ? 3 : 2) : (dot[1] > 0 ? 1 : 4);
    
    return answer;
}