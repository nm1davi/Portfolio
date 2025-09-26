import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function useGlobalLoader({
    initialMs = 2000,
    routeMinMs = 500,
    externalClickMs = 600
} = {}) {
    const [visible, setVisible] = useState(true);
    const hideTimer = useRef(null);
    const location = useLocation();
    const navType = useNavigationType(); // POP / PUSH / REPLACE

    // Loader inicial (2s)
    useEffect(() => {
        hideTimer.current = setTimeout(() => setVisible(false), initialMs);
        return () => clearTimeout(hideTimer.current);
    }, [initialMs]);

    // Loader en cambios de ruta dentro de la app
    useEffect(() => {
        if (navType) {
            setVisible(true);
            clearTimeout(hideTimer.current);
            hideTimer.current = setTimeout(() => setVisible(false), routeMinMs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.key]); // key cambia en cada navegación

    // Loader en <a target="_blank"> (feedback visual)
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest?.("a");
            if (!a) return;
            if (a.target === "_blank") {
                setVisible(true);
                clearTimeout(hideTimer.current);
                hideTimer.current = setTimeout(() => setVisible(false), externalClickMs);
            }
        };
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, [externalClickMs]);

    useEffect(() => {
        document.documentElement.classList.toggle("no-scroll", visible);
        return () => document.documentElement.classList.remove("no-scroll");
    }, [visible]);

    return visible;
}
