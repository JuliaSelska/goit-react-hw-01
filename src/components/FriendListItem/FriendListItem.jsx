import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {

    const statusClsx = clsx(css.text, isOnline ? css.isOnline : css.isOffline);

    return (
        <div className={css.friendListItem}>
            <img src={avatar} alt={`Avatar of ${name}`} width="48" />
            <p>Friend name {name} </p>
            <p style={{ color: isOnline ? "green" : "red" }}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
};