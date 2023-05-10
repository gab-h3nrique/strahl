import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500  bg-white supports-backdrop-blur:bg-white/95 border-b border-slate-900/10">
        <div className="flex w-full h-full py-2 px-4 justify-between items-center">

            <section className="flex gap-2 items-center w-fit h-fit cursor-pointer">

                <div className="overflow-hidden rounded-lg">
                    <Image src="/logo.png" width={45} height={45} alt="logo"/>
                </div>

                <label className="font-bold text-2xl text-slate-600">Thorm</label>

            </section>

            <section className="">
                bb
            </section>
            

        </div>
    </header>
  )
}
