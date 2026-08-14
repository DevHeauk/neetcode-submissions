class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        // brute force

        // calc every thing by recursive
        // and find min jump
        // and with memo

        // but..

        // more focus to the goal...
        let curEnd = 0;
        let farthest = 0;
        let jumpCount = 0;

        for (let i = 0; i< nums.length -1 ;i++) {
            farthest = Math.max(i + nums[i], farthest)
            if (i === curEnd) {
                jumpCount++;
                curEnd= farthest
            }            
        }

        return jumpCount;
    }
}
