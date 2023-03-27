import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BsFillHandbagFill } from 'react-icons/bs'
import { GiRunningShoe, GiCosmicEgg } from 'react-icons/gi'
import { MdOutlineCategory, MdOutlineAccessibilityNew } from 'react-icons/md'
import '../App.css'
import { Outlet, useHref, useNavigate, useParams } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

// const items2 = ['Apparel', 'Footwear', 'Bags', 'Accessories'].map((name, index) => {
//     const key = String(index + 1);
//     return {
//         key: `sub${key}`,
//         label: name,
//         children: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });

const item = [
    {
        label: 'Bags',
        key: 'bag',
        icon: <BsFillHandbagFill />,
        children: [
            {
                label: 'Men',
                key: 'men',
                icon: <MdOutlineCategory />,
                children: [
                    {
                        label: 'Children',
                        key: 'children',
                        icon: <MdOutlineCategory />,
                    },
                    {
                        label: 'Adult',
                        key: 'adult',
                        icon: <MdOutlineCategory />,
                    }
                ]
            },
            {
                label: 'Women',
                key: 'women',
                icon: <MdOutlineCategory />
            },
            {
                label: 'Other',
                key: 'other',
                icon: <MdOutlineCategory />
            },
        ]
    },
    {
        label: 'Footwear',
        key: 'footwear',
        icon: <GiRunningShoe />,
        children: [
            {
                label: 'Hills',
                key: 'hills',
                icon: <MdOutlineCategory />
            },
            {
                label: 'Shoe',
                key: 'shoe',
                icon: <MdOutlineCategory />
            },
            {
                label: 'Slippers',
                key: 'slippers',
                icon: <MdOutlineCategory />
            },
        ]
    },
    {
        label: 'Cosmetics',
        key: 'cosmetics',
        icon: <GiCosmicEgg />,
        children: [
            {
                label: 'Eye Brow',
                key: 'eye-brow',
                icon: <MdOutlineCategory />
            },
            {
                label: 'Nail Polish',
                key: 'nail-polish',
                icon: <MdOutlineCategory />
            },
            {
                label: 'Powder',
                key: 'powder',
                icon: <MdOutlineCategory />
            },
        ]
    },
    {
        label: 'Accessories',
        key: 'accessories',
        icon: <MdOutlineAccessibilityNew />,
    }
]

const Main = () => {

    const navigate = useNavigate()
    const href = useHref()

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>{href.slice(1)}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                            }}
                            onClick={(item) => {
                                navigate(item.key)
                            }}
                            items={item}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 880,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default Main;