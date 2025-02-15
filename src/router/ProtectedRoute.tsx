import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { KeyMapper } from "../KeyMapper";

const ProtectedRoute = ({ auth, children }: { auth: boolean; children: React.ReactNode }) => {
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        setIsAuthChecked(true);
    }, [auth]);

    if (!isAuthChecked) return null; // ⏳ Wait for auth check before rendering

    return auth ? <>{children}</> : <Navigate to={KeyMapper.Pages.AUTH} replace />;
};

export default ProtectedRoute;
