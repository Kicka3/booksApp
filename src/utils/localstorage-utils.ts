import {AppRootStateType} from "../app/store";


//save to ls
export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('classicItems', serializedState);
    } catch {
        //ignore err
        console.log('Save error ls ')
    }
}


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('classicItems');
        if (serializedState === null) {
            return undefined
        }
        // console.log(serializedState)
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}



