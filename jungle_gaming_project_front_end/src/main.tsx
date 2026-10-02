import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./index.css";
import { router } from "./router.jsx" ;

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
