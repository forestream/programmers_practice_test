function solution(a, b, c, d) {
    let results = [a,b,c,d];
    let caseCount = Array(6).fill(0);
    
    results.forEach((result) => {
        switch (result) {
            case 1: caseCount[0]++;
                break;
            case 2: caseCount[1]++;
                break;
            case 3: caseCount[2]++;
                break;
            case 4: caseCount[3]++;
                break;
            case 5: caseCount[4]++;
                break;
            case 6: caseCount[5]++;
                break;
        }
    });
    console.log(caseCount);
    
    const diceNum = (count) => caseCount.indexOf(count) + 1;
    
    if (caseCount.includes(4)) {
        return (diceNum(4)) * 1111;
    }
    
    if (caseCount.includes(3)) {
        return (10 * (diceNum(3)) + (diceNum(1))) ** 2;
    }
    
    if (caseCount.includes(2)) {
        if (caseCount.includes(1)) {
            return (diceNum(1)) * (caseCount.lastIndexOf(1) + 1);
        }
        const p = caseCount.indexOf(2) + 1;
        const q = caseCount.lastIndexOf(2) + 1;

        return (p + q) * Math.abs(p - q);
    }
    
    return caseCount.indexOf(1) + 1;
}