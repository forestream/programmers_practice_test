function solution(array) {
    var answer = 0;
    let countList = {};
    
    for (number of array) {
        countList[number] = 0;
        for (scanned of array) {
            if (number === scanned) {
                countList[number]++;
            }
        }
    }
    
    let tempValue = 0;
    let tempKey = 0;
    
    for (count in countList) {
        if (countList[count] > tempValue) {
            tempValue = countList[count];
            tempKey = Number(count);
        }
    }
    
    answer = tempKey;
    
    for (count in countList) {
        for (sameCountChecker in countList) {
            if ((count !== sameCountChecker && countList[count] === countList[sameCountChecker]) && (Number(sameCountChecker) === tempKey)) {
                return -1;
            }
        }
    }
    
    return answer;
}