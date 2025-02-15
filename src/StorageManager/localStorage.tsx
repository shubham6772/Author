export const setLocalStorage = (key: any, value: any, scope: any = window) => {
    if (key != undefined && value != undefined){
        scope.localStorage.setItem(key, value);
    }
}

export const removeLocalStorage = (key: any, value: any, scope: any = window) => {
    if (key != undefined && value != undefined){
        scope.localStorage.removeItem(key);
    }
}

export const getLocalStorage = (key: any, scope: any = window) => {
    return scope.localStorage.getItem(key);
}

export const isLocalStorageSupport = () => {
    if("localStorage" in window && window.localStorage){
        return true;
    }else{
        return false;
    }
}

