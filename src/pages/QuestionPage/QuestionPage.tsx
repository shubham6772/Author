import "./QuestionPage.scss";
import { questionData } from "../../data/data";
import { QuestionCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { useEffect } from "react";
import { nextQuestion, setAnswer, setQuestionCount } from "../../redux/slices/QuestionSlice.tsx/QuestionSlice";
import useNavigationHook from "../../redux/hooks/navigationHook";
import { KeyMapper } from "../../KeyMapper";
const QuestionPage = () => {

    const {questionNum, questionShown, questionCount} = useAppSelector((state)=>state.QuestionSlice);
    const dispatch = useAppDispatch();
    const {goTo} = useNavigationHook();

    useEffect(()=>{
        dispatch(setQuestionCount(questionData.length));
    },[]);

    const handleOnSelect = (value : any) => {
        dispatch(setAnswer(value));
        if(questionShown == questionCount){
            goTo(KeyMapper.Pages.DASHBOARD);
        }else{
            dispatch(nextQuestion());
        }
    }

    return (
        <div className="question-root">
            <QuestionCard {...questionData[questionNum]} onSelect={handleOnSelect}   />
        </div>
    )
}

export default QuestionPage
