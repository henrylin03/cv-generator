import Link from "next/link";
import styles from "./Header.module.css";

interface Page {
	title: string;
	route: string;
}

const Header = () => {
	const PAGES: Page[] = [
		{ title: "Contact details", route: "/contact-details" },
		{ title: "Education", route: "/education" },
		{ title: "Experience", route: "/experience" },
		{ title: "Preview", route: "/preview" },
	];

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
