class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    trap(h) {
        let total = 0,
            l = 0,
            r = h.length-1,
            ml = 0,
            mr = 0

        while (l < r) {
            if (h[l] < h[r]) {
                if (h[l] >= ml) {
                    ml = h[l]
                } else {
                    total += ml - h[l]
                }
                l++
            } else {
                if (h[r] >= mr) {
                    mr = h[r]
                } else {
                    total += mr - h[r]
                }
                r--
            }
        }

        

        return total
    }
}
