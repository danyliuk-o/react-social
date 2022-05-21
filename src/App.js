import React, {lazy, Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import Test from "./components/Test/Test";

import {BrowserRouter as Router, Redirect, Route, withRouter} from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some Error')
        console.error('promiseRejectionEvent -> ', promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <main className="main">
                    <Route exact path="/" render={() => <Redirect to={'/profile'} />}/>
                    <Route path="/dialogs" render={() => {
                        return (
                            <Suspense fallback={<Preloader />}><DialogsContainer/></Suspense>
                        )
                    }}/>
                    <Route path="/profile/:userId?" render={() => {
                        return (
                            <Suspense fallback={<Preloader />}><ProfileContainer/></Suspense>
                        )
                    }}/>
                    <Route path="/users" render={() => <UsersContainer pageTitle={'SamuraiJS'}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/test" component={Test}/>
                    <Route path="*" render={() => <div>404</div>}/>
                </main>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainApp = () => {
    return (
        <Router>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </Router>
    )
}

export default MainApp