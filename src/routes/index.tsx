import App from "@/App";
import HomePage from "@/pages/User/HomePage";
import Register from "@/pages/User/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: HomePage,
                index: true
            }
        ]
    },

    {
        Component: Register,
        path: "/register"
    }
])