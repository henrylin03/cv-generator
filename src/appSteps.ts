export const APP_STEPS = [
	{ title: "Contact details", route: "/contact-details" },
	{ title: "Education", route: "/education" },
	{ title: "Experience", route: "/experience" },
	{ title: "Preview", route: "/preview" },
] as const;

type PageRoute = (typeof APP_STEPS)[number]["route"];

export const getNextStepRoute = (
	currentPathName: PageRoute,
): PageRoute | null => {
	const idxOfLastStep = APP_STEPS.length - 1;
	const currentStepObject = APP_STEPS.find(
		(step) => step.route === currentPathName,
	);
	if (!currentStepObject) return null;

	const idxOfCurrentStep = APP_STEPS.indexOf(currentStepObject);
	if (idxOfCurrentStep === idxOfLastStep) return null;

	return APP_STEPS[idxOfCurrentStep + 1].route;
};

export const getPreviousStepRoute = (
	currentPathName: PageRoute,
): PageRoute | null => {
	const currentStepObject = APP_STEPS.find(
		(step) => step.route === currentPathName,
	);
	if (!currentStepObject) return null;

	const idxOfCurrentStep = APP_STEPS.indexOf(currentStepObject);
	if (idxOfCurrentStep === 0) return null;

	return APP_STEPS[idxOfCurrentStep - 1].route;
};
