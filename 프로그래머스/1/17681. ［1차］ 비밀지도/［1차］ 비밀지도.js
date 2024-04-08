function solution(n, arr1, arr2) {
    function 이진수배열화(arr) {
        let 이진수배열 = arr.map((e) => e.toString(2).split(''));
        
        이진수배열.forEach((e) => {
            while (e.length < n) e.unshift(0);
        });
        
        return 이진수배열.map((e) => e.map((e) => +e));
    }
    
    let map1 = 이진수배열화(arr1);
    let map2 = 이진수배열화(arr2);
    
    let answer = Array(n).fill(Array(n).fill(0));
    
    answer = answer.map((한줄, i) => 한줄.map((칸, j) => map1[i][j] || map2[i][j] ? '#' : ' ').join(''));
    
    return answer;
}