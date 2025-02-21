import { createSlice } from "@reduxjs/toolkit";

interface questionState {
    questionNum : number,
    answers : Array<any>,
    questionCount : number,
    questionShown : number,
}

const initialState : questionState = {
    questionNum : 0,
    answers : [],
    questionCount : 0, 
    questionShown : 1,
}

const QuestionSLice = createSlice({
    name : 'QuestionSlice',
    initialState,
    reducers : {
        nextQuestion : (state) => {
            return {
                ...state,
                questionShown : state.questionShown + 1,
                questionNum : (state.questionShown < state.questionCount) ? state.questionNum + 1 : state.questionCount,
            }
        },

        setAnswer : (state, action) => {
            return {
             ...state,
             answers : [...state.answers, { questionNum : state.questionNum + 1, answer : action.payload}],
            }
        },

        setQuestionCount : (state, action) => {
            return {
             ...state,
                questionCount : action.payload
            }
        }
    }

})

export const {nextQuestion, setQuestionCount, setAnswer} = QuestionSLice.actions;
export default QuestionSLice.reducer;