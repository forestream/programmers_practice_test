function solution(arr, k) {
    var answer = arr.reduce((acc, e) => {
        if (acc.indexOf(e) === -1 && acc.length < k) acc.push(e);
        return acc;
    }, []);
                            
    while (answer.length < k) {
        answer.push(-1);
    } 

    return answer;
}