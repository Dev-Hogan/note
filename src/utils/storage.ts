export function setLocal(key: string, val: any) {
	if (window) {
		return localStorage.setItem(key, JSON.stringify(val))
	} else {
		console.error("need window")
	}
}

export function getLocal(key: string) {
	if (window) {
		const value = localStorage.getItem(key)
		return value ? JSON.parse(value) : undefined
	} else {
		console.error("need window")
	}
}
