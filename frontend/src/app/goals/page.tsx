
import React, { useEffect } from 'react';
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import {Button, Layout} from "antd"
import { getClient } from '@/lib/client';
import ListGoals from '@/components/ListGoals/listGoals';
import Navbar from '@/components/Navbar/navbar';

const { Header, Content, Footer } = Layout;

const GET_GOALS = gql`
  query getAllUsers{
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

`
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Goals(){ 
   const client = getClient();

  const { data } = await client.query({
    query: GET_GOALS,
     
  });

  console.log(data.goals)

  return (
  <Navbar>

    <ListGoals goals={data.goals}/>
  </Navbar>
  )
}

