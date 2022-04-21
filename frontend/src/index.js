import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/web.scss"
import "antd/dist/antd.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);