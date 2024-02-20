function solution(dots) {
    const getSlope = (a, b) => (b[1] - a[1]) / (b[0] - a[0]);
    let slopes = [];
    let answer = 0;
    
    answer = getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3]) 
    || getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])
    || getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2]) ? 1 : 0;
    
    return answer;
}