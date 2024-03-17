
import {  useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [slideIn, setSlideIn] = useState<boolean>(true)

	const isExistsNext = currentIndex < length - 1
	const isExistsPrev = currentIndex > 0

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1

		setSlideIn(false)

		setTimeout(() => {
			setCurrentIndex(newIndex)
			setSlideIn(true)
		}, 400)
	}

	return {
		slideIn,
		index: currentIndex,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
		handleClick: handleArrowClick
	}
}
