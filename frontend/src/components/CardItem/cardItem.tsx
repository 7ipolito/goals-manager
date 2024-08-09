'use client';
import React, { useEffect, useState } from 'react';
import { Card, Checkbox, Drawer, Progress } from 'antd';
import { useMutation } from '@apollo/client';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { COMPLETE_TASK, INCOMPLETE_TASK } from '@/graphql/mutations';
import { GET_GOALS } from '@/graphql/queries';

const { Meta } = Card;

export default function CardItem({ goal }: any) {
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(0);

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
    e.target.checked ? completeTask({ variables: { taskId } }) : incompleteTask({ variables: { taskId } });
  };

  useEffect(() => {
    const completedTasks = goal.tasks.filter((task: any) => task.status === 'DONE').length;
    setPercent(Math.round((completedTasks / goal.tasks.length) * 100));
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
          title={goal.name}
          description={`${goal.tasks.filter((task: any) => task.status === 'DONE').length}/${goal.tasks.length} items done`}
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