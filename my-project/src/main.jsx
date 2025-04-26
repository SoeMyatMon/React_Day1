import "./index.css"; // Correct way to import CSS
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.querySelector("#root");
createRoot(root).render(<App />); // Render with JSX syntax
