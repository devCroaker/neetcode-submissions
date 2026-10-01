class MinStack {


    constructor() {
        this._minStack = []
        this._stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this._stack.push(val)
        if (this._minStack.length > 0) {
            const curr = this._minStack.at(-1)
            console.log(curr, val)
            this._minStack.push(curr < val ? curr : val)
        } else {
            this._minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this._stack.pop()
        this._minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this._stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this._minStack.at(-1)
    }
}
