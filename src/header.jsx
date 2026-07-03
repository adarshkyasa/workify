// Header.jsx
import {React,  useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className='mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
				{/* Logo - Wrap in Link to take user back to home "/" */}
				<Link to='/' className='flex items-center gap-2'>
					<span className='h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg'>
						W
					</span>
					<span className='text-xl font-bold tracking-tight text-slate-900'>
						Workify
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-8 text-sm font-medium text-slate-600'>
					{/* 2. Changed <a> to <Link> and href to 'to="/Employees"' */}
					<Link
						to='/Employees'
						className='transition-colors hover:text-indigo-600'
					>
						All Employees
					</Link>
					<Link
						to='#salary'
						className='transition-colors hover:text-indigo-600'
					>
						Salary
					</Link>
					<Link
						to='#attendance'
						className='transition-colors hover:text-indigo-600'
					>
						Attendance
					</Link>
					<Link
						to='#profile'
						className='transition-colors hover:text-indigo-600'
					>
						Profile
					</Link>
				</nav>

				{/* Action Buttons */}
				<div className='hidden md:flex items-center gap-4'>
					<Link
						to='#login'
						className='text-sm font-medium text-slate-600 hover:text-slate-900'
					>
						Sign in
					</Link>
					<Link
						to='#signup'
						className='rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors'
					>
						Get started
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className='flex md:hidden'>
					<button
						type='button'
						onClick={() => setIsOpen(!isOpen)}
						className='inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
						aria-controls='mobile-menu'
						aria-expanded={isOpen}
					>
						<span className='sr-only'>Open main menu</span>
						{isOpen ? (
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			{isOpen && (
				<div
					className='md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg'
					id='mobile-menu'
				>
					{/* 3. Changed mobile links to <Link> components as well */}
					<Link
						to='/Employees'
						onClick={() => setIsOpen(false)} // Closes menu when clicked
						className='block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
					>
						All Employees
					</Link>
					<Link
						to='#templates'
						className='block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
					>
						Templates
					</Link>
					<Link
						to='#pricing'
						className='block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
					>
						Pricing
					</Link>
					<Link
						to='#docs'
						className='block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
					>
						Docs
					</Link>
					<hr className='my-2 border-slate-200' />
					<Link
						to='#login'
						className='block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50'
					>
						Sign in
					</Link>
					<Link
						to='#signup'
						className='block text-center rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-500'
					>
						Get started
					</Link>
				</div>
			)}
		</div>
	);
}
