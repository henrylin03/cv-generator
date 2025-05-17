import { createBrowserRouter, Navigate } from "react-router";
import LandingPage from "./pages/LandingPage";

const ContactInfoPage = () => <h1>Contact info page</h1>;

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/app",
		children: [
			{ index: true, element: <Navigate to="/app/contact" replace /> },
			{
				path: "contact",
				element: <ContactInfoPage />,
			},
		],
	},
]);

export default router;
