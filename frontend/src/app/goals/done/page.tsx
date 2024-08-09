'use client'
import ListGoals from '@/components/ListGoals/listGoals';
import Navbar from '@/components/Navbar/navbar';
import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_GOALS_COMPLETE } from '@/graphql/queries';

const Done: React.FC = () => {
  const { data, loading, error } = useQuery(GET_GOALS_COMPLETE);

  return (
    <>
    <Navbar>
      {!loading &&(
        <ListGoals goals={data.goalsComplete} />
      )}
      
    </Navbar>
   
    </>
  )
}

export default Done;