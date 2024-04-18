function solution(numlist, n) {
    let answer = numlist;
    // let difference = numlist.map((e) => Math.abs(e - n));
    answer.sort((a,b) => {
        console.log(Math.abs(n-a),Math.abs(n-b));
        if (Math.abs(n-a) > Math.abs(n-b)) return 1;
        else if (Math.abs(n-a) === Math.abs(n-b) && b > a) return 1;
        return -1;
    });
    
    return answer;
}