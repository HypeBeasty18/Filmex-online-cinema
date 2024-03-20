'use client'

import cn from 'clsx'
import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import MaterialIcon from '../MaterialIcon'
import SkeletonLoader from '../SkeletonLoader'

import s from './VideoPlayer.module.scss'
import AuthPlaceholder from './authPlaceholder/AuthPlaceholder'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.inteface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSrc }) => {
	const { actions, video, videoRef } = useVideo()

	const { user } = useAuth()

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
			{isClient ? (
				<div className={cn(s.wrapper, { 'h-96': !user })}>
					{user ? (
						<>
							<video
								ref={videoRef}
								src={videoSrc}
								className='video'
								preload='metadata'
								controls={false}
								onClick={() => actions.toggleVideo()}
							/>

							<div className={s.progressBarContainer}>
								<div
									style={{ width: `${video.progress}%` }}
									className={s.progressBar}
								></div>
							</div>

							<div className={s.controls}>
								<div>
									<button onClick={actions.revert}>
										<MaterialIcon name='MdHistory' />
									</button>

									<button onClick={actions.toggleVideo}>
										<MaterialIcon
											name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
										/>
									</button>

									<button onClick={actions.forward}>
										<MaterialIcon name='MdUpdate' />
									</button>

									<div className={s.timeControls}>
										<p className={s.controlsTime}>
											{Math.floor(video.currentTime / 60) +
												':' +
												('0' + Math.floor(video.currentTime % 60)).slice(-2)}
										</p>
										<p> / </p>
										<p className={s.controlsTime}>
											{Math.floor(video.videoTime / 60) +
												':' +
												('0' + Math.floor(video.videoTime % 60)).slice(-2)}
										</p>
									</div>
								</div>
								<div>
									<button onClick={actions.fullScreen}>
										<MaterialIcon name='MdFullscreen' />
									</button>
								</div>
							</div>
						</>
					) : (
						<AuthPlaceholder slug={slug} />
					)}
				</div>
			) : (
				<SkeletonLoader className='h-96 mt-12 rounded-2xl animate-fade' />
			)}
		</>
	)
}

export default VideoPlayer
