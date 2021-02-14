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
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar color="light" light expand="md" sticky={'top'}>
				<Container>
					<NavbarBrand href="/">
						<img src="/y18.png" alt="Y" className="mb-1" /> Hacker News
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link href="/new" as={`/new`}>
									<NavLink href="/new">new</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/front" as={`/front`}>
									<NavLink href="/front">past</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href="/newcomments" as={`/newcomments`}>
									<NavLink href="/newcomments">comments</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href="/ask" as={`/ask`}>
									<NavLink href="/ask">ask</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href="/show" as={`/show`}>
									<NavLink href="/show">show</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link href="/jobs" as={`/jobs`}>
									<NavLink href="/jobs">jobs</NavLink>
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
