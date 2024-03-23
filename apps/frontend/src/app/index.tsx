import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./providers";
import { router } from "./router.tsx";
import { queryClient } from "../shared/api";
import "reset-css/reset.css";
import "@radix-ui/themes/styles.css";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Providers router={router} queryClient={queryClient} />
    </React.StrictMode>,
);
