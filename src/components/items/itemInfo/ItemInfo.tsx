import {Card, Image, Input} from 'antd';
import {useDispatch} from "react-redux";
import React, {useState} from 'react';
import './item.css'
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {updateTitleBookAC} from "../classicsItems/classics-items-reducer";
import {useAppSelector} from "../../../app/store";


export const ItemInfo: React.FC = () => {
    const dispatch = useDispatch();
    const stateLoc = useAppSelector(state => state.classic)

    const [editModeForTitle, setEditModeForTitle] = useState(false);
    const [title, setTitle] = useState('')

    // const localState = {
    //     id: crypto.randomUUID(),
    //     title: 'Some book 1',
    //     author: 'Will Smith',
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta, dolorum necessitatibus nemo nulla quia sunt voluptas voluptatem? Aliquid blanditiis consequatur cupiditate eveniet illum iusto maiores nemo optio quas ullam.',
    //     src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    // }

    const activateEditMode = () => {
        setEditModeForTitle(true);
    }
    const disableEditMode = () => {
        setEditModeForTitle(false);
        // dispatch(updateTitleBookAC())
    }

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setTitle(e.currentTarget.value)
    }

    return (
        <>
            <Card title={localState.author}>
                Book:
                <Card
                    style={{
                        width: 900,
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center'
                    }}
                >
                    <Image
                        style={{borderRadius: 6}}
                        width={400}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />

                    {editModeForTitle

                        ? <Input placeholder="Basic usage"
                                 onBlur={disableEditMode}
                                 style={{maxWidth: 400, marginTop: 10}}
                                 onChange={changeInputHandler}
                        />


                        : <div>

                            <Card type="inner"
                                  title={localState.title}
                                  extra=''
                                  style={{maxWidth: 400, overflow: 'hidden'}}
                                  onDoubleClick={activateEditMode}

                            >
                                {localState.desc}
                            </Card>
                        </div>
                    }

                </Card>

            </Card>


        </>
    );
};
