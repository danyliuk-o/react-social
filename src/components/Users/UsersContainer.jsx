import Users from './Users'
import { connect } from 'react-redux'
import { setUsersAC, followAC, unfollowAC } from '../../redux/usersReducer'

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)