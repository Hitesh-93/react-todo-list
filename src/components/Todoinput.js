import React, { useState } from 'react'

const Todoinput = (props) => {
    const [inputText, setInputText] = useState('')


    return (
        <div className='input-container'>
            <input type='text' className='input-box-todo'
                placeholder='Enter your todo' value={inputText}
                onChange={(e) => { setInputText(e.target.value) }}
            />

            <button className='add-btn' onClick={() => {
                props.addList(inputText)
                setInputText("")
            }}> + </button >


            {/* <h1>{inputText}</h1> */}
        </div>
    )
}

export default Todoinput