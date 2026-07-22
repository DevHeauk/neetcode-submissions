class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const open:string[] = []
        const pairs = {'(':')', '{':'}', '[':']'}

        for (let char of s) {
            if (char === '(' || char === '{'|| char === '[') {
                open.push(char)
            }

            if (char === ')' || char === '}' || char === ']') {
                if (pairs[open.pop()] === char) {
                    continue
                } else {
                    return false
                }
            }
        }
        if (open.length === 0) {
            return true
        } 

        return false
    }
}
