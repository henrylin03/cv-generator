import type { JSX } from "react";
import { IconBrandGithub, IconFlag } from "@tabler/icons-react";
import Branding from "../../../components/Branding";
import styles from "./Footer.module.css";

interface FooterLink {
	description: string;
	label: string;
	linkTo: string;
	icon: JSX.Element;
}

const Footer = (): JSX.Element => {
	const linksData: FooterLink[] = [
		{
			description: "Contribute",
			linkTo: "https://github.com/henrylin03/cv-generator",
			label: "Contribute to the codebase",
			icon: <IconBrandGithub />,
		},
		{
			description: "Report bug",
			linkTo: "https://github.com/henrylin03/cv-generator/issues/new",
			label: "Report a bug with website",
			icon: <IconFlag />,
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<p className={styles.small}>Designed & built by Henry Lin</p>
				<Branding className={styles.branding} />
				<div className={styles.links}>
					{linksData.map((link, idx) => (
						<a
							key={idx}
							className={styles.link}
							href={link.linkTo}
							target="_blank"
							aria-label={link.label}
						>
							<figure className={styles.icon}>{link.icon}</figure>
							<p className={styles.label}>{link.description}</p>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
