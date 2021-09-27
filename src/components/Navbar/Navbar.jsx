import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <aside className="sidebar">
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li className={classes.item}><NavLink to="/profile" className={classes.link} activeClassName={classes.activeLink}>Profile</NavLink></li>
                    <li className={classes.item}><NavLink to="/dialogs" className={classes.link} activeClassName={classes.activeLink}>Messages</NavLink></li>
                    <li className={classes.item}><NavLink to="/users" className={classes.link} activeClassName={classes.activeLink}>Users</NavLink></li>
                    <li className={classes.item}><NavLink to="/news" className={classes.link} activeClassName={classes.activeLink}>News</NavLink></li>
                    <li className={classes.item}><NavLink to="/music" className={classes.link} activeClassName={classes.activeLink}>Music</NavLink></li>
                    <li className={classes.item}><NavLink to="/settings" className={classes.link} activeClassName={classes.activeLink}>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar