import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { KeyMapper } from "../KeyMapper";
import { getConfigLocal } from "../StorageManager/StorageManager";
import { useAppDispatch } from "../redux/hooks/hook";
import { setAuthFail, setAuthSuccess } from "../redux/slices/LoginSlice";

const ProtectedRoute = ({ auth, children }: { auth: boolean; children: React.ReactNode }) => {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
     if(getConfigLocal(KeyMapper.auth_success) || auth){
        setIsUserAuthenticated(true);
        dispatch(setAuthSuccess());
     }else{
        setIsUserAuthenticated(false);
        setAuthFail();
     }
        setIsAuthChecked(true);
    }, [auth]);

    if (!isAuthChecked) return null; // ⏳ Wait for auth check before rendering

    return isUserAuthenticated ? <>{children}</> : <Navigate to={KeyMapper.Pages.AUTH} replace />;
};

export default ProtectedRoute;
