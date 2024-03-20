function solution(outerArr) {
    let answer; 
    
    let results = outerArr.map((innerArr, outerIndex) => {
        return innerArr.every((num, innerIndex) => outerArr[outerIndex][innerIndex] === outerArr[innerIndex][outerIndex]);
    });
    
    return results.includes(false) ? 0: 1;
}