import {Link} from 'react-router-dom';
import {Card, Typography} from 'antd';
import {useAppSelector} from "../../../app/store";
import {deleteBookAC} from "../../items/classicsItems/classics-items-reducer";
import {useDispatch} from "react-redux";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import React, {useState} from 'react';


export const ClassicsItems: React.FC = () => {
    const dispatch = useDispatch();
    const {Meta} = Card;
    const {Paragraph, Text} = Typography;
    const classicsState = useAppSelector(state => state.classic);


    const deleteBookHandler = (cardId: string) => {
        dispatch(deleteBookAC(cardId))
    }
    const editModeHandler = (cardId: string) => {
        console.log('edite mod')
    }


    return (
        <>
            {classicsState.map(el => (
                <div key={el.id}>
                    <Link to={`/card/${el.id}`}>

                        <Card
                            hoverable
                            style={{maxWidth: 300, minHeight: 500}}
                            cover={
                                <img
                                    alt="example"
                                    src={el.src}
                                />
                            }
                            actions={[
                                <DeleteOutlined key="setting" onClick={() => deleteBookHandler(el.id)}/>,
                                <EditOutlined key="edit" onClick={() => editModeHandler(el.id)}/>
                            ]}>
                            <Paragraph>{el.author}</Paragraph>
                            <Meta
                                title={el.title}
                                description={el.desc}
                            />

                        </Card>
                    </Link>
                </div>

            ))}
        </>
    );
};
