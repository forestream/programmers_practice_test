function solution(my_string) {
    let answer = [...my_string].map((letter) => {
        return letter === letter.toUpperCase() 
            ? letter.toLowerCase()
            : letter.toUpperCase();
    });
    
    console.log(answer);
    
    
    return answer.join('');
}