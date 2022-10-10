import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import { BrandLogo } from "../Assets/index"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#000",
    width: "100%",
    padding: "1rem 0"
  },
  logoImg: {
    width: "60%",
    // THEME BREAKPOINT FOR SMALL SCREEN

    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    // THEME BREAKPOINT FOR SMALL SCREEN

    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly"
    }
  },

  loginbtntwo: {
    padding: "15px 2rem",
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontStyle: "normal",
    cursor: "pointer",
    fontFamily: "Montserrat",
    // THEME BREAKPOINT FOR SMALL SCREEN

    [theme.breakpoints.down("sm")]: {
      fontSize: "15px"
    }
  },
  signupbtn: {
    padding: "10px 3rem",
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    fontStyle: "normal",
    cursor: "pointer",
    fontFamily: "Montserrat",
    borderRadius: "2rem",
    // THEME BREAKPOINT FOR SMALL SCREEN
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px"
    }
  }
}))
function Navbar() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* MAIN GRID  */}
      <Grid container justifyContent="center" alignItems="center">
        {/* MAIN ITEM */}
        <Grid item xs={12} sm={10} md={11} lg={10}>
          {/* NESTED GRID CONTAINER */}

          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={3} sm={2} md={2} lg={2}>
              <img src={BrandLogo} alt="logo" className={classes.logoImg} />
            </Grid>
            <Grid item xs={9} sm={5} md={4} lg={4}>
              <div className={classes.btnContainer}>
                <Link to="/login">
                  <button className={classes.loginbtntwo}>login</button>
                </Link>
                <Link to="/signup">
                  <button className={classes.signupbtn}>sign up</button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default Navbar
