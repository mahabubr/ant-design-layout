import React, { useEffect, useState } from 'react';

import { Table } from 'antd';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    Table.EXPAND_COLUMN,
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'age',
    },
    Table.SELECTION_COLUMN,
    {
        title: 'email',
        dataIndex: 'email',
        key: 'address',
    },
];

const Accessories = () => {

    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])


    return (
        <div>
            <Table
                columns={columns}
                rowSelection={{}}
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.description}
                        </p>
                    ),
                }}
                dataSource={info}
            />
        </div>
    );
};

export default Accessories;