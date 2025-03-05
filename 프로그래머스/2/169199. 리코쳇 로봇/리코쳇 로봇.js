function findPosition(board, target) {
    let x;
    let y;
    
    board.forEach((row, i) => {
        const found = Array.from(row).findIndex((char) => char === target);
        
        if (found > -1) {
            x = found;
            y = i;
        }
    })
    
    return [x, y];
}

function findNextStops(board, current) {
    let [x, y] = current;
    while (true) {
        if (board[y - 1] === undefined || board[y - 1][x] === 'D') break;
        y--;
    }
    const up = [x, y];
    
    [x, y] = current;
    while (true) {
        if (board[y][x + 1] === undefined || board[y][x + 1] === 'D') break;
        x++;
    }
    const right = [x, y];
    
    [x, y] = current;
    while (true) {
        if (board[y + 1] === undefined || board[y + 1][x] === 'D') break;
        y++;
    }
    const down = [x, y];
    
    [x, y] = current;
    while (true) {
        if (board[y][x - 1] === undefined || board[y][x - 1] === 'D') break;
        x--;
    }
    const left = [x, y];
    
    return [
        {position: up, from: current}, 
        {position: right, from: current}, 
        {position: down, from: current}, 
        {position: left, from: current}
    ];
}

function solution(board) {
    let current = findPosition(board, 'R');
    const goal = findPosition(board, 'G');
    const queue = [];
    const nextStops = findNextStops(board, current);
    queue.push(...nextStops);
    const distances = {};
    board.forEach((row, y) => {
        Array.from(row).forEach((char, x) => {
            distances[[x, y]] = Infinity;
        })
    });
    distances[current] = 0;
    const before = {};
    before[current] = null;
    
    while (queue.length) {
        
        const {position: dequeued, from: current} = queue.shift();
        
        const distanceSoFar = distances[current] + 1;
        
        if (distanceSoFar < distances[dequeued]) {
            distances[dequeued] = distanceSoFar;
            before[dequeued] = [...current];
            queue.push(...findNextStops(board, dequeued));
        }
    }
    
    
    return distances[goal] === Infinity ? -1 : distances[goal];
}
