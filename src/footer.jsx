import React from "react";

export default function Footer() {
	return (
		<footer className='bg-slate-900 text-slate-400'>
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
				<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
					{/* Brand/Newsletter Grid Column */}
					<div className='space-y-8 xl:col-span-1'>
						<div className='flex items-center gap-2 text-white'>
							<span className='h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-lg'>
								S
							</span>
							<span className='text-xl font-bold tracking-tight'>Salient</span>
						</div>
						<p className='text-sm max-w-md'>
							Making modern UI development simpler, faster, and more accessible
							for engineering teams everywhere.
						</p>
						{/* Simple newsletter entry */}
						<form className='sm:flex max-w-md gap-2'>
							<label htmlFor='email-address' className='sr-only'>
								Email address
							</label>
							<input
								type='email'
								name='email-address'
								id='email-address'
								required
								className='w-full rounded-md border-0 bg-white/5 px-4 py-2 text-sm text-white placeholder-slate-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500'
								placeholder='Stay updated'
							/>
							<button
								type='submit'
								className='mt-2 flex w-full items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 sm:mt-0 sm:w-auto'
							>
								Subscribe
							</button>
						</form>
					</div>

					{/* Links Columns */}
					<div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3'>
						<div>
							<h3 className='text-sm font-semibold text-slate-200 tracking-wider uppercase'>
								Product
							</h3>
							<ul className='mt-4 space-y-2 text-sm'>
								<li>
									<a
										href='#features'
										className='hover:text-white transition-colors'
									>
										Features
									</a>
								</li>
								<li>
									<a
										href='#pricing'
										className='hover:text-white transition-colors'
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href='#templates'
										className='hover:text-white transition-colors'
									>
										Templates
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className='text-sm font-semibold text-slate-200 tracking-wider uppercase'>
								Resources
							</h3>
							<ul className='mt-4 space-y-2 text-sm'>
								<li>
									<a
										href='#docs'
										className='hover:text-white transition-colors'
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href='#changelog'
										className='hover:text-white transition-colors'
									>
										Changelog
									</a>
								</li>
								<li>
									<a
										href='#blog'
										className='hover:text-white transition-colors'
									>
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div className='col-span-2 sm:col-span-1'>
							<h3 className='text-sm font-semibold text-slate-200 tracking-wider uppercase'>
								Company
							</h3>
							<ul className='mt-4 space-y-2 text-sm'>
								<li>
									<a
										href='#about'
										className='hover:text-white transition-colors'
									>
										About
									</a>
								</li>
								<li>
									<a
										href='#careers'
										className='hover:text-white transition-colors'
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href='#privacy'
										className='hover:text-white transition-colors'
									>
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs'>
					<p>
						&copy; {new Date().getFullYear()} Salient Labs Inc. All rights
						reserved.
					</p>
					<div className='flex gap-6'>
						<a href='#twitter' className='hover:text-white transition-colors'>
							Twitter
						</a>
						<a href='#github' className='hover:text-white transition-colors'>
							GitHub
						</a>
						<a href='#discord' className='hover:text-white transition-colors'>
							Discord
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
