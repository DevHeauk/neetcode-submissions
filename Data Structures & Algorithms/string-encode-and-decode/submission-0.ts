class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let output = "";
        for (let str of strs) {
            output += `${str.length}#` + str;
        }

        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        
    const output: string[] = [];
    let i = 0;

    while (i < str.length) {
        const index = str.indexOf("#", i);          // i부터 탐색
        const length = Number(str.slice(i, index)); // 여러 자리 길이 처리
        output.push(str.slice(index + 1, index + 1 + length));
        i = index + 1 + length;                     // 다음 토큰 시작으로 점프
    }

    return output;
    }
}
