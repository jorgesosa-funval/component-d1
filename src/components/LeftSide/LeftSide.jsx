import UserItem from '../UserItem/UserItem'
import './styles.css'
function LeftSide() {
    return (
        <aside>
            <h1>Usuarios</h1>
            <ul>
                <UserItem
                    name="Gabriel "
                    apellido="Ferrin"
                />
                <UserItem name="Jennifer" />
                <UserItem name="Alberto" />
                <UserItem name="Hyrum" />
                <UserItem name="Sebastian" />
            </ul>
        </aside>
    )
}


export default LeftSide