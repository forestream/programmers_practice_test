function solution(n) {
    var answer = [[]];
    let directions = ['right', 'down', 'left', 'up'];
    let direction = 0;
    let row = 0;
    let column = 0;
    
    (function generateColumns() {
        for (let i = 0; i < n; i++) {
            answer[0].push(0);
        }
    })();
    
    (function generateRows() {
        for (let i = 0; i < n - 1; i++) {
            answer.push(answer[0].slice(0, answer[0].length));
        }
    })();
    
    
    for (let i = 1; i <= n ** 2; i++) {
        if (answer[row][column] === 0) answer[row][column] = i;
        
        if (directions[direction] === 'right') {
            column++;
            if (answer[row][column] !== 0) {
                column--;
                row++;
                direction++;
            } 
            
        } else if (directions[direction] === 'down') {
            row++;
            if(answer[row] === undefined || answer[row][column] !== 0) {
                row--;
                column--;
                direction++;
            } 
            
        } else if (directions[direction] === 'left') {
            column--;
            if (column < 0 || answer[row][column] !== 0) {
                column++;
                row--;
                direction++;
            } 
            
        } else if (directions[direction] === 'up') {
            row--;
            if (answer[row][column] !== 0) {
                row++;
                column++;
                direction = 0;
            } 
        }
    }
    
    return answer;
}