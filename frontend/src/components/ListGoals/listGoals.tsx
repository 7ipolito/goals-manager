import React from 'react';
import CardItem from '@/components/CardItem/cardItem';

export default function ListGoals({goals}:any){
  return(
    <div className='w-full flex gap-4 p-3 max-md:flex-col'>
      {goals?.map((goal:any)=>(
       <CardItem key={goal.id} goal={goal}/>
      ))}
    </div>
  )
}