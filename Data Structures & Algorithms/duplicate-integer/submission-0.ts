class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // bit manipulation
        // set

        const set = new Set<number>()
        for (let num of nums) {
            if (set.has(num)) {
                return true;
            }else {
                set.add(num);
            }

        }

        return false; 
    }
}
