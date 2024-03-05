import React from 'react';
import {Button, Card} from 'antd';
import Meta from "antd/es/card/Meta";

const cardStyle: React.CSSProperties = {
    width: 620,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 273,
};

export const TechItems: React.FC = () => {
    const onClickhandler = () => {

    }

    return (
        <Card
            hoverable
            style={{width: 240, height: 600, overflow: 'hidden'}}
            cover={<img alt="example" src="https://c0.klipartz.com/pngpicture/528/630/gratis-png-logo-de-engranajes-icono-de-engranajes-thumbnail.png"/>}
        >
            <Meta title={'Техническая книга'}
                  description={'бла бла бла 2'}
            />
            <Button type="primary" href="#" onClick={onClickhandler}
                    style={{marginTop: '12px', display: 'flex', alignItems: 'center', width: '90px'}}>
                Get Book
            </Button>
        </Card>
    )
};
