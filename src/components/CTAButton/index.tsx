import styles from "./CTAButton.module.css";

interface Props {
	text: string;
	className?: string;
}

const CTAButton = ({ text, className }: Props) => (
	<button
		type="button"
		className={className ? `${styles.button} ${className}` : styles.button}
		aria-label="Start creating your resume with CurriculumVitae"
	>
		{text}
	</button>
);

export default CTAButton;
