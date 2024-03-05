import {combineReducers, legacy_createStore, Store} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {classicsItemsReducer, initialState} from "../components/items/classicsItems/classics-items-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    classic: classicsItemsReducer
})
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppRootStateType = ReturnType<typeof rootReducer>





export const store: Store<AppRootStateType> = legacy_createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        classic: store.getState().classic
    })
})


// @ts-ignore
window.store = store;