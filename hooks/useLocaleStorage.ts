import React, { useState, useEffect } from 'react'

const useLocaleStorage = <T>(key: string, initialValue: T) => {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<T>(null)

	useEffect(() => {
		const item = window?.localStorage?.getItem(key)
		setStoredValue(item ? JSON.parse(item) : initialValue)
	}, [])

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T | ((val: T) => T)) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? value(storedValue) : value
			// Save state
			setStoredValue(valueToStore)
			// Save to local storage
			window?.localStorage?.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error)
		}
	}

	return [storedValue, setValue] as const
}

export default useLocaleStorage
