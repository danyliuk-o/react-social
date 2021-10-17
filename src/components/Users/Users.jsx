import React from 'react';
import userPhoto from "../../img/panda.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
    );

    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }
    return (
        <>
            <ul className='pagination'>
                {pagesArr.map(page => {
                    return (
                        <li
                            onClick={() => {
                                props.onPageChanged(page);
                            }}
                            key={page}
                            className={props.currentPage === page ? "active" : null}
                        >
                            {page}
                        </li>
                    );
                })}
            </ul>
            <div className='users-container'>
                <h2 className='users-title'>Users</h2>
                <ul className='user-list'>
                    {props.users.map(user => (
                        <div className='users-item' key={user.id}>

                            <div className='users-ava-wrap'>
                                <NavLink to={`/profile/${user.id}`} className='users-follow-link'>
                                    <div className='users-avatar-wrapper'>
                                        <img
                                            className='users-avatar-img'
                                            src={user.photos.small || userPhoto}
                                            alt='avatar'
                                        />
                                    </div>
                                </NavLink>
                                {user.followed ? (
                                    <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        className='users-follow-btn'
                                        onClick={() => {
                                            props.toggleFollowingProgress(true, user.id)
                                            usersAPI.userUnfollow(user.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                                props.toggleFollowingProgress(false, user.id)
                                            });
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        className='users-follow-btn'
                                        onClick={() => {
                                            props.toggleFollowingProgress(true, user.id)
                                            usersAPI.userFollow(user.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                                props.toggleFollowingProgress(false, user.id)
                                            });
                                        }}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                            <div className='users-block'>
                                <div className='users-info'>
                                    <div className='users-name'>{user.name}</div>
                                    <div className='users-status'>{user.status}</div>
                                </div>
                                <div className='users-location'>
                                    <div className='users-country'>{`user.location.country,`}</div>
                                    <div className='users-city'>{`user.location.city`}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Users;