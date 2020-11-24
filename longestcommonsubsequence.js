const longestCommonSubsequencePointersMemo = (str1, str2, n = -1, m = -1, memo) => {
    if (typeof (str1) === "string") str1 = str1.split("")
    if (typeof (str2) === "string") str2 = str2.split("")
    if (n === -1) n = str1.length
    if (m === -1) m = str2.length
    if (memo === undefined) memo = Array.from(Array(n + 1), () => new Array(m + 1))
    if (memo[n][m] != null) return memo[n][m]
    if (n === 0 || m === 0) result = 0
    else if (str1[n - 1] === str2[m - 1]) {
        result = 1 + longestCommonSubsequencePointersMemo(str1, str2, n - 1, m - 1, memo)
    }
    else if (str1[n - 1] != str2[m - 1]) {
        result = Math.max(longestCommonSubsequencePointersMemo(str1, str2, n, m - 1, memo),
            longestCommonSubsequencePointersMemo(str1, str2, n - 1, m, memo))
    }
    memo[n][m] = result
    return result
}
