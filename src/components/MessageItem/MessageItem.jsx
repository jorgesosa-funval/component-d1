import React from 'react'
import './styles.css'
export default function MessageItem({profile, name}) {
    return (
        <li className='message'>
            <img src={profile} alt="random user img" width={56} height={56}/>
            <div className='message_container'>
                <header>
                    <h3>{name}</h3>
                    <h4>fecha</h4>
                </header>
                <p>message</p>
            </div>
        </li>
    )
}
