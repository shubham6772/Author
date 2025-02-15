import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Error, Dashboard, QuestionPage } from "../pages";
import { KeyMapper } from "../KeyMapper";
import ProtectedRoute from "./ProtectedRoute";
import { RootState } from "../redux/store"; // Adjust based on your store setup

const AppRoutes = () => {
    const { auth } = useSelector((state: RootState) => state.LoginSlice);

    const routerConfig = createBrowserRouter([
        {
            path: KeyMapper.Pages.AUTH,
            element:  <Login />
            // element:  (auth ? <Navigate to={KeyMapper.Pages.DASHBOARD} replace /> : <Login />)
        },
        {
            path: KeyMapper.Pages.DASHBOARD,
            element: (
                <ProtectedRoute auth={auth}>
                    <Dashboard />
                </ProtectedRoute>
            ),
        },
        {
            path: KeyMapper.Pages.QUESTION,
            element: (
                <ProtectedRoute auth={auth}>
                    <QuestionPage />
                </ProtectedRoute>
            ),
        },
        {
            path: KeyMapper.Pages.ERROR,
            element: <Error />,
        },
    ]);

    return <RouterProvider router={routerConfig} />;
};

export default AppRoutes;
