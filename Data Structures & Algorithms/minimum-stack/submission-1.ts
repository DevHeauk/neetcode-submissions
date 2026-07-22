type StackItem = {
    val : number,
    min: number
}

class MinStack {
    stack: StackItem[] = []

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push({val, min:val})
            return
        }
        const min = Math.min(this.stack[this.stack.length - 1].min, val)
        this.stack.push({val, min})
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1].val
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1].min
    }
}
