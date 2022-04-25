import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({users, currentPage, onPageChanged, pageSize, totalUsersCount, ...props}) => {

    return (
        <>
            <Pagination
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}/>
            <div className="users-container">
                <h2 className="users-title">Users</h2>
                <ul className="user-list">
                    {users.map((user) => (
                        <User
                            user={user}
                            key={user.id}
                            follow={props.follow}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Users;
