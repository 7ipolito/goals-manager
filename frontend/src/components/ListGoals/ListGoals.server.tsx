import React from 'react';

export default async function ListGoals({goals}:any){

  return(
    <div>
      {goals.map((goal:any)=>(
        <h1 key={goal.id}>{goal.name}</h1>
      ))}
    </div>
  )
}