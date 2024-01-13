import {
	ShoppingBagIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<>
			<header className='p-4'>
				<nav className='flex justify-between'>
					<section>
						<h2>JH-STORE</h2>
					</section>
					<section>
						<ul className='flex gap-4'>
							<li>
								<div className='relative text-gray-400 focus-within:text-gray-600 block'>
									<MagnifyingGlassIcon className='pointer-events-none p-1 w-6 h-6 absolute transform -translate-y-1/2 top-1/2 right-0' />
									<input
										type='text'
										placeholder='search...'
										className='border rounded-lg px-2'
									/>
								</div>
							</li>
							<li>
								<NavLink to='/my-order'>My order</NavLink>
							</li>
							<li>
								<NavLink to='/sign-in'>Sign in</NavLink>
							</li>
							<li>
								<NavLink to='/my-account'>My account</NavLink>
							</li>
							<li className='flex flex-row'>
								<span>
									<ShoppingBagIcon className='h-6 w-6 text-blue-500' />
								</span>
								<span>0</span>
							</li>
						</ul>
					</section>
				</nav>
			</header>
		</>
	);
};
