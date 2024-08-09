'use client'
import ListGoals from '@/components/ListGoals/listGoals';
import Navbar from '@/components/Navbar/navbar';
import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_GOALS_COMPLETE } from '@/graphql/queries';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

const Done: React.FC = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_GOALS_COMPLETE);

  const goToGoalsPage = () => {
    router.push('/goals');
  };

  return (
    <>
    <Navbar>
      {!loading ?
        <ListGoals goals={data.goalsComplete} />
      :(
        <Loading/>
      )}
        <Button type='link' style={{margin:16}} onClick={goToGoalsPage}>Back to goals page</Button>
    </Navbar>
   
    </>
  )
}

export default Done;