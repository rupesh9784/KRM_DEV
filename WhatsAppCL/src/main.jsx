import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import User from "./POC/useEffect/User";
import Routing_App from "./POC/Routing/Routing_App";
import App from "./App.jsx";
// import PropDrilling from "./POC/PropDrill/PropDrilling.jsx";
import PropDrillingSol from "./POC/PropDrill/PropDrillingSol.jsx";
import AuthWrapper from "./Components/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    <BrowserRouter>
      {/* <Routing_App /> */}
      <App></App>
    </BrowserRouter>
  </AuthWrapper>
  // <User></User>
  // <PropDrillingSol />
);
