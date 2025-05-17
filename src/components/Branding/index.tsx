import type { JSX } from "react";
import styles from "./Branding.module.css";

interface BrandingProps {
	className?: string;
}

const Branding = ({ className }: BrandingProps): JSX.Element => (
	<a
		className={
			className ? `${className} ${styles.branding}` : styles.branding
		}
		href="#"
	>
		<img
			src="/logo.png"
			alt="Logo of CurriculumVitae"
			className={styles.logo}
		/>
		<h1 className={styles.brandingText}>CurriculumVitae</h1>
	</a>
);

export default Branding;
