import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Homepage({}: Props) {
  return (
    <div className="flex flex-row">
        <div id="left">
            logo

            "Cocktail recipe search"

            input field

            search button

            submit button

            popular cocktails
        </div>

        <div id="right" className="w-1/2 fixed right-0 top-0 bottom-0">
            <Image
                src="/assets/bev.jpg"
                fill={true}
                alt="A delicious looking beverage."
                sizes="50vw"
            />
        </div>



    </div>
)
}
