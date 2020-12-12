import react, { useEffect, createContext, useMemo, useState } from 'react'
import React from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'
export type Theme = 'light' | 'dark'
export const ThemeContext = createContext<{ theme: Theme; setTheme: (value: Theme) => void }>(null)

export const THEME_KEY = 'theme'

export const ThemeProvider: React.FC = (props) => {
	const [theme, setTheme] = useLocaleStorage<Theme>(THEME_KEY, 'dark')

	useEffect(() => {
		if (theme) {
			const root = window?.document?.documentElement
			const isDark = theme === 'dark'
			root.classList.remove(isDark ? 'light' : 'dark')
			root.classList.add(theme)
		}
	}, [theme])

	return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
}
