class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const goal = nums.length - 1;

        const dp : boolean[] = [];
        function solve(idx:number, jump:number) {
            if (jump >= goal) {
                return true;
            }

            if (dp[idx] !== undefined) {
                return dp[idx];
            }

            const step = nums[idx];
            for (let i = 1; i <= step; i++) {
                if(solve(idx + i, jump+i)) {
                    dp[idx] = true;
                    return true;
                };
            }

            dp[idx] = false;
            return false
        }

        return solve(0, 0);
    }
}
