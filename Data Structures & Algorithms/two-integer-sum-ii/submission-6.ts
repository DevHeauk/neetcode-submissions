class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left=0, right = numbers.length-1
  
        while (left < right) { 
            let sum = numbers[right] + numbers[left]; 
            if (sum === target) {
                return [left + 1, right +1] 
            } else if (sum > target) {
                right--; 
            } else {
                left++;
            }   
        }

        return [];
    }
}
