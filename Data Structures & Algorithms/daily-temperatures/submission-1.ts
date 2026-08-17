class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);
        const stack = new Array<number>;

        for (let i=0; i< temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const popped = stack.pop()
                result[popped] = i - popped;
            }
            stack.push(i);
        }

        return result;
    }
}
