import React, { useState, useContext, useEffect } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Theme, THEME_KEY, ThemeContext } from '../contexts/ThemeContext'

const DarkSwitch = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	// const [darkMode, setDarkMode] = useState<Theme>(() => theme)

	// useEffect(() => {
	// 	setTheme(darkMode)
	// }, [darkMode])

	return (
		<button className='w-4 h-4' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'dark' ? <FaMoon /> : <FaSun />}
		</button>
	)
}

export default DarkSwitch
