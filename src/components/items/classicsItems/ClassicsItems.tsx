import {useAppSelector} from "../../../app/store";
import {deleteBookAC} from "../../items/classicsItems/classics-items-reducer";
import {useDispatch} from "react-redux";
import React from 'react';
import {Item} from "./item/Item";


export const ClassicsItems: React.FC = () => {
    const dispatch = useDispatch();
    const classicsState = useAppSelector(state => state.classic);

    const deleteBookHandler = (cardId: string) => {
        dispatch(deleteBookAC(cardId));
    }

    return (
        <>
            {classicsState.map(el => (
                <div key={el.id}>
                    <Item deleteBookHandler={deleteBookHandler}
                          itemId={el.id}
                          img={el.src}
                          author={el.author}
                          desc={el.desc}
                          title={el.title}
                    />
                </div>
            ))}
        </>
    );
};
