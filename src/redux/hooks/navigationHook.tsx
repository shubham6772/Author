import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./hook";
import { toggleLoader } from "../slices/LoaderSlice/LoaderSlice";

const navigateTo = (path: string | number, navigate: any, dispatch: any, replace?: boolean) => {

    if (path == 1 || path == -1) {
        dispatch(toggleLoader());
        setTimeout(() => {
            navigate(path)
            dispatch(toggleLoader());
        }, 500);
    } else if (typeof path == 'string') {
        dispatch(toggleLoader());
        setTimeout(() => {
            navigate(path, { replace: replace ? replace : false })
            dispatch(toggleLoader());
        }, 500)
    }
}

function useNavigationHook() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return {
        goTo: (path: string) => navigateTo(path, navigate, dispatch),
        goBack: () => navigateTo(-1, navigate, dispatch),
        goForward: () => navigateTo(1, navigate, dispatch),
        replace: (path: string) => navigateTo(path, navigate, dispatch, true),
    };
}



export default useNavigationHook;
