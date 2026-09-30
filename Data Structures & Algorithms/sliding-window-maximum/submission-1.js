class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let l = 0,
            r = 0,
            max = nums[0],
            res = []

        while (r < nums.length) {
            if (nums[r] > max) max = nums[r]

            r++
            if (r - l === k) {
                res.push(max)
                if (nums[l] === max) {
                    max = -Infinity
                    let tmp = l + 1
                    while (tmp <= r) {
                        if (nums[tmp] > max) max = nums[tmp]
                        tmp++
                    }
                }
                
                l++
            }
            
        }

        return res

    }
}
