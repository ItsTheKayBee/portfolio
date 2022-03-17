import { KeyValue } from 'data/interface'

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