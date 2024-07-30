
import React, { useEffect } from 'react';
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import {Button} from "antd"
import { getClient, query } from '@/lib/client';


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
    <div className='flex flex-1 w-full h-[100vh] bg-white'>
      {data.goals.map((goal:any)=>(
        <>
          <Button>{goal?.name}</Button>
        </>
      ))}
    </div>
  )
}

