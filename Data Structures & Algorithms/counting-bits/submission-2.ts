class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const result = [];
        // ans[i] = ans[i & i-1] + 1
        const ans = [];
        for (let i =0; i <= n; i++) {
            let count = 0;
            let num = i;
            if (i > 0 && ans[i & i - 1]) {
                ans[i] = ans[i & i - 1] + 1;
                result.push(ans[i]);
                continue;
            }

            while (num > 0) {
                num = num & (num-1);
                count++; 
            }
            ans[i] = count;
            result.push(count); 
        }
        return result
    }
}
