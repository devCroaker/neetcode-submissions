class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 1) return [0]

        const datums = []
        let prev = 1
        for (let i = 0; i < nums.length; i++) {
            datums.push([prev, 1])
            prev = prev * nums[i]
        }

        prev = 1
        for (let i = nums.length-1; i >= 0; i--) {
            datums[i][1] = prev
            prev = prev * nums[i]
        }

        return datums.map(datum => datum[0] * datum[1])
    }
}
