import Layout from "@/components/layout/Layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: Layout,
        path: "/",
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {
                path: "/rides",
                element: <div>Rides</div>,
            },
            {
                path: "/drivers",
                element: <div>Drivers</div>,
            },
            {
                path: "/vehicles",
                element: <div>Vehicles</div>,
            },
            {
                path: "/reports",
                element: <div>Reports</div>,
            },
            {
                path: "/dashboard",
                element: <div>Dashboard</div>,
            },
        ]
    }
])