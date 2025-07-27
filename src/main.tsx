import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./reset.scss";
import "./index.scss";
import { LanguageProvider } from "./context/LanguageContext";
import GlobalErrorBoundary from "./components/GlobalErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <LanguageProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </LanguageProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>
);
