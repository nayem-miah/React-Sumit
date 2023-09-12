import React from 'react'

export default function Input({ feet, inch, feetHandler,inchHandler, result}) {
  return (
    <div>
         <form>

        <input onChange={(e)=>feetHandler(e)} value={feet} placeholder='Enter feet' type="text"/>
        <input onChange={(e)=>inchHandler(e)} value={inch} placeholder='Enter inch' type="text"/>

        </form>
        <h4>আপনার উচ্চতা {result} সেন্টিমিটার</h4>

    </div>
  )
}
