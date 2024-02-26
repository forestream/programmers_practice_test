function solution(board) {
    let safe = 0;
    let coordinates = [];
    let unsafeCoordinates = [];
    let sideLength = board.length;
    let newBoard = Array.from(Array(sideLength), () => Array(sideLength).fill(0));
    
    const findMines = () => {
        for (let row = 0; row < sideLength; row++) {
            for (let column = 0; column < sideLength; column++) {
                if (board[row][column] === 1) coordinates.push([row, column]);
            }
        }
    }   
    
    const markUnsafe = () => {
        coordinates.forEach((coordinate) => {
            for (let row = -1; row <= 1; row++) {
                if (coordinate[0] + row < 0 || coordinate[0] + row >= sideLength) continue;

                for (let column = -1; column <= 1; column++) {
                    if (coordinate[1] + column < 0 || coordinate[1] + column >= sideLength) continue;

                    let unsafe = [coordinate[0] + row, coordinate[1] + column];

                    if (coordinates.find((co) => co[0] === unsafe[0] && co[1] === unsafe[1])) continue;
                    if (unsafeCoordinates.find((co) => co[0] === unsafe[0] && co[1] === unsafe[1])) continue;

                    unsafeCoordinates.push(unsafe);
                }
            }
        })
    }
    
    findMines();

    if (coordinates.length > 0) {
        markUnsafe();
                    console.log(unsafeCoordinates);

        return (sideLength ** 2) - unsafeCoordinates.length - coordinates.length;
    } else {
        return sideLength ** 2;
    }
}