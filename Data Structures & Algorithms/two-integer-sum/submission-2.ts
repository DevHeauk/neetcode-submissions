class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // for, for

        // map? 

        const map = new Map<number, number>(); // val, index

        for (let i =0; i < nums.length; i++) {
            map.set(nums[i], i)
        }

        for (let i =0; i < nums.length; i++) { 
            const val = map.get(target - nums[i])
            if (val != null && val != i) {
                return [i, val]
            }
        }

        return []
    }
}
