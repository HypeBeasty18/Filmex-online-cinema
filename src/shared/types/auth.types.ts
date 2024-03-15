export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type TypeComponentAuthFields = {
	Component: TypeRoles
	children: React.ReactNode
}
