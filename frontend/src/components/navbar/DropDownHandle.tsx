import { useCallback, useEffect, useRef } from "react";

function useClickOutside(handler: () => void | Promise<void>, enabled = true) {
    const ref = useRef<HTMLDivElement | null>(null);

    const handleClick = useCallback(
        (event: MouseEvent) => {
            const target = event.target as Node | null;
            if (ref.current && target && !ref.current.contains(target)) {
                void handler();
            }
        },
        [handler]
    );

    useEffect(() => {
        if (enabled) {
            document.addEventListener("mousedown", handleClick);
            return () => document.removeEventListener("mousedown", handleClick);
        }
    }, [handleClick, enabled]);

    return ref;
}

export default useClickOutside;
