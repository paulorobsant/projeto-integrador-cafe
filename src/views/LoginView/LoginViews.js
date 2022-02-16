import React from 'react'

import TextField from '../../components/TextField'
import PrimaryButton from '../../components/PrimaryButton'


import login from '../../assets/images/login.svg'

const LoginView = () => {
  return (
    <div className='flex'>
      <div className='h-screen w-3/5 flex items-center justify-center'>
        <img src={login} alt='shave the ass' className=''/>
      </div>
      <div className='flex items-center justify-center h-screen w-2/5'>
        <div className='p-40 w-full'>
        <TextField onChange={({target}) => console.log(target.value)} label='Email' name='Email' type='email'/>
        <TextField onChange={() => {}} label='Password' name='Password' type='password'/>
        <PrimaryButton large label='Sign In'/>
        </div>
      </div>
    </div>
  )
}

export default LoginView