import {createSelector} from "reselect";
import {AppStateType} from "./reduxStore";

const getUsersData = (state: AppStateType) => {
  return state.usersPage.users
};

export const getUsers = createSelector(getUsersData, (users) => {
  return users.filter((u: any) => true);
})

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
