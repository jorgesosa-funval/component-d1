import React from 'react'
import './styles.css'
import profile1  from '/images/profile1.png'
import profile2  from '/images/profile2.png'
import MessageItem from '../MessageItem/MessageItem'
export default function RightSide() {
    return (
        <main >
            <ul>
               <MessageItem profile={profile1} name="Alberto" />
               <MessageItem profile={profile2}/>
            </ul>
        </main>
    )
}
