import React, {useEffect, useState} from 'react';
import {Table} from "antd";

interface PropsChangingRow{
  address1: string,
  address2: string
}

const ChangingRow = ({address1, address2}: PropsChangingRow) => {
  const [address,setAddress] = useState('')
  let counter = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      if(counter%2) setAddress(address1)
      else setAddress(address2)
      counter+=1;
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{address}</div>
}

const App = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address1: '10 Downing Street 1',
      address2: 'Street Downing 10 2'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address1: '10 Downing Street 3',
      address2: 'Street Downing 10 4'
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      // @ts-ignore
      render: (record) => <ChangingRow address1={record.address1} address2={record.address2}/>
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />
}

export default App;