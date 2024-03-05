import {Button, Card, Image, Input, message, Upload} from 'antd';
import React, {ChangeEvent, useState} from 'react';
import './item.css'
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../app/store";
import {InitialStateType, updateTitleBookAC} from "../../items/classicsItems/classics-items-reducer";
import {DownloadOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";


export const ItemInfo: React.FC = () => {

    const items: InitialStateType = useAppSelector(state => state.classic);
    const {id} = useParams();
    const item = items.find(el => el.id === id);
    const {TextArea} = Input;
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [titleState, setTitleState] = useState<string>('');
    const [authorState, setAuthorState] = useState<string>('');
    const [descriptionState, setDescriptionState] = useState<string>('');
    const [image, setImage] = useState<string>('');


    //Changes fn
    const changeAuthorHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const author = e.currentTarget.value;
        setAuthorState(author);
    }
    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.currentTarget.value;
        setTitleState(title);
    }
    const changeDescHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const desc = e.currentTarget.value;
        setDescriptionState(desc);
    }


    //Actions
    const changeCardHandler = () => {
        setEditMode(true);
    }
    const saveCardHandler = () => {
        if (titleState === '' || authorState === '' || descriptionState === '' || image === '') {
            error('Все поля должны быть заполнены!');
        } else {
            setEditMode(false);
            success('Карточка обновлена');
            dispatch(updateTitleBookAC(id, authorState, titleState, descriptionState, image));
        }
    }


    const uploadHandler = (filesData: any) => {
        const currentFile = filesData.file.originFileObj
        if (currentFile) {
            const reader = new FileReader();

            //Async операция
            reader.readAsDataURL(currentFile)

            reader.onloadend = () => {
                const file64 = reader.result as string
                setImage(file64)
            }
        }
    }


    const success = (message: string) => {
        messageApi.open({
            type: 'success',
            content: message,
        });
    };
    const error = (message: string) => {
        messageApi.open({
            type: 'error',
            content: message,
        });
    };

    return (
        <>
            {contextHolder}
            <Card title={item?.author} style={{minHeight: 600}}>
                {
                    editMode && <Input placeholder="Введите автора.."
                                       style={{maxWidth: '100%', marginBottom: 20}}
                                       onChange={changeAuthorHandler}
                                       value={authorState}
                   />
                }

                <Card style={{
                    maxWidth: 500,
                    minHeight: 500
                }}>
                    <Image
                        style={{borderRadius: 6}}
                        width={400}
                        src={item?.src}
                    />

                    {editMode
                        ? <Input placeholder="Введите название..."
                                 style={{
                                     maxWidth: 400, marginTop: 10, display: 'flex',
                                     alignItems: 'center',
                                     alignContent: 'center',
                                     justifyContent: 'center',
                                     justifyItems: 'center',
                                 }}
                                 onChange={changeTitleHandler}
                                 value={titleState}
                        />
                        : <div>
                            <Card type="inner"
                                  title={item?.title}
                                  extra=''
                                  style={{maxWidth: 400, overflow: 'hidden'}}
                            >
                            </Card>
                        </div>
                    }

                    {editMode
                        ? <TextArea rows={4}
                                    placeholder="Введите описание..."
                                    maxLength={300}
                                    style={{maxWidth: 400, marginTop: 10, resize: 'none'}}
                                    value={descriptionState}
                                    onChange={changeDescHandler}
                        />
                        : <div style={{
                            border: '1px solid rgb(240, 240, 240)',
                            borderRadius: '8px',
                            padding: 10,
                            maxWidth: 400
                        }}>{item?.desc}</div>
                    }

                    <div>
                        {!editMode
                            ? <Button type="primary" style={{marginTop: 20,}} onClick={changeCardHandler}>
                                Изменить карточку
                            </Button>
                            : <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                marginTop: 20
                            }}>
                                <div>
                                    <Upload action="/upload.do" onChange={uploadHandler}>
                                        <Button type="primary" icon={<DownloadOutlined/>}>
                                            Загрузить обложку
                                        </Button>
                                    </Upload>
                                </div>
                                <div>
                                    <Button type="primary" onClick={saveCardHandler}>
                                        Сохранить изменения
                                    </Button>
                                </div>
                            </div>
                        }
                    </div>
                </Card>

            </Card>
        </>
    );
};
