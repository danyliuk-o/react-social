import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../img/panda.png";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className="users-item" key={user.id}>
            <div className="users-ava-wrap">
                <NavLink
                    to={`/profile/${user.id}`}
                    className="users-follow-link"
                >
                    <div className="users-avatar-wrapper">
                        <img
                            className="users-avatar-img"
                            src={user.photos.small || userPhoto}
                            alt="avatar"
                        />
                    </div>
                </NavLink>
                {user.followed ? (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        className="users-follow-btn"
                        onClick={() => {
                            unfollow(user.id);
                        }}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        className="users-follow-btn"
                        onClick={() => {
                            follow(user.id);
                        }}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div className="users-block">
                <div className="users-info">
                    <div className="users-name">{user.name}</div>
                    <div className="users-status">{user.status}</div>
                </div>
                <div className="users-location">
                    <div className="users-country">{`user.location.country,`}</div>
                    <div className="users-city">{`user.location.city`}</div>
                </div>
            </div>
        </div>
    );
}

export default User;