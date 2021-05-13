import React, {useState, useEffect} from 'react';
import { Table, Tag } from 'antd';

export default function Tab(){
    const [Items, setItems] = useState([]);
    useEffect(() => {
        const data = localStorage.getItem('data')
        if(data)
        setItems(JSON.parse(data))
      },[])
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'ContactName',
            dataIndex: 'contactname',
            key: 'contactname',
        },
        {
            title: 'ContactPhone',
            dataIndex: 'contactphone',
            key: 'contactphone',
        },
        {
            title: 'ContactEmail',
            dataIndex: 'contactemail',
            key: 'contactemail',
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            key: 'notes',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
          title: 'Category',
          key: 'category',
          dataIndex: 'category',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Commissionpercentage',
          dataIndex: 'commissionpercentage',
          key: 'commisssionpercentage',
        },
        {
          title: 'ActiveFrom',
          dataIndex: 'activefrom',
          key: 'activefrom',
        },
        {
          title: 'Criticalaccount',
          dataIndex: 'criticalaccount',
          key: 'criticalaccount',
        },
        {
          title: 'PaymentOptions',
          dataIndex: 'paymentoptions',
          key: 'paymentoptions',
        }
      ];
      return(
        <Table columns={columns} dataSource={Items} scroll={{ x: 'max-content' }}></Table>
      ); 
}