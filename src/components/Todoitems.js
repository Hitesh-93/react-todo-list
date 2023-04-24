import React from 'react'

const Todoitems = (props) => {
    return (
        <>

            <li className='list-item'>{props.item}
                <span className='icons'><i className="fa-solid fa-trash-can" onClick={(e)=>{props.del(props.index)}}></i></span>
            </li>
        </>
    )
}

export default Todoitems