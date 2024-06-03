import './styles.css'
export default function UserItem({name, apellido}) {
        
    return (
        <li className='user_item'>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Random img" width={40} height={40}/>
            <span>{name} {apellido}</span>
        </li>
    )
}
