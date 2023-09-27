import { Table } from 'antd'
import React from 'react'
import { columns, data } from './data'

const Catagory = () => {
  return (
    <div className='w-[100%] ml-[36px]'>
        <Table columns={columns} dataSource={data} pagination={false} rowClassName={(record,index)=> "custom-hover-class"} />
    </div>
  )
}

export default Catagory