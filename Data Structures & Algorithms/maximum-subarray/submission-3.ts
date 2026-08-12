class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        const dp: number[] = [];
        let max  = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                dp[i] = nums[i];
                max = Math.max(max, dp[i])
                continue
            }

            dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
            max = Math.max(max, dp[i])
        }

        return max
    }
}
