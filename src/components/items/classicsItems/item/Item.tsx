import {Link} from 'react-router-dom';
import {Card, Typography} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import React from 'react';

type ItemPropsType = {
    deleteBookHandler: (cardId: string) => void
    itemId: string
    img: string
    author: string
    desc: string
    title: string
}

export const Item: React.FC<ItemPropsType> = (props) => {
    const {Meta} = Card;
    const {Paragraph} = Typography;


    const {
        deleteBookHandler,
        itemId,
        img,
        author,
        desc,
        title,
    } = props;


    return (
        <>
            <div>
                <Link to={`item/${itemId}`}>
                    <Card
                        hoverable
                        style={{maxWidth: 300, maxHeight: 700, overflow: 'hidden', borderRadius: '6px 6px 0 0'}}
                        cover={
                            <img
                                alt="example"
                                src={img}
                            />
                        }

                    >
                        <Paragraph>{author}</Paragraph>
                        <Meta
                            style={{maxHeight: 150}}
                            title={title}
                            description={desc}
                        />
                    </Card>
                </Link>
                <Card
                    style={{maxWidth: 300, borderRadius: '0 0 6px 6px'}}
                    actions={[
                        <DeleteOutlined key="setting"
                                        onClick={() => deleteBookHandler(itemId)}
                        />,
                        <Link to={`item/${itemId}`}> <EditOutlined key="edit"/> </Link>
                    ]}
                />
            </div>
        </>
    );
};
