import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
        width: 150,
    },
    {
        title: 'eyeColor',
        dataIndex: 'eyeColor',
        key: 'age',
        width: 120,
    },
    {
        title: 'company',
        dataIndex: 'company',
        key: 'company',
        ellipsis: true,
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
        ellipsis: true,
    },
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
        ellipsis: true,
    }
];

const Other = () => {

    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={info} />
        </div>
    );
};

export default Other;