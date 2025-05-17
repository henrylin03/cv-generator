import type { JSX } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StepsSection from "./StepsSection";
import Footer from "./Footer";
import styles from "./LandingPage.module.css";

const LandingPage = (): JSX.Element => (
	<>
		<Header />
		<main>
			<HeroSection />
			<StepsSection />
		</main>
		<Footer />
	</>
);

export default LandingPage;
