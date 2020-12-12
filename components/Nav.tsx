import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DarkSwitch from './DarkSwitch'

const navItems: Array<{ name: string; url: string }> = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'People',
		url: '/People',
	},
	{
		name: 'Plants',
		url: '/Plants',
	},
	{
		name: 'Vehicals',
		url: '/Vehicals',
	},
]

const Nav = () => {
	return (
		<div className='flex bg-primary text-primary px-4 py-4 justify-between flex-1'>
			<figure>
				<Image src='/starwars-logo.png' alt='star wars' width='64' height='36' />
			</figure>
			<div className='flex justify-between'>
				<ul className='no-underline m-auto'>
					{navItems.map((item) => (
						<li key={item.name} className='inline-block px-2 hover:text-red-400'>
							<Link href={item.url}>
								<a>{item.name}</a>
							</Link>
						</li>
					))}
					<li className='inline-block px-2 text-center'>
						<DarkSwitch />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav
