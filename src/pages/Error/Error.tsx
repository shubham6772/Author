import ErrorSVG from "../../assets/error.svg";
import { KeyMapper } from "../../KeyMapper";
import { useAppSelector } from "../../redux/hooks/hook";
import useNavigationHook from "../../redux/hooks/navigationHook";
import "./Error.scss"

interface ErrorProps {
    isFeedError ?: boolean; 
 
}
const Error = ({isFeedError} : ErrorProps) => {
    const {auth} = useAppSelector((state)=>state.LoginSlice);
    const {goTo} = useNavigationHook();
    const handleClick = () => {
        if(auth){
            goTo(KeyMapper.Pages.DASHBOARD);
        }else{
            goTo(KeyMapper.Pages.AUTH);
        }
    }

    return (
        <div className='error-main-container'>
            <div className='error-card-container'>
                <img src={ErrorSVG} alt="icon" />
                <h3>Oops...</h3>
                {isFeedError? <p>Failed to fetch feed Please refresh page..</p> : <p>"I think you are finding some special Genre please read"<span onClick={handleClick}> here...</span></p>}
            </div>
        </div>
    )
}

export default Error
