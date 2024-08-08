'use client';
import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Checkbox, Drawer, Progress } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { GET_GOALS } from '@/app/goals/page';

const { Meta } = Card;

const COMPLETE_TASK = gql`
  mutation CompleteTask($taskId: String!) {
    CompleteTask(taskId: $taskId)
  }
`;

const INCOMPLETE_TASK = gql`
  mutation IncompleteTask($taskId: String!) {
    IncompleteTask(taskId: $taskId)
  }
`;

export default function CardItem({ goal }: any) {
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(0);

  // Mover hooks para o topo do componente
  const [completeTask] = useMutation(COMPLETE_TASK,{
    refetchQueries:[{query:GET_GOALS}],
  });
  const [incompleteTask] = useMutation(INCOMPLETE_TASK,{
    refetchQueries:[{query:GET_GOALS}],
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: CheckboxChangeEvent, taskId: any) => {
    console.log(`checked = ${e.target.checked}`);
    e.target.checked ? completeTask({ variables: { taskId } }) : incompleteTask({ variables: { taskId } });
  };

  useEffect(() => {
    const completedTasks = goal.tasks.filter((task: any) => task.status === 'DONE').length;
    setPercent((completedTasks / goal.tasks.length) * 100);
  }, [goal.tasks]);

  return (
    <>
      <Card
        onClick={() => showDrawer()}
        className='w-96 cursor-pointer'
        actions={[
          <div className='p-4' key="progress">
            <Progress percent={percent} />
          </div>
        ]}
      >
        <Meta
          avatar={<Avatar src="https://avatars.githubusercontent.com/u/45522944?v=4" />}
          title={goal.name}
          description={`${goal.tasks.filter((task: any) => task.status === 'DONE').length}/${goal.tasks.length} itens concluídos`}
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
        {goal.tasks.map((task: any) => (
          <div key={task.id}>
            <Checkbox defaultChecked={task.status=="DONE"}  onChange={(e) => onChange(e, task.id)}>
              <p>{task.name}</p>
            </Checkbox>
          </div>
        ))}
      </Drawer>
    </>
  );
}