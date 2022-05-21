import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import {UsersType} from "../../types/types";

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalPaginationCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({currentPage, onPageChanged, pageSize, totalPaginationCount, users, ...props}) => {
    return (
        <>
            <Pagination
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                totalPaginationCount={totalPaginationCount}/>
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
