// function count(num, k) {
//     let arr = String(num).split('').reverse();
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (k <= arr[i]) count += 1;
//         else if ()
//     }
// }

function solution(i, j, k) {
    let count = 0;
    for (;i<=j;i++) {
        count += String(i).split('').filter((e)=>+e===k).length;
    }
    return count;
}