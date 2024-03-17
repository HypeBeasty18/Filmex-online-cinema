'use client'

import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideItem from './SlideItem'
import s from './Slider.module.scss'
import SlideArrow from './slideArrow/SlideArrow'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { slideIn, handleClick, index, isNext, isPrev } = useSlider(
		slides.length
	)

	const handleClickNext = () => {
		handleClick('next')
	}
	const handleClickPrev = () => {
		handleClick('prev')
	}


	return (
		<div className={s.slider}>
			<CSSTransition
				in={slideIn}
				classNames='slide-animation'
				timeout={400}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			<div className={s.arrows}>
				{isPrev && <SlideArrow variant='left' clickHandler={handleClickPrev} />}
				{isNext && (
					<SlideArrow variant='right' clickHandler={handleClickNext} />
				)}
			</div>
		</div>
	)
}

export default Slider
