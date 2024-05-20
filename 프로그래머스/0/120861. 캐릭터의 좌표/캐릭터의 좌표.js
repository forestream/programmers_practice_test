function solution(keyinput, board) {
    const move = {
        up: [0, 1],
        down: [0, -1],
        left: [-1, 0],
        right: [1, 0]
    };
    
    const xLimit = (board[0] - 1) / 2;
    const yLimit = (board[1] - 1) / 2;
    
    let answer = keyinput.reduce((acc, direction) => {
        let nextX = acc[0] + move[direction][0];
        nextX = nextX < -xLimit ? -xLimit : nextX > xLimit ? xLimit : nextX;
        let nextY = acc[1] + move[direction][1];
        nextY = nextY < -yLimit ? -yLimit : nextY > yLimit ? yLimit : nextY;

        return [nextX, nextY];
    }, [0, 0]);
    
    
    return answer;
}