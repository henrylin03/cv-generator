import type { JSX } from "react";
import Branding from "../../../components/Branding";
import CTAButton from "../../../components/CTAButton";
import styles from "./Header.module.css";

const Header = (): JSX.Element => (
	<header className={styles.header}>
		<div className={styles.flex}>
			<Branding />
			<CTAButton text="Create resume" className={styles.headerButton} />
		</div>
	</header>
);

export default Header;
