function solution(balls, share) {
    let bigBalls = BigInt(balls);
    let bigShare = BigInt(share);
    
    function factorial(n) {
        if (n <= 1n) return 1n;
        
        return n * factorial(n - 1n);
    }
    
    return (factorial(bigBalls) / factorial(bigBalls - bigShare) / factorial(bigShare));
}