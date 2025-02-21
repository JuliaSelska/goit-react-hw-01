import FrendsListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'



export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(person => (
                <li className={css.friendListItem} key={person.id}>
                    <FriendListItem friend={person} />
                </li>
            ))}
        </ul>
    );
}
