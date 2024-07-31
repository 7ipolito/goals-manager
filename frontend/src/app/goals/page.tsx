
import React, { useEffect } from 'react';
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import {Button, Layout} from "antd"
import { getClient, query } from '@/lib/client';
import ListGoals from "../../components/ListGoals/ListGoals.server"
import Navbar from '@/components/Navbar/Navbar';
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

  return (
  <Navbar>

    <ListGoals goals={data.goals}/>
  </Navbar>
  )
}

