class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        const dp : number[][] = Array.from({length: m}, () => new Array(n).fill(-1));

        function solve (top: number, left: number): number {
            if (top > m -1 || left > n-1) {
                // 경계 벗어나면 0이고
                return 0;
            }

            if (top === m-1 && left === n-1) {
                // 끝점에서는 1이고
                return 1;
            }

            if (dp[top][left] > 0) {
                // 이미 계산된거면 메모 사용
                return dp[top][left];
            }

            dp[top][left] = solve(top+1, left) + solve(top, left+1);
            return dp[top][left];
        } 

        return solve(0,0);
    }
}
