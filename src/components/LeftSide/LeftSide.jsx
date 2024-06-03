import UserItem from '../UserItem/UserItem'
import './styles.css'
function LeftSide() {
    return (
        <aside>
            <h1>Usuarios</h1>
            <ul>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
            </ul>
        </aside>
    )
}


export default LeftSide