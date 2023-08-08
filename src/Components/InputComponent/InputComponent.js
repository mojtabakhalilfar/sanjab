import React from 'react'
import './inputComponent.css'

const InputComponent = (props) => {
  return (
    <input id='input-component-id'
        className={props.className}         
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        key={props.key}/>
  )
}

export default InputComponent