function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let left = 0;
    let right = 0;
    let minLength = Infinity;
    let total = sequence[right];
    
    while (true) {
        if (total < k) {
            right++;
            total += sequence[right];
        } else if (total === k) {
            if (right - left + 1 < minLength) {
                start = left;
                end = right;
                minLength = right - left + 1;
            }
            
            right++;
            total += sequence[right];
            total -= sequence[left];
            left++;
        } else {
            total -= sequence[left];
            left++;
        }
        
        if (right >= sequence.length) right = sequence.length - 1;
        if (left >= sequence.length) break;
    }
    
    return [start, end];
}