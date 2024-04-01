/* 4번 문제 답안을 작성해주세요. */
function solution(M, N) {
    var answer = 0;
    answer = M*N-1;
    return answer;
}
//최소는 긴쪽으로 자르든 작은쪽으로 자르든 같은 방정식이 도출됨
//m이 긴쪽, n이 짧은쪽이라 가정.
//긴쪽으로 자른다면 자르는 횟수는 m-1 + (n-1)m = mn-1
//짧은쪽 역시 n-1 + (m-1)n = mn-1