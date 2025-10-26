"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNextStepRoute, getPreviousStepRoute } from "@/appSteps";

const Footer = () => {
	const currentPath = usePathname();
	const previousStepRoute = getPreviousStepRoute(currentPath);
	const nextStepRoute = getNextStepRoute(currentPath);

	return (
		<footer>
			{previousStepRoute && <Link href={previousStepRoute}>Previous step</Link>}
			{nextStepRoute && <Link href={nextStepRoute}>Next step</Link>}
		</footer>
	);
};

export default Footer;
