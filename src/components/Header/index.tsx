import Link from "next/link";
import { APP_STEPS as PAGES } from "@/appSteps";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					{PAGES.map((page) => (
						<li key={page.route}>
							<Link href={page.route}>{page.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
