import { useState, useEffect } from "react";
import "./QuestionPage.scss";
import { questionData } from "../../data/data";
import { QuestionCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { nextQuestion, setAnswer, setQuestionCount } from "../../redux/slices/QuestionSlice.tsx/QuestionSlice";
import useNavigationHook from "../../redux/hooks/navigationHook";
import { KeyMapper } from "../../KeyMapper";
import { getConfigLocal, setConfigLocal } from "../../StorageManager/StorageManager";

const QuestionPage = () => {
    const [isValid, setIsValid] = useState(false); // Track whether page should be shown
    const { questionNum, questionShown, questionCount } = useAppSelector((state) => state.QuestionSlice);
    const dispatch = useAppDispatch();
    const { replace } = useNavigationHook();

    useEffect(() => {
        if (getConfigLocal(KeyMapper.QUESTION_SHOWN)) {
            replace(KeyMapper.Pages.DASHBOARD);
        } else {
            dispatch(setQuestionCount(questionData.length));
            setIsValid(true); // Only allow rendering if it's valid
        }
    }, []);

    const handleOnSelect = (value: any) => {
        dispatch(setAnswer(value));
        if (questionShown === questionCount) {
            replace(KeyMapper.Pages.DASHBOARD);
            setConfigLocal(KeyMapper.QUESTION_SHOWN, true);
        } else {
            dispatch(nextQuestion());
        }
    };

    // Prevent rendering until validation is complete
    if (!isValid) return null;

    return (
        <div className="question-root">
            <QuestionCard key={questionNum} {...questionData[questionNum]} onSelect={handleOnSelect} />
        </div>
    );
};

export default QuestionPage;
