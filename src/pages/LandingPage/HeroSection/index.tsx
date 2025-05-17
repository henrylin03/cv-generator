import type { JSX } from "react";
import CTAButton from "../../../components/CTAButton";
import styles from "./HeroSection.module.css";

const HeroSection = (): JSX.Element => (
	<section className={styles.hero}>
		<div className={styles.inner}>
			<div className={styles.textContainer}>
				<h1 className={styles.bigText}>
					Generate your professional CV for free
				</h1>
				<p className="paragraphText">
					Make a professional resume within minutes to help you land
					your dream job.
				</p>
				<CTAButton text="Create a new resume" />
			</div>
			<img
				className={styles.img}
				src="/heroImg.png"
				alt="A happy jobseeker after generating his curriculum vitae with the CurriculumVitae tool, helping take his job search to the next level"
				width="100%"
				height="100%"
			/>
		</div>
	</section>
);

export default HeroSection;
