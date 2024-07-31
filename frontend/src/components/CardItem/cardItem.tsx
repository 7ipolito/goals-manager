'use client'
import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Drawer, Progress, RadioChangeEvent} from 'antd';

const { Meta } = Card;
export default function CardItem({goal}:any){
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    console.log(goal)
  },[])

  return(
    <>
    <Card
    onClick={()=> showDrawer()}
    className='w-96'
    actions={[
      // eslint-disable-next-line react/jsx-key
      <div className='p-4'>
        <Progress key="1" percent={30} />
      </div>
    ]}
    

  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={goal.name}
      description="3/5 itens concluídos"
      className='text-center p-2'
    />
  </Card>

  <Drawer
        title={goal.name}
        placement={`bottom`}
        closable={false}
        onClose={onClose}
        open={open}
        key={`bottom`}
      >
        {goal.tasks.map((task:any)=>(
          // eslint-disable-next-line react/jsx-key
          <div>
          <p className='font-bold'>Tasks</p>
            <p key={task.id}>- {task.name}</p>
          </div>
        ))}
      
      </Drawer>
  </>
  )
}