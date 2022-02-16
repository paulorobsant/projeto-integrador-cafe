import React from 'react'

import TextField from '../../components/TextField'
import PrimaryButton from '../../components/PrimaryButton'


import register from '../../assets/images/register.svg'

const RegisterView = () => {
  return (
    <div className='flex'>
      <div className='flex items-center justify-center h-screen w-2/5'>
        <div className='p-40 w-full'>
        <TextField onChange={({target}) => console.log(target.value)} label='Email' name='Email' type='email'/>
        <TextField onChange={({target}) => console.log(target.value)} label='Confirm the email' name='Email' type='email'/>
        <TextField onChange={() => {}} label='Password' name='Password' type='password'/>
        <TextField onChange={() => {}} label='Confirm the password' name='Password' type='password'/>
        <PrimaryButton large label='Sign Up'/>
        </div>
      </div>
      <div className='h-screen w-3/5 flex items-center justify-center'>
        <img src={register} alt='' className='w-1/2'/>
      </div>
    </div>
  )
}

export default RegisterView