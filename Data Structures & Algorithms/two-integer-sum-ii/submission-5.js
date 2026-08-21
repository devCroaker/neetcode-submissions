class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
            let a = 0
            let b = numbers.length-1

            while (a < b) {
                const currentSum = numbers[a] + numbers[b]
                if (currentSum === target) {
                    return [a+1, b+1]
                } else if (currentSum < target) {
                    a++
                } else {
                    b--
                }
            }
    }
}
