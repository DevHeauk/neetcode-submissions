class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let nums : number[] = []
        for (let token of tokens) {
            const tokenNum = Number(token)
            if (isNaN(tokenNum)) {
                const b = nums.pop()
                const a = nums.pop()
                nums.push(this.calcFunc(a,b,token))
            } else {
                nums.push(tokenNum)
            }
        }

        return nums[0]
    }

    calcFunc(a: number, b:number, operator: string) {

        switch(operator) {
            case '*': 
                return a * b
            case '-':
                return a - b
            case '+': 
                return a + b
            case '/':
                return Math.trunc(a / b)
            default:
                throw Error("unknown operator")
        }
    }
}
