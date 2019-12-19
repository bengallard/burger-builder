import React from 'react'

import classes from "./MenuButton.css";

const menuButton = (props) => (
    <div className={classes.MenuButton}>
        <a onClick={props.clicked}>{props.children}</a>
    </div>
)

export default menuButton