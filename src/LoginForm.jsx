import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
const navigate = useNavigate()

   const handleSubmit = (e) => {
e.preventDefault();
        navigate('/Codereviewtrack')
    }
  return (
    <div>
        <h3 className='text-2xl mb-4'>LoginForm</h3>
        <form className='flex flex-col gap-4 justify-center items-center' onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='email' className='border-2 rounded-2xl p-2'/>
            <input type="password" placeholder='password' className='border-2 rounded-2xl p-2'/>
              <button type='submit' className='bg-gradient-to-r from-green-500 to-green-800 text-white p-2 rounded-2xl w-[100px]'>Login</button>
        </form>
    </div>
        
  )
}
