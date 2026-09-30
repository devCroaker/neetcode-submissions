class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const length = 9
        const columns = Array.from({ length }, () => new Set())
        const boxes = Array.from({ length }, () => new Set())

        for (let r = 0; r < 9; r++) {
            const seen = new Set()
            for (let c = 0; c < 9; c++) {
                const num = board[r][c]
                if (num === ".") continue
                if (seen.has(num)) return false
                seen.add(num)

                if (columns[c].has(num)) return false
                columns[c].add(num)

                let box = 0
                if (r > 2) box += 3
                if (r > 5) box += 3
                if (c > 2) box++
                if (c > 5) box++
                if (boxes[box].has(num)) return false
                boxes[box].add(num)
            }
        }

        return true

    }
}
