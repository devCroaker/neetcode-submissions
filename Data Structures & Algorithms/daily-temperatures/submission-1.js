class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const stack = [[0, temps[0]]],
              result = new Array(temps.length).fill(0)

        for (let i = 0; i < temps.length; i++) {
            while (stack.length > 0 && temps[i] > stack[stack.length-1][1]) {
                const last = stack.pop()
                result[last[0]] = i - last[0]
            }
            stack.push([i, temps[i]])
        }

        return result
    }
}
