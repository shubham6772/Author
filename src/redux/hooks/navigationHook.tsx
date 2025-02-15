import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./hook";
import { toggleLoader } from "../slices/LoaderSlice/LoaderSlice";
import { useEffect, useState } from "react";

function useNavigationHook() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [navigationPath, setNavigationPath] = useState<string | number | null>(null);
    const [replaceNavigation, setReplaceNavigation] = useState<boolean>(false);

    useEffect(() => {
        if (navigationPath !== null) {
            dispatch(toggleLoader()); // Show loader

            let navigateTimeout: any;

            const loaderTimeout = setTimeout(() => {
                dispatch(toggleLoader()); // Hide loader

                navigateTimeout = setTimeout(() => {
                    console.log("Navigating to:", navigationPath);
                    if (typeof navigationPath == "string")
                        navigate(navigationPath, { replace: replaceNavigation });
                    else
                        navigate(navigationPath) // Navigate after loader disappears
                    setNavigationPath(null); // Reset navigation path
                    setReplaceNavigation(false); // Reset replace flag
                }, 50); // Small delay to ensure UI updates
            }, 500); // Show loader for 500ms

            return () => {
                clearTimeout(loaderTimeout);
                clearTimeout(navigateTimeout);
            };
        }
    }, [navigationPath, replaceNavigation, dispatch, navigate]);

    const navigateWithLoader = (path: string | number, replace?: boolean) => {
        setNavigationPath(path);
        if (replace) {
            setReplaceNavigation(true);
        }
    };

    return {
        goTo: (path: string) => navigateWithLoader(path),
        goBack: () => navigateWithLoader(-1),
        goForward: () => navigateWithLoader(1),
        replace: (path: string) => navigateWithLoader(path, true),
    };
}

export default useNavigationHook;