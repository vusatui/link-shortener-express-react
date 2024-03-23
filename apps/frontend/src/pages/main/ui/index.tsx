import { useState } from "react";
import reactLogo from "../../../app/assets/react.svg";
import viteLogo from "/vite.svg";
import s from "./styles.module.css";
import cn from "classnames";

export const MainPage = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className={s.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={cn(s.logo, s.react)} alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={s.card}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={s.readTheDocs}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

