import React from 'react'
import './styles.css'
export default function UserItem() {
    return (
        <li id='1' className='user_item'>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Random img" width={40} height={40}/>
            <span>Jorge</span>
        </li>
    )
}
