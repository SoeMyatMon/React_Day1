import "./index.css";
import { createRoot } from "react-dom/client";

import router from "./route/router";

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router} />);
