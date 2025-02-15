import { parseToJSON } from "../Helper/Helper"
import { KeyMapper } from "../KeyMapper"
import { getLocalStorage, isLocalStorageSupport, setLocalStorage } from "./localStorage"

export const setConfigLocal = (subKeyName: any, value: any, parentKey: any = KeyMapper.CONFIG) => {
    // console.log(value)
    let t = Math.round(new Date().getTime() / 1000)
    let obj: any = {}
    let objParam: any = getLocalStorage(parentKey)
    if (objParam != "" && objParam != null) {
        obj = parseToJSON(objParam)
        if(!obj)
            obj ={}
    }
    obj[subKeyName] = value != undefined && value !== "" ? value : t
    isLocalStorageSupport() && setLocalStorage(parentKey, JSON.stringify(obj))
}

export const getConfigLocal = (key: any, parentKey: any = KeyMapper.CONFIG) => {
    let objParam = getLocalStorage(parentKey)
    let obj: any = {}
    let v: any = ""
    if (objParam != "") {
        obj = parseToJSON(objParam)
        if(!obj)
            obj ={}
    }

    if (obj != null && obj[key] != undefined) v = obj[key]
    return v
}