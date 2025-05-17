import type { JSX } from "react";
import { Link } from "react-router";
import styles from "./CTAButton.module.css";

interface CTAButtonProps {
	text: string;
	className?: string;
}

const CTAButton = ({ text, className }: CTAButtonProps): JSX.Element => (
	<Link to="/app">
		<button
			type="button"
			className={
				className ? `${styles.button} ${className}` : styles.button
			}
			aria-label="Start creating your resume with CurriculumVitae"
		>
			{text}
		</button>
	</Link>
);

export default CTAButton;
