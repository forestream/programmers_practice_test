function solution(array) {
    var answer = 0;
    let arranged = [];
    arranged[0] = array[0];
    array.splice(0, 1);
    
    for (integer of array) {
        for (i = 0; i < arranged.length; i++) {
            if (integer <= arranged[i]) {
                arranged.splice(i, 0, integer);
                break;
            } 
        }
        if (integer > arranged[arranged.length -1]) {
            arranged.push(integer);
        }
    }
    console.log(arranged);
    answer = arranged[Math.trunc(arranged.length / 2)];
    
    return answer;
}