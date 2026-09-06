class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let bit = 0;
        // 
        for (let i = 0; i<= nums.length; i++) {
            bit = bit ^ i; 
        } 

        for (let num of nums) {
            bit = bit ^ num;
        }

        return bit
    }
}
