import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CreateNew, {
  action as CreateNewAction,
  loader as CreateNewLoader,
} from "./createNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateNew />,
    action: CreateNewAction,
    loader: CreateNewLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
