import "./Login.scss"
import books from "../../assets/books.png"
import books2 from "../../assets/books2.png"
import { Header, LoginForm, SignupForm } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { setAuthSuccess, toggleMode } from "../../redux/slices/LoginSlice";
import useNavigationHook from "../../redux/hooks/navigationHook";
import { KeyMapper } from "../../KeyMapper";
import { useEffect, useState } from "react";
import { getConfigLocal, setConfigLocal } from "../../StorageManager/StorageManager";
// import { useLocation } from "react-router-dom";


const Login = () => {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const { mode, auth } = useAppSelector((state: any) => state.LoginSlice)
    const { replace } = useNavigationHook();
    const dispatch = useAppDispatch()
    // const location = useLocation();
    useEffect(() => {
        // console.log(location)
        if (getConfigLocal(KeyMapper.auth_success) || auth) {
            replace(KeyMapper.Pages.QUESTION);
            dispatch(setAuthSuccess());
        } else {
            setIsAuthChecked(true);
        }
    }, []);
    // if(auth){
    //     return null;
    // }

    const handleSubmit = () => {
        dispatch(setAuthSuccess());
        setConfigLocal(KeyMapper.auth_success, true);
        replace(KeyMapper.Pages.QUESTION);
        // if(auth){
        // }else{
        //     alert("Invalid credentials");
        // }
    }

    if (!isAuthChecked) return null;

    return (
        <>
            <Header />
            <div className="login-main-container">
                <div className="login-card-container">
                    <div className="login-header-text-container">
                        <h2>{mode == "login" ? `Login` : `Signup`}</h2>
                        <p>{mode == "login" ? `Don't` : `Already`} have an account? <span onClick={() => dispatch(toggleMode())}>{mode == "login" ? `Sign Up` : `Log in`}</span></p>
                    </div>

                    {mode == "login" ? <LoginForm onSubmit={handleSubmit} /> : <SignupForm onSubmit={handleSubmit} />}
                </div>



                <div className="login-icon-container">
                    <div className="login-image-container-1">
                        <img src={books} alt="books" className="login-books1" />
                    </div>
                    <h1 className="login-quote-text">Your Journey to Amaze People with Your Stories</h1>
                    <h1 className="login-quote-text">Just One Step Away...</h1>
                    <div className="login-image-container-2">
                        <img src={books2} alt="books" className="login-books2" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login
