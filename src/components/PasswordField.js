import React from 'react'
import { get, isEmpty } from 'lodash'

const PasswordField = ({error, label, name, onChange, value, ...rest}) => {
  const errorMessage = !isEmpty(error) && error

  return (
    <div className='my-5'>
      <label className='font-bold'>{label}</label>
      <input 
          type='password' 
          value={value} 
          onChange={onChange} 
          name={name} 
          disabled={get(rest, 'disabled', false)} 
          readOnly={get(rest, 'readOnly', false)}
          className='border-gray-300 rounded text-sm w-full border-2 p-2'
      />
      <p className='text-xs text-red-500'>{errorMessage}</p>
    </div>
  )
}

export default PasswordField