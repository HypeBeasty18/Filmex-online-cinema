import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import s from './Slider.module.scss'
import { ISlide } from './slider.interface'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	const handleClick = () => {
		push(slide.link)
	}

	return (
		<>
			<div className={s.slide}>
				{slide.bigPoster && (
					<Image
						src={slide.bigPoster}
						alt={slide.title}
						fill
						className={s.image}
						draggable={false}
						priority
						unoptimized
					/>
				)}
				<div className={s.content}>
					<div className={s.heading}>{slide.title}</div>
					<div className={s.subHeading}>{slide.subTitle}</div>
					<button className={s.button} onClick={handleClick}>
						{buttonTitle}
					</button>
				</div>
			</div>
		</>
	)
}

export default SlideItem
