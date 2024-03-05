import React, {useState} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined, ReadOutlined, RocketOutlined} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {Link, Outlet} from "react-router-dom";

const {Header, Sider, Content} = Layout;

const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout style={{height: '100%'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{marginTop: '50px'}}
                    items={[
                        {
                            key: '1',
                            icon: <ReadOutlined/>,
                            label: (
                                <Link to={'/classic'}> Классическая</Link>
                            ),
                        },
                        {
                            key: '2',
                            icon: <RocketOutlined/>,
                            label: (
                                <Link to={'/technical'}>Техническая</Link>
                            ),
                        },
                        {
                            key: '3',
                            icon: <PlusOutlined/>,
                            label: (
                                <Link to={'/create'}> Создать карточку</Link>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer, height: 60}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={setCollapsedHandler}
                        style={{
                            fontSize: '16px',
                            width: 54,
                            height: 24,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 'calc(100vh - 112px)', // 112px - высота шапки
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default AppLayout;