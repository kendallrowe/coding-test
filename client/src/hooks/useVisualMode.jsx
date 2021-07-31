import { useState } from "react";

const useVisualMode = FIRST => {
    const [mode, setMode] = useState(FIRST);

    const transition = SECOND => setMode(SECOND);

    return {
        mode,
        transition
    };
};

export { useVisualMode };