function fib(num, memo = []) {

    if (memo[num] != null) return memo[num]
    if (num < 3) return result = 1
    result = fib(num - 1, memo) + fib(num - 2, memo)
    memo[num] = result
    console.log(num)
    return result

}
