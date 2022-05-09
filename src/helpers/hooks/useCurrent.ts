import { useState } from 'react'

export const useCurrent = (max: number) => {
	const [current, setCurrent] = useState(0)

	const switchCurrent = (sign = 1) => {
		setCurrent(curr => Math.max(0, Math.min(max - 1, curr + sign)))
	}

	return { current, switchCurrent }
}
