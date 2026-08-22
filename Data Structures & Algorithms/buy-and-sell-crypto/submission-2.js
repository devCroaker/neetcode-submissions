class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(p) {
        let l = 0,
            r = p.length-1,
            minl = p[0],
            maxr = p[p.length-1]

        while (l <= r) {
            if ((minl - p[l]) > (p[r] - maxr)) {
                if (p[l] < minl) {
                    minl = p[l]
                }
                l++
            } else {
                if (p[r] > maxr) {
                    maxr = p[r]
                }
                r--
            }
        }
        return Math.max((maxr - minl), 0)
    }
}
