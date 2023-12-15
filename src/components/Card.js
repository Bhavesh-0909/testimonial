import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Card(props) {

  //const review = props.review;
  

  return (
    <div className='flex flex-col gap-5 '>
      <div>
        
        <div className='absolute z-10 w-[140px] h-[140px] bg-violet-500 rounded-full left-10 -top-12'></div>
        <img src={props.review.image} className=' absolute w-[140px] h-[140px] aspect-square rounded-full z-20 left-7 -top-12 '/>

      </div>

      <div>
        <h3 className='text-2xl font-bold tracking-wider'>{props.review.name}</h3>
        <h4 className='text-violet-500 font-semibold'>{props.review.job}</h4>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='text-violet-500 text-center'><FaQuoteLeft/></div>
        <div>{props.review.text}</div>
        <div className='text-violet-500 text-center'><FaQuoteRight/></div>
      </div>

    </div>
  )
}
