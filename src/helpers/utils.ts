import { KeyValue, Position } from 'data/interface'

/**
 *  Returns difference between 2 dates
 */
export const getDateDifference = (date1: Date, date2: Date): KeyValue => {
	const timeStamp1 = date1.getTime()
	const timeStamp2 = date2.getTime()
	const timeDiff = Math.abs(timeStamp1 - timeStamp2)

	const monthsDifference = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 30))

	if (monthsDifference >= 12) {
		return {
			title: Math.floor(monthsDifference / 12) === 1 ? 'Year' : 'Years',
			value: Math.floor(monthsDifference / 12)
		}
	}
	return {
		title: 'Months',
		value: monthsDifference
	}
}

/*
 * gives random number between [min] and [max]
 */
export const getRandomNumber = (min: number, max: number): number =>
	Math.random() * (max - min) + min

// map a number from 1 range to another
export const mapInRange = (
	n: number,
	start1: number,
	end1: number,
	start2: number,
	end2: number
): number => ((n - start1) / (end1 - start1)) * (end2 - start2) + start2

export const distance = (p1: Position, p2: Position): number =>
	Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

export const detectCollision = (
	p1: Position,
	p2: Position,
	r1: number,
	r2: number
): boolean => distance(p1, p2) <= r1 + r2
