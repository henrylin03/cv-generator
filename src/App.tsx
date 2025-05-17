import type { JSX } from "react";
import { RouterProvider } from "react-router";
import router from "./router";

const App = (): JSX.Element => <RouterProvider router={router} />;

export default App;
