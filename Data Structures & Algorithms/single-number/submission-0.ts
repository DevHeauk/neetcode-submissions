class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
       let result = 0;
       for (let num of nums) {  
        result = result ^ num; 
       } 

       return result
    }
}
