import { debounce } from "@mui/material";


export const parseToJSON = (parsableJSONString: string) => {
    try {
        if (parsableJSONString != undefined) {
            return JSON.parse(parsableJSONString);
        }
    } catch (error) {
        return false;
    }
}

export const debounceCall = (delay: number, callback: Function) => {
    const delayCallMethod = debounce(() =>{
        callback();
    }, delay)
    delayCallMethod();
};
