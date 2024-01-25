function solution(babbling) {
    var answer = 0;
    let possibleWords = ['aya', 'ye', 'woo', 'ma'];
    
    for (let babble of babbling) {
        for (let possibleWord of possibleWords) {
            while (babble.includes(possibleWord)) {
                let index = babble.indexOf(possibleWord);
                babble = [...babble];
                babble.splice(index, possibleWord.length, ' ');
                babble = babble.join('');
            }
        }
        babble.trim() === '' ? answer++ : 0;
    }
    return answer;
}