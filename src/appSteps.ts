interface AppPage {
	title: string;
	route: string;
}

export const APP_STEPS: AppPage[] = [
	{ title: "Contact details", route: "/contact-details" },
	{ title: "Education", route: "/education" },
	{ title: "Experience", route: "/experience" },
	{ title: "Preview", route: "/preview" },
];
