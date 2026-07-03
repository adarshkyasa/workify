import React from "react";

function LandingPage(){
	return (
		<div>
			<main className='flex-grow'>
				<section className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl'>
						The <span class='text-[#4f39f6]'>Smart</span> Way to Manage Your
						Workday
					</h1>
					<p className='mt-6 text-lg max-w-2xl mx-auto text-slate-500'>
						Empower your team with an intuitive, self-service platform designed
						for the modern workforce. From real-time attendance tracking to
						instant profile management, Workify simplifies daily HR operations
						with a beautifully responsive experience that works wherever you do.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<button className='rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'>
							Explore Features
						</button>
						<button className='text-sm font-semibold text-slate-900 flex items-center gap-1 hover:text-indigo-600'>
							Learn more <span aria-hidden='true'>→</span>
						</button>
					</div>
				</section>

				<section
					id='features'
					className='bg-white py-24 sm:py-32 border-t border-slate-100'
				>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='mx-auto max-w-2xl text-center'>
							<h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
								Everything you need
							</h2>
							<p className='mt-4 text-slate-500'>
								A seamless layout configuration out of the box using React and
								Tailwind CSS utilities.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default LandingPage;
