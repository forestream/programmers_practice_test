function solution(babbling) {
    var answer = 0;
    let possibleWords = ['aya', 'ye', 'woo', 'ma'];
    
    answer = babbling.reduce((acc, elem, index, array) => {
        let letterCount = 0;
        
        for (let possibleWord of possibleWords) {
            if (elem.includes(possibleWord)) {
                letterCount += possibleWord.length;
            } 
        }
        console.log(elem.length === letterCount);
        return acc + (elem.length === letterCount ? 1 : 0);
    }, 0);
    
    return answer;
}