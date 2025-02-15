import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provider is used to connect react-redux to react app */}
    {/* main.jsx is the root entry point of the app, so we wrap the entire app with Provider component */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
