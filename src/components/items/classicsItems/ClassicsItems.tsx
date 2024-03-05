import React from 'react';
import {Button, Card} from 'antd';

const {Meta} = Card;

export const ClassicsItems: React.FC = () => {
    const title = 'Some title'
    const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Accusamus aperiam consectetur doloribus ea eveniet, ipsa iure labore maxime molestiae, non repellat sunt suscipit unde.
        Ab deleniti exercitationem illo quae reiciendis.`


    const onClickhandler = () => {

    }

    return (
        <>
            <Card
                hoverable
                style={{width: 240, height: 600, overflow: 'hidden'}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
            >
                <Meta title={title}
                      description={description}
                />
                <Button type="primary" href="#" onClick={onClickhandler}
                        style={{marginTop: '12px', display: 'flex', alignItems: 'center', width: '90px'}}>
                    Get Book
                </Button>
            </Card>
        </>
    )
};
