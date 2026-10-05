class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []

        for (let i = 0; i < position.length; i++) {
            cars.push({
                start: position[i],
                mph: speed[i],
                remaining: target - position[i],
                hours: (target - position[i]) / speed[i]
            })
        }

        cars.sort((a, b) => a.start - b.start)

        let count = 0,
            last = undefined

        for (let i = cars.length-1; i >= 0; i--) {
            if (cars[i].hours < last) cars[i].hours = last

            last = cars[i].hours
        }

        last = 0
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].hours !== last) count++

            last = cars[i].hours
        }

        return count

    }
}
