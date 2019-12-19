import React from 'react'
import Logo from '../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Toolbar.css'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuButton clicked={props.menuClicked}>Menu</MenuButton>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar