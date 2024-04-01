/* 2번 문제 답안을 작성해주세요. */
function fact(input)
{
    let out = 0;
    for (let i = input - 1; 0 < i; i--)
    {
        input = input * i;
    }
    out = input;
    return out;
}

function solution(n)
{
    let answer = 0;
    for (let i = 1; i <= 10; i++)
    {
        answer++;
        let nf=fact(i);
        let nf1=fact(i+1);
        if ((nf <= n)&&(n< nf1))
        {
            return answer;
            break;
        }
    }
}