import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from './Card';

export default function Testimonial(props) {
  const reviews = props.reviews;

  const [index, setIndex] = useState(0);
  
  function leftShiftHandler(){
    if(index - 1 < 0){
      setIndex(reviews.length - 1);
    }else{
    setIndex(index-1);
    }
  }

  function rightShiftHandler(){
    if(index + 1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
    
  }

  function supriseHandler(){
    setIndex(Math.floor((Math.random() * reviews.length)));
  }

  
  return (
    <div className='bg-white relative shadow-sm rounded-lg w-[70%] min-w-[300px] h-[60%] flex flex-col text-center gap-3 px-20 py-2 hover:shadow-xl'>
        <Card review={reviews[index]}/>
        <div className='flex flex-col gap-4 items-center'>
          <div className='flex gap-5 justify-center'>
            <button onClick={leftShiftHandler}
            className='text-violet-600 text-2xl hover:text-violet-900'
            ><FaAngleLeft/></button>
            <button onClick={rightShiftHandler}
            className='text-violet-600 text-2xl hover:text-violet-900'
            ><FaAngleRight/></button>
          </div>
          <button onClick={supriseHandler}
          className='py-2 px-5 w-fit bg-violet-400 text-xl font-bold text-white rounded-md hover:bg-violet-500 mb-5'
          >Suprise Me</button>
        </div>

    </div>
  )
}
