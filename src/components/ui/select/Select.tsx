import { FC } from 'react'
import { OnChangeValue } from 'react-select'
import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'

import formStyles from '../form-elements/Form.module.scss'

import s from './Select.module.scss'
import { IOption, ISelect } from './select.interface'
import '@/assets/styles/react-select.scss'
const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	options,
	field,
	placeholder,
	error,
	isMulti,
	isloading
}) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map(item => item.value)
				: (newValue as IOption).value
		)
	}

	const getValues = () => {
		if (field.value) {
			return isMulti
				? options.filter(option => field.value.indexOf(option.value) >= 0)
				: options.find(option => option.value === field.value)
		} else return isMulti ? [] : null
	}

	return (
		<div className={s.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix='custom-select'
					options={options}
					value={getValues()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isloading}
				/>
			</label>
			{error && <div className={formStyles.error}>{error}</div>}
		</div>
	)
}

export default Select
