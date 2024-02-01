function solution(array, height) {
    var answer = 0;
    
    for (classmateHeight of array) {
        if (classmateHeight > height) answer++;
    }
    return answer;
}