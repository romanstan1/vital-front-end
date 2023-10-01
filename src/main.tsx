import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Home from "./components/Home";
import GlobalStyles from "./styles/global";
import { ModalProvider } from "./contexts/ModalContext";
import { PanelProvider } from "./contexts/PanelContext";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <PanelProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </ModalProvider>
    </PanelProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
