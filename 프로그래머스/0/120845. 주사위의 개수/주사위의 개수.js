function solution(box, n) {
    const boxWidth = box[0];
    const boxLength = box[1];
    const boxHeight = box[2];
    
    const diceQuantityWidth = Math.trunc(boxWidth / n);
    const diceQuantityLength = Math.trunc(boxLength / n);
    const diceQuantityHeight = Math.trunc(boxHeight / n);
    
    return diceQuantityWidth * diceQuantityLength * diceQuantityHeight;
}