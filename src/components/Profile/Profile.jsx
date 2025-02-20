import css from '../Profile/Profile.module.css'


const Profile = ({ name, tag, location, image, stats }) => {

    return (
        <div className="profile">
            <div className="profile - info">
                <img className="avatar"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                />
                <p className="name">Petra Marica</p>
                <p className="tag">@pmarica</p>
                <p className="location">Salvador, Brasil</p>
            </div>

            <ul className="stats">
                <li className="stats-li">
                    <span>Followers</span>
                    <span>1000</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>2000</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>3000</span>
                </li>
            </ul>
        </div>
    );

};

export default Profile;


