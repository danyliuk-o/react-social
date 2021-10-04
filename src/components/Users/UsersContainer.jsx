import React from "react";
import { connect } from 'react-redux'
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer'
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
  componentDidMount() {
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then(res => {
          res.data.totalCount = 10;
          this.props.setUsers(res.data.items);
          this.props.setTotalUsersCount(res.data.totalCount);
        });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then(res => {
          this.props.setUsers(res.data.items);
        });
  }
  render() {
    return (
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)