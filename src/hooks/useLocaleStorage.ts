import React, { useState, useEffect } from 'react'

const useLocaleStorage = <T>(key: string, initialValue: T) => {
	const [storedValue, setStoredValue] = useState<T>(null)

	useEffect(() => {
		const item = window?.localStorage?.getItem(key)
		setStoredValue(item ? JSON.parse(item) : initialValue)
	}, [])

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window?.localStorage?.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.log(error)
		}
	}

	return [storedValue, setValue] as const
}

export default useLocaleStorage
