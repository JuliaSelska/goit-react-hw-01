import clsx from "clsx";


export default function FriendListItem({ avatar, name, isOnline }) {

    const statusClsx = clsx(css.text, isOnline ? css.isOnline : css.offline);

    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>Friend name {name} </p>
            <p className={statusClsx}> Status: {isOnline ? "Online" : "Offline"} Friend status</p>
        </div>
    )
}