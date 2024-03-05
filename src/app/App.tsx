import React, {useEffect} from 'react';
import AppLayout from "../components/layout/Layout";
import {Route, Routes} from "react-router-dom";
import {ClassicsItems} from "../components/items/classicsItems/ClassicsItems";
import {TechItems} from "../components/items/techItems/TechItems";
import AddItemForm from "../components//AddItemForm/AddItemForm";
import {ItemInfo} from "../components/items/itemInfo/ItemInfo";
import {saveState} from "../utils/localstorage-utils";
import {initialState} from "../components/items/classicsItems/classics-items-reducer";
import {AppRootStateType, useAppSelector} from "../app/store";


const App: React.FC = () => {
    const classicItems = useAppSelector((state: AppRootStateType) => state.classic);

    useEffect(() => {
        if (classicItems === initialState) {
            saveState({
                classic: initialState,
            });
        }
    }, []);


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<AppLayout/>}>
                    <Route path={'classic'} element={<ClassicsItems/>}/>
                    <Route path={'classic/item/:id'} element={<ItemInfo />}/>
                    <Route path={'technical'} element={<TechItems/>}/>
                    <Route path={'create'} element={<AddItemForm/>}/>
                    <Route path={'*'} element={<div>Page not found</div>}/>
                </Route>
            </Routes>
        </div>
    )
        ;
};
export default App;