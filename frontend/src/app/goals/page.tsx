'use client';
import React, { useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, FloatButton, Input, Layout, Modal, Select, Skeleton } from 'antd';
import ListGoals from '@/components/ListGoals/listGoals';
import Navbar from '@/components/Navbar/navbar';
import { AiOutlineForm, AiOutlineFileDone, AiFillFileAdd } from 'react-icons/ai';
import { CREATE_GOAL, CREATE_TASK } from '@/graphql/mutations';
import { GET_GOALS } from '@/graphql/queries';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

export default function Goals() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<'task' | 'goal'>('goal');
  const [inputValue, setInputValue]=useState<any>('')
  const [options, setOptions] = useState<{ value: any; label: any }[]>([]);
  const [optionIdSelected, setOptionIdSelected]=useState<any>()
  const { data, loading, error } = useQuery(GET_GOALS);

  const [createGoal] = useMutation(CREATE_GOAL,{
    refetchQueries:[{query:GET_GOALS}],
  });

  const [createTask] = useMutation(CREATE_TASK,{
    refetchQueries:[{query:GET_GOALS}],
  });

  const showModalCreateGoal = () => {
    setTypeModal('goal');
    setIsModalOpen(true);
  };

  const goToCompleteGoalsPage = () => {
    router.push('/goals/done');
  };


  const showModalCreateTask = () => {
    setTypeModal('task');
    const values: { value: any; label: any }[] = [];
    data.goals.map((goal: any) => values.push({ value: goal.id, label: goal.name }));
    setOptions(values);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
   if(typeModal=='goal'){

    createGoal({ variables: { goalName:inputValue, statusGoal:"Imcomplete" } })
    setIsModalOpen(false);
   }else if(typeModal=='task'){

    createTask({ variables: { taskName:inputValue, goalId:optionIdSelected, statusTask:"TODO"} })
    setIsModalOpen(false);

   }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className='flex flex-1 w-full h-[100vh]'>
      <Navbar>
        {!loading ? (
          <>
            <ListGoals goals={data.goals} />
            <Button type='link'  style={{margin:16,}} onClick={goToCompleteGoalsPage}>See goals completed</Button>
          </>
        ):
         <Loading/>
        }
      </Navbar>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<AiOutlineForm />}
      >
        <FloatButton
          shape="square"
          type="primary"
          tooltip={<p>Goal</p>}
          onClick={showModalCreateGoal}
          style={{ insetInlineEnd: 24 }}
          icon={<AiFillFileAdd />}
        />
        <FloatButton
          shape="square"
          type="primary"
          tooltip={<p>Task</p>}
          onClick={showModalCreateTask}
          icon={<AiOutlineFileDone />}
        />
      </FloatButton.Group>

      <Modal
        title={`Create ${typeModal === 'goal' ? 'Goal' : 'Task'}`}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <div className="">
          <Input placeholder="Name" style={{ marginBottom: 8 }} onChange={(e)=>setInputValue(e.target.value)}/>
          {typeModal === 'task' && (
            <Select
              onChange={(e)=>setOptionIdSelected(e)}
              style={{ width: 200 }}
              placeholder="Select goal"
              options={options}
            />
          )}
        </div>
      </Modal>
      
    </div>
  );
}