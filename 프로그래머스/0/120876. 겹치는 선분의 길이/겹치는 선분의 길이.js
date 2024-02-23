function solution(lines) {
    const fillGap = (arr) => {
        let filled = [];
        for (let i = arr[0]; i <= arr[1]; i++) {
            filled.push(i);
        }
        return filled;
    }
    
    const findOverlap = (arr1, arr2, arr3) => {
        let overlap = [];
        
        overlap.push(arr1.reduce((acc, num) => {
            if (arr2.includes(num)) acc.push(num);
            return acc;
        }, []).slice(1));
        
        overlap.push(arr1.reduce((acc, num) => {
            if (arr3.includes(num)) acc.push(num);
            return acc;
        }, []).slice(1));

        
        // overlap.push(arr2.reduce((acc, num) => {
        //     if (arr1.includes(num)) acc.push(num);
        //     return acc;
        // }, []).slice(1));

        overlap.push(arr2.reduce((acc, num) => {
            if (arr3.includes(num)) acc.push(num);
            return acc;
        }, []).slice(1));

        
//         overlap.push(arr3.reduce((acc, num) => {
//             if (arr1.includes(num)) acc.push(num);
//             return acc;
//         }, []).slice(1));

//         overlap.push(arr3.reduce((acc, num) => {
//             if (arr2.includes(num)) acc.push(num);
//             return acc;
//         }, []).slice(1));
        
        overlap = String(overlap).split(',').filter((num) => num !== '').map((n) => +n);
        overlap.sort((a, b) => a - b);
        
        let lengthArr = overlap.reduce((acc, num) => {
            if (acc[acc.length - 1] !== num) acc.push(num);
            return acc;
        }, [])
        return lengthArr;
    }
    
    let numbersFilled = [];
    for (let i = 0; i < 3; i++) numbersFilled.push(fillGap(lines[i]));

    let answer = findOverlap(numbersFilled[0], numbersFilled[1], numbersFilled[2]);
    
    return answer.length;
}
    
//     let numbersSorted = String(numbersFilled)
//             .split(',')
//             .map((num) => +num)
//             .sort((a, b) => a - b);
    

//     let repeat = false;
//     let length = 0;
//     let numbersRepeated = numbersSorted.reduce((acc, number) => {
//         if (acc[acc.length - 1] === number) return acc;
//         if (numbersSorted.filter((numberSorted) => numberSorted === number).length >= 2) {
//             if (repeat) {
//                 length++;
//             }
//             repeat = true;
//             acc.push(number)
//             return acc;
//         } else {
//             repeat = false;
//         }
//         return acc;
//     }, []);
    
//     let conjunction = 0;
//     let tempEnd = null;
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (i === j) continue;
//             if (conjunction === 0 && lines[i][1] === lines[j][0]) {
//                 length-- ;
//                 conjunction++;
//             } 
//         }
//     }
    
//     return length >= 0 ? length : 0;
// }

// function solution(lines) {
//     let overlapArr = [];
    
//     for (let i = 0; i < 2; i++) {
//         let start = lines[i][0];
//         let end = lines[i][1];
        
//         for (let j = i + 1; j < 3; j++) {
//             let compareStart = lines[j][0];
//             let compareEnd = lines[j][1];

//             if (start >= compareStart && end <= compareEnd || start <= compareStart && end >= compareEnd) {
//                 overlapArr.push(end - start > compareEnd - compareStart 
//                     ? [compareStart, compareEnd] : [start, end]);          
//             } else if (start >= compareStart && start < compareEnd) {
//                 overlapArr.push([start, compareEnd]);
//             } else if (end > compareStart && end <= compareEnd) {
//                 overlapArr.push([compareStart, end]);
//             }            
//             console.log(overlapArr)
//         }
//     }
    
//     return ;
// }
            