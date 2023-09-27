import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/global";
import { ModalProvider } from "./contexts/ModalContext";

const Main = () => {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <Main />
    </>
  </React.StrictMode>
);
