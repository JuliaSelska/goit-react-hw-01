
export default function FriendList({ friend }) {
    return (
        <ul>
            {/* Кількість li залежить від кількості об'єктів в масиві */}
            <li>
                <FriendListItem />
            </li>
        </ul>

    )
}
