/**
 *  프로그래머스 > 완전탐색 > 소수찾기
 */
 function solution(numbers) {
    var answer = 0;
    //숫자들을 배열로 만듬
    //조합으로 숫자 만들고
        //한자리, 두자리, ... n자리 조합
    //소수 판별
    const getPermutation = (arr, countOfNumber) => {
        const result = [];
        if (countOfNumber === 1) {
            return arr.map((el) => [el]);
        }

        arr.forEach((fixed, index, origin) => {
            
            let rest = [...origin.slice(0, index), ...origin.slice(index+1)]
            
            let permutation = getPermutation(rest, countOfNumber-1)
            let attached = permutation.map((el) => [fixed, ...el])
            result.push(...attached)

        });

        return result;
    }


    let res = [];
    let array = numbers.split("");
    let check = {};

    for (let i = 1; i <= numbers.length; i++) {
        let a = getPermutation(array, i)
        console.log(a)
        for (let j = 0; j < a.length; j++) {
            let n = Number(a[j].join(""))
            
            if (isPrime(n) && !check[n]) {
                res.push(n)   
                check[n] = true;
            }
            
        }
      
    }
    console.log(res)
    answer = res.length;
    return answer;
}

function isPrime (number) {
    
    if (number < 2) {
        return false
    }
    if (number > 2 && number % 2 === 0) {
        return false
    }
    
    if (number > 3 && number % 3 === 0) {
        return false
    }
    let sqrt = Math.floor(Math.sqrt(number))
    
    for (let i = sqrt; i > 1; i--) {
        if (number % i === 0) {
            return false
        }
    }   
    
    return true
}

console.log(solution("7843"))

