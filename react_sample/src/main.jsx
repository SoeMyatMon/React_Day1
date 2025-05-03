import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";

const root = document.querySelector("#root");
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

createRoot(root).render(<App />);
