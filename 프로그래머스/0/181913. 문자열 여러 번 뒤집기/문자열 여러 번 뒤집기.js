function solution(my_string, queries) {    
    let answer = my_string.split('');

    queries.forEach((query) => { 
        answer.splice(query[0], query[1] - query[0] + 1, ...answer.slice(query[0], query[1] + 1).reverse());
    });
    
    
    return answer.join('');
}