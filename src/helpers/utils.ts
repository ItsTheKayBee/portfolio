/**
 *
 * @param {string[]} classes list of all classes
 * @returns {string}
 */
export const classHelper = (...classes: string[]): string =>
  classes.reduce((prev, next) => prev + " " + next)

/**
 *
 * @param min
 * @param max
 * @returns random number
 */
export const getRandom = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
