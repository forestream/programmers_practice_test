function solution(babbling) {
    var answer = 0;
    
    for (let babble of babbling) {
        let letters = 0;
        
        if (babble.includes('aya')) {
            letters += 3        
        }
        
        if (babble.includes('woo')) {
            letters += 3        
        }
        
        if (babble.includes('ye')) {
            letters += 2        
        }
        
        if (babble.includes('ma')) {
            letters += 2        
        }
        
        babble.length === letters ? answer++ : 0;
    }
    
    return answer;
}