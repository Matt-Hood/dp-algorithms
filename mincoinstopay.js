/*Limited supply coin change min coins */
const coinChangeMin = (A, coins) => {
    coins.unshift(0)
    let T = Array.from(Array(A + 1), () => Array(coins.length + 1))
    T[0][0] = 0
    for (b = 1; b <= A; b++) {
        T[b][0] = Infinity
    }
    for (k = 1; k <= coins.length; k++) {
        for (b = 0; b <= A; b++) {
            T[b][k] = T[b][k - 1]
            if (b >= coins[k]) {
                T[b][k] = Math.min(T[b][k - 1], T[b - coins[k]][k - 1] + 1)
            }
        }
    }
    return T[A][coins.length]
}
