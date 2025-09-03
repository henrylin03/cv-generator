import type { JSX } from "react";
import CTAButton from "../../../components/CTAButton";
import stepOneImg from "./step1.png";
import stepTwoImg from "./step2.png";
import styles from "./StepsSection.module.css";

interface StepData {
	summary: string;
	description: string;
	imagePath: string;
}

const StepsSection = (): JSX.Element => {
	const stepsData: StepData[] = [
		{
			summary: "Fill out form",
			description:
				"Add your contact details, education, and professional experiences.",
			imagePath: stepOneImg,
		},
		{
			summary: "Download CV",
			description:
				"Download your customised CV as a PDF to submit it to your next job application.",
			imagePath: stepTwoImg,
		},
	];

	return (
		<section className={styles.section}>
			<div className={styles.textContainer}>
				<h2 className={styles.heading}>
					Land your next job interview in{" "}
					<span className={styles.highlightedText}>
						two simple steps
					</span>
				</h2>
			</div>

			<div className={styles.stepsGrid}>
				{stepsData.map((step, idx) => (
					<article key={idx} className={styles.step}>
						<img
							src={step.imagePath}
							alt={step.summary}
							className={styles.image}
						/>
						<div className={styles.textWrapper}>
							<p className={styles.stepNumber}>Step {idx + 1}</p>
							<h3 className={styles.stepHeading}>
								{step.summary}
							</h3>
							<p className={styles.paragraphText}>
								{step.description}
							</p>
						</div>
					</article>
				))}
			</div>

			<CTAButton text="Start creating resume" />
		</section>
	);
};

export default StepsSection;
