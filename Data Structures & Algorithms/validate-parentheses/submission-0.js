class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [],
            matches = {
                ')': '(',
                '}': '{',
                ']': '['
            }

        for (let i = 0; i < s.length; i++) {
            const char = s.at(i)
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char)
            } else if (stack.at(-1) === matches[char]) {
                stack.pop()
            } else {
                return false
            }
        }

        return stack.length === 0

    }
}
