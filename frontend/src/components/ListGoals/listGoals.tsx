import React from 'react';
import CardItem from '@/components/CardItem/cardItem';

export default function ListGoals({goals}:any){
  console.log(goals)
  return(
    <div className='w-full flex gap-4 p-3'>
      {goals?.map((goal:any)=>(
       <CardItem key={goal.id} goal={goal}/>
      ))}
    </div>
  )
}