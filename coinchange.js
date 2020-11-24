/*Limited supply coin change boolean */
const coinChange = (A, coins) => {
    coins.unshift(0)
    let T = Array.from(Array(A + 1), () => Array(coins.length + 1))
    T[0][0] = true
    for (b = 1; b <= A; b++) {
        T[b][0] = false
    }
    for (k = 1; k <= coins.length; k++) {
        for (b = 0; b <= A; b++) {
            T[b][k] = T[b][k - 1]
            if ((b >= coins[k]) && (!!T[b - coins[k]][k - 1])) {
                T[b][k] = true
            }

        }
    }
    console.log(T)
    return T[A][coins.length]
}
