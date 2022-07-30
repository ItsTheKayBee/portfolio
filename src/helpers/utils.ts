/**
 *
 * @param {string[]} classes list of all classes
 * @returns
 */
export const classHelper = (...classes: string[]) =>
	classes.reduce((prev, next) => prev + ' ' + next)

/**
 *
 * @param min
 * @param max
 * @returns random number
 */
export const getRandom = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min)) + min
