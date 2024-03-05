import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Button, Form, Input, message, Select, Upload,} from 'antd';
import {useDispatch} from "react-redux";
import {useForm} from "antd/lib/form/Form";
import {createBookAC, ItemType} from "../items/classicsItems/classics-items-reducer";


const {TextArea} = Input;


const AddItemForm: React.FC = () => {
    const dispatch = useDispatch();
    const [form] = useForm();
    const [image, setImage] = useState<string>('');

    const [messageApi, contextHolder] = message.useMessage();
    const [errorMessage, setErrorMessage] = useState(false);


    const uploadHandler = (filesData: any) => {
        const currentFile = filesData.file.originFileObj;

        if (currentFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result as string;

                img.onload = () => {
                    const width = img.width;
                    const height = img.height;

                    if (width > 145 || height > 205) {
                        warning('Картинка должна быть не более 145x205 пикселей')
                        setErrorMessage(true);
                        return;
                    } else {
                        setImage(reader.result as string);

                    }
                };
            };
            reader.readAsDataURL(currentFile);
        }
    };


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
    const warning = (message: string) => {
        messageApi.open({
            type: 'warning',
            content: message,
        });
    };


    const createCardHandler = () => {
        const values: ItemType = form.getFieldsValue();

        if (values.title === undefined || values.author === undefined || values.desc === undefined || image === undefined) {
            setErrorMessage(true);
            error('Все поля должны быть заполнены!');
        } else {
            success('Карточка добавлена!');
            setErrorMessage(false);
            dispatch(createBookAC(values.title, values.author, values.desc, image));
            form.resetFields();
        }

    };

    return (
        <>
            {contextHolder}
            <Form
                form={form}
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                style={{
                    minWidth: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>

                <Form.Item
                    label="Автор"
                    name='author'>
                    <Input/>

                </Form.Item>
                <Form.Item
                    label="Название"
                    name='title'>
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Категория"
                    name='category'>
                    <Select>
                        <Select.Option value="Classic">Classic</Select.Option>
                        <Select.Option value="Technical">Technique</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Описание"
                    name='desc'>
                    <TextArea rows={4} style={{resize: 'none'}}/>
                </Form.Item>


                <Form.Item
                    label="Изображение"
                    name='image'
                    valuePropName="fileList"
                    getValueFromEvent={uploadHandler}
                >
                    <Upload action="/upload.do" listType="picture-card" accept={'image/*'}>
                        <button style={{border: 0, background: 'none'}} type="button">
                            <PlusOutlined/>
                            <div style={{marginTop: 8}}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Добавить">
                    <Button onClick={createCardHandler}>Сохранить</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default () => <AddItemForm/>;
