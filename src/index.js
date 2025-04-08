import ReactDOM from "react-dom/client";

// React Bootstrap Configuration
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);