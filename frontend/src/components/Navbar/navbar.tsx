
'use client'
import React, { useEffect } from 'react';
import { Layout, Statistic} from "antd"
const { Header, Content, Footer } = Layout;
import { RiProgress7Line, RiTaskFill, RiTaskLine } from "react-icons/ri";
import { GET_GOALS, GET_GOALS_COMPLETE } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

export default function Navbar({children}:any){ 
  const router = useRouter();
  const goals = useQuery(GET_GOALS);
  const goalsComplete = useQuery(GET_GOALS_COMPLETE);

  return (
    <div className='flex flex-1 w-full h-[100vh] bg-white'>
     <Layout>
     <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          height:'150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between'
        }}
      >
        <div className='flex flex-row items-center cursor-pointer' onClick={()=> router.push('/goals')}>
          <img src='/logo.png' alt='Logo' width={120}/>
          <h1 className='text-xl text-white font-semibold'>Goals Manager</h1>
        </div>
        <div className='hidden lg:block'>
          {
            !goals.loading && !goalsComplete.loading &&(
              <>
                <Statistic valueStyle={{color:'white'}}  value={goals.data.goals.length} prefix={<RiTaskLine />} suffix={<p>Goals</p>}/>
                <Statistic valueStyle={{color:'white'}} value={goals.data.goals.length-goalsComplete.data.goalsComplete.length} prefix={<RiProgress7Line />} suffix={<p>In Progress</p>}/>
                <Statistic  valueStyle={{color:'white'}} value={goalsComplete.data.goalsComplete.length} prefix={<RiTaskFill />} suffix={<p>Done</p>}/>      
              </>
            )
          }
        
        </div>
      </Header>
      <Content>
       {children}
      </Content>
     </Layout>
    </div>
  )
}