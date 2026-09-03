class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let start = 0, end = nums.length - 1;

        while (start <= end) { 
            let middle = Math.floor((start + end) / 2);
            let middleNum = nums[middle];
            if (middleNum === target) {
                return middle;
            } else if (middleNum < target) {
                start = middle + 1; 
            } else {
                end = middle -1; 
            } 
        } 

        return -1;
    }
}