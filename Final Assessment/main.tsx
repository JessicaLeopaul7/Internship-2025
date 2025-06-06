import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CategoryProvider } from "./context/CategoryContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </StrictMode>
);
