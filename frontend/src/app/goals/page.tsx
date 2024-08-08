'use client'
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from 'antd';
import ListGoals from '@/components/ListGoals/listGoals';
import Navbar from '@/components/Navbar/navbar';

const { Header, Content, Footer } = Layout;

export const GET_GOALS = gql`
  query getAllUsers {
    goals {
      id
      name
      status
      tasks {
        id
        name
        status
      }
    }
  }
`;

export default function Goals() {
  const { data, loading, error } = useQuery(GET_GOALS);

 
  return (
    <Navbar>
      {!loading &&(
        <ListGoals goals={data.goals} />
      )}
    </Navbar>
  );
}