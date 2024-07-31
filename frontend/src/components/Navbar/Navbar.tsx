
'use client'
import React from 'react';
import { Layout} from "antd"
const { Header, Content, Footer } = Layout;

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Navbar({children}:any){ 

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
        }}
      >
        <img src='/logo.png' alt='Logo' width={120}/>
        <h1 className='text-xl text-white font-semibold'>Goals Manager</h1>
      </Header>
      <Content>
       {children}
      </Content>
     </Layout>
    </div>
  )
}

