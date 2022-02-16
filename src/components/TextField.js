import React from 'react'
import { isEmpty } from 'lodash'

const TextField = ({error, label, name, onChange, placeholder, ...rest}) => {
  const errorMessage = !isEmpty(error) && error

  return (
    <div className='my-5'>
      <label className='font-bold'>{label}</label>
      <input 
          type={rest.type || 'text'}  
          placeholder={placeholder} 
          onChange={onChange} 
          name={name} 
          disabled={rest.disabled || false} 
          readOnly={rest.readOnly || false}
          className='border-gray-300 rounded text-sm w-full border-2 p-2'
      />
      <p className='text-xs text-red-500'>{errorMessage}</p>
    </div>
  )
}

export default TextField