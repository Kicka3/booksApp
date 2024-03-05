
//exp from ls
import {RootReducerType} from "../store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('max-value');
        if (serializedState === null) {
            return undefined
        }
        console.log(serializedState)
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

//save to ls
export const saveState = (state: RootReducerType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('max-value', serializedState);
    } catch {
        //ignore err
    }
}