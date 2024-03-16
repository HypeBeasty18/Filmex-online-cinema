export const getGenreslist = (index: number, length: number, name: string) => {
	return index + 1 === length ? name : name + ','
}

interface IArrayItem {
	name: string
}

export const getGenresLists = (array: IArrayItem[]) => {
	return array.map(item => item.name).join(', ')
}
