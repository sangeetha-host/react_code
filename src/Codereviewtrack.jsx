import { ArrowRight, ArrowRightIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import React, { useState } from 'react'
import { increment, decrement, incrementByAmount } from './CounterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Codereviewtrack = () => {

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch()

  //   const [upvote, setUpvote] = useState(() => {
  // return Number(localStorage.getItem("upvote") )|| 0
  //   });
  //   const [downvote, setDownvote] = useState(()=>{
  //     return Number(localStorage.getItem("downvote")) || 0
  //   });
  //   const [zoomUp, setZoomUp] = useState(false);
  //   const [zoomDown, setZoomDown] = useState(false);


  // const handleUpvote = () => {

  //   setUpvote((prev) =>{
  //   const newUpvote = prev+1;
  //   localStorage.setItem("upvote", newUpvote);
  //   return newUpvote;
  //   });

  //   setZoomUp(true);
  //   setTimeout(() => {
  //     setZoomUp(false);
  //   }, 300);

  // }

  // const handleDownvote = () => {
  //   setDownvote((prev) =>{
  //    const newDownvote = prev + 1;
  //   localStorage.setItem("downvote", newDownvote);
  //   return newDownvote;
  //   });

  //   setZoomDown(true);
  //   setTimeout(() => {
  //     setZoomDown(false);
  //   }, 300);
  // }


  return (
    <div className='mt-6 p-4'>
      <div className='w-full bg-green-800 p-2 flex items-center'>
        <p className='text-white text-[20px]'>Hi, this is codereviewtrack</p>
      </div>
      <div className='bg-white'>
        <div className='flex flex-row justify-center items-center gap-6 p-4'>
          <div className=' w-1/3 p-5 border-2  bg-white text-white border-2 rounded-md shadow-2xl shadow-black-50 '>
            <span className='text-black text-[20px] font-semibold'>
              Reability
            </span>
            <div className='flex flex-row justify-center items-center gap-2 mt-6'>
              <button className='p-3 bg-green-500 rounded-md  text-[14px] flex flex-col gap-3 justify-center items-center shadow-md shadow-red-100 cursor-pointer' onClick={() => dispatch(increment())}>
                {/* {data.map((item) => ( */}

                {/* ))} */}
                {/* <span
                  className={`inline-block text-yellow-700 transition-transform duration-300 
                  ${zoomUp ? 'scale-150' : 'scale-100'
                    }`}
                >
                  <ThumbsUpIcon size={20} />
                </span> */}
                Upvote</button>
              <button className='p-3 bg-red-800  rounded-md  text-[14px] flex flex-col justify-center items-center gap-3 rounded-md shadow-md shadow-red-100 cursor-pointer' onClick={() => dispatch(decrement())}>
                {/* <span
                className={`inline-block text-yellow-700 transition-transform duration-300 ${zoomDown ? 'scale-150' : 'scale-100'
                  }`}
                >
                  <ThumbsDownIcon size={20} />
                </span> */}
                Downvote</button>
              <button className='p-3 bg-green-500 rounded-md  text-[14px] flex flex-col justify-center items-center gap-3 rounded-md shadow-md shadow-red-100 cursor-pointer' onClick={() => dispatch(incrementByAmount(5))}>
              </button>
            </div>
            <div className='mt-8'>
              <p className='text-black text-[20px]'>upvote count :{counter}</p>
              {/* <p className='text-black text-[20px]'>Downvote count :{downvote}</p> */}
            </div>

              <button className='flex items-center gap-2 text-black border-2 border-black p-2 rounded-md mt-6 cursor-pointer'>
                
                <span><ArrowRightIcon size={20} /></span>
                Login</button>


          </div>
        </div>
      </div>
    </div>
  )
}
