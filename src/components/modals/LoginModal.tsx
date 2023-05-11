'use client';

import React, { useEffect, useState } from 'react'
import ReactDom from "react-dom";
import Modal from './Modal';


export interface Props {
    isOpen: boolean;
    onClose: any;
}



export default function LoginModal({isOpen, onClose}: Props) {

    const [portal, setPortal] = useState<HTMLElement>()

    useEffect(()=>{
        if (typeof window !== "undefined") {
            setPortal(document.getElementById('portal') as HTMLElement);
        }
    },[])


    return (

        portal ? ReactDom.createPortal(
            <>
                <Modal close={onClose} open={isOpen} className={``}>
                    <div className="w-[10rem] h-[20rem] bg-white rounded-2xl p-4  shadow-lg">aaaaaaaaaa</div>
                </Modal>
            </>
            , portal
        ): null

    )
}
