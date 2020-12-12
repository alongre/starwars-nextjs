import React from 'react'
import Nav from './Nav'
import { Theme, ThemeProvider, THEME_KEY } from '../contexts/ThemeContext'
import useLocaleStorage from '../hooks/useLocaleStorage'

const Layout: React.FC = (props) => {
	return (
		<ThemeProvider>
			<Nav />
			<main>{props.children}</main>
		</ThemeProvider>
	)
}

export default Layout
