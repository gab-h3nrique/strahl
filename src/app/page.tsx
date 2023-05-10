
'use client';

import React, { cache, use, useEffect, useState } from 'react'
import Api from '../providers/http/api'
import GroupModel from '../models/GroupModel'


const getData = cache(async (a:any) => { 
  console.log(a)
  return Api.get('/api/group', {id: a})
});

export default function Page() {


  const group = use(getData('1'))

  console.log(group)

  useEffect(()=>{


  },[])


  return (
    <>
      <div onClick={()=>{}} className="font-extrabold text-3xl">Next-generation Node.js and TypeScript ORM aa</div>
    </>
  )
}
