import React from 'react';
import CardItem from '@/components/CardItem/cardItem';

export default function ListGoals({goals}:any){
  return(
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-2 p-4">
      {goals?.map((goal:any)=>(
       <CardItem key={goal.id} goal={goal}/>
      ))}
    </div>
  )
}