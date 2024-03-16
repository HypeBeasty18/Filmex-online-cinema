'use client'

import cn from 'clsx'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import s from './Form.module.scss'
import { ITextEditor } from './form.interface'

const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty()) // создаем пустое деволтное состояние для драфт js

	const [isUpdated, setIsUpdated] = useState<boolean>(false)

	useEffect(() => {
		if (isUpdated) return

		const defaultValue = value || ''
		const blockFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			blockFromHtml.contentBlocks,
			blockFromHtml.entityMap
		)

		const newEditorState = EditorState.createWithContent(contentState)

		setEditorState(newEditorState)
	}, [isUpdated, value])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	return (
		<div className={cn(s.common, s.editorWrapper, 'animate-fade')}>
			<label>
				<span>{placeholder}</span>
				<div className={s.wrapper}>
					<Editor
						toolbarClassName={s.toolbar}
						editorClassName={s.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						// toolbar={{}}
					/>
				</div>
				{error && <div className={s.error}>{error}</div>}
			</label>
		</div>
	)
}

export default TextEditor
