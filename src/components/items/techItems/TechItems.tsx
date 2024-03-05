import React, {useState} from 'react';
import {Item} from "../../items/classicsItems/item/Item";


export const TechItems: React.FC = () => {

    //Fake data for example
    const [techsState, setTechsState] = useState([
        {
            id: crypto.randomUUID(),
            title: 'Some book 1',
            author: 'Will Smith',
            desc: 'test desc',
            src: 'https://e7.pngegg.com/pngimages/260/424/png-clipart-gear-icon-gears-file-transport-transportation-thumbnail.png'
        },
        {
            id: crypto.randomUUID(),
            title: 'Some book 2',
            author: 'Andruxa Kozlov',
            desc: 'test desc',
            src: 'https://e7.pngegg.com/pngimages/260/424/png-clipart-gear-icon-gears-file-transport-transportation-thumbnail.png'
        },
        {
            id: crypto.randomUUID(),
            title: 'Some book 3',
            author: 'Ann Topolsky',
            desc: 'test desc',
            src: 'https://e7.pngegg.com/pngimages/260/424/png-clipart-gear-icon-gears-file-transport-transportation-thumbnail.png'
        },
    ]);

    const deleteBookHandler = (cardId: string) => {
        setTechsState(techsState.filter(el => el.id !== cardId));
    }


    return (
        <>
            {techsState.map(el => (
                <div key={el.id}>
                    <Item deleteBookHandler={deleteBookHandler}
                          itemId={el.id}
                          img={el.src}
                          author={el.author}
                          desc={el.desc}
                          title={el.title}
                        // editModeForTitle={}
                    />
                </div>
            ))}
        </>
    );
};
