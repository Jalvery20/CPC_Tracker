import React from 'react'
import {AppBar,Container,Toolbar, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles=makeStyles(()=>({
    title:  {
        flex:6,
        letterSpacing:".15em",
        fontFamily:"Montserrat",
        fontWeight:"bold",
    },
    sign:{
        flex:1,
        letterSpacing:".1em",
        fontFamily:"Montserrat",
        cursor:"pointer",
    }
  }))

const Header = () => {

    const classes= useStyles();

    const history=useHistory();



    return (
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography variant="h5" className={classes.title} onClick={()=>history.push("/")} >
                            <span className="point" >CPC Tracker</span>
                        </Typography>
                        <Typography variant="h6"  className={classes.sign}>
                            <span className="point" >Sign up</span>
                        </Typography>
                        <Typography variant="h6"  className={classes.sign}>
                            <span className="point" >Sign in</span>
                        </Typography>

                        
                    </Toolbar>
                    
                </Container>
            </AppBar>
        
        
    )
}

export default Header
