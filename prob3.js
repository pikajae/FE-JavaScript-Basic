/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    let answer = [];
    let min = Math.min(...arr); //small obj
    let min_num = 0; //smallest order
    let len = arr.length;
    if (len == 1) {
        arr=[-1];
    }
    else {
        for (let i = 0; i < len; i++) {
            if (arr[i] == min) {
                min_num = i;
                arr.splice(min_num, 1);
            }
        }
    }
    answer = arr;
    return answer;
}