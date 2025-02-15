export const parseToJSON = (parsableJSONString : string) => {
    try {
        if(parsableJSONString != undefined){
            return JSON.parse(parsableJSONString);
        }
    } catch (error) {
        return false;
    }
} 