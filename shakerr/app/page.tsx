'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';

export default function Home() {


  const [ userInput, setUserInput ] = useState("");
  const router = useRouter();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(userInput);
    router.push('/search')
  };
    

  return (
    <div className="grid grid-cols-2">
        <div id="left" className="h-screen w-full flex flex-col items-center">
            <Image
                src="/assets/logo.png"
                height={95}
                width={185}
                alt="Shakerr logo"
                className="mt-16"
            />

            <p className="text-lg font-mono mt-16">Cocktail Recipe Search</p>

            <div className="mt-2">
                <form className="flex flex-col items-center" onSubmit={submitHandler}>
                  <div>
                      <input className="border rounded p-2 w-72 font-mono text-sm" type="text" placeholder="Type search here..." onChange={(e)=>setUserInput(e.target.value)}/>
                  </div>
                  <button className="border font-mono rounded p-1 px-5 mt-3">Search</button>
                </form>
            </div>

            

            <div className="mt-10">
              <p className="text-lg font-mono">Popular Cocktails</p>
            </div>
        </div>

        <div id="right" className="h-screen w-1/2 absolute right-0 top-0 bottom-0">
            <Image
                src="/assets/bev.jpg"
                fill={true}
                alt="A delicious looking beverage."
            />
        </div>



    </div>
  )};
