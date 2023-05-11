'use client';

import React, { useState } from 'react'
import LoginModal from '../../components/modals/LoginModal'

export default function Page() {

  const [openModal, setOpenModal] = useState<boolean>(false)

  
  return (

    <>
      <div className="font-extrabold text-3xl">Next-generation Node.js and TypeScript ORM aa</div>
      <button onClick={()=> setOpenModal(!openModal)} className='bg-blue-500 p-4 rounded-lg'>Click</button>
      <LoginModal isOpen={openModal} onClose={()=>setOpenModal(false)}/>
    </>

  )
}
