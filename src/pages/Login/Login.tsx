import "./Login.scss"
import books from "../../assets/books.png"
import books2 from "../../assets/books2.png"
import { LoginForm, SignupForm } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { toggleMode } from "../../redux/slices/LoginSlice";
import useNavigationHook from "../../redux/hooks/navigationHook";
import { KeyMapper } from "../../KeyMapper";

const Login = () => {

    const {mode, auth} = useAppSelector((state : any)=>state.LoginSlice)
    const {goTo} = useNavigationHook();
    const dispatch = useAppDispatch()

    // if(auth){
    //     return null;
    // }

    const handleSubmit = () => {  
        if(auth){
            goTo(KeyMapper.Pages.QUESTION);
        }else{
            alert("Invalid credentials");
        }
    }

    return (
        <div className="main-container">
            <div className="card-container">
                <div className="header-text-container">
                    <h2>{mode == "login" ? `Login` : `Signup` }</h2>
                    <p>{mode == "login" ? `Don't` : `Already` } have an account? <span onClick={()=>dispatch(toggleMode())}>{mode == "login" ? `Sign Up` : `Log in`}</span></p>
                </div>

              {mode == "login" ? <LoginForm onSubmit={handleSubmit} />  : <SignupForm onSubmit={handleSubmit} /> }
            </div>



            <div className="icon-container">
                <div className="login-image-container-1">
                    <img src={books} alt="books" className="books1" />
                </div>
                <h1 className="login-quote-text">Your Journey to Amaze People with Your Stories</h1>
                <h1 className="login-quote-text">Just One Step Away...</h1>
                <div className="login-image-container-2">
                    <img src={books2} alt="books" className="books2" />
                </div>
            </div>
        </div>
    )
}

export default Login
