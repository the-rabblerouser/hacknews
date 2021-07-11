import Link from 'next/link';
import { useState } from 'react';

import {
	Collapse,
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar
				style={{ backgroundColor: '#ff6600' }}
				light
				expand='md'
				sticky={'top'}>
				<Container>
					<NavbarBrand href='/' style={{ color: 'inherit' }}>
						<img
							src='/y18.png'
							alt='Y'
							className='mb-1'
							style={{ border: ' 1px solid white' }}
						/>{' '}
						Hacker News
					</NavbarBrand>
					<NavbarToggler onClick={toggle} style={{ border: 'none' }} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='mr-auto' navbar>
							<NavItem>
								<Link href='/new' as={`/new`}>
									<NavLink href='/new' style={{ color: 'inherit' }}>
										new
									</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href='/best' as={`/best`}>
									<NavLink href='/front' style={{ color: 'inherit' }}>
										best
									</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href='/ask' as={`/ask`}>
									<NavLink href='/ask' style={{ color: 'inherit' }}>
										ask
									</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href='/show' as={`/show`}>
									<NavLink href='/show' style={{ color: 'inherit' }}>
										show
									</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href='/jobs' as={`/job`}>
									<NavLink href='/jobs' style={{ color: 'inherit' }}>
										jobs
									</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
