import React, { useState } from "react"
import { Grid, makeStyles } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { mergePath } from "../../Constants/utils"
import axios from "axios"
import MuiAlert from "@mui/material/Alert"
import { Snackbar } from "@mui/material"
// import "./signupstyles.css";
import { BrandLogo, Signuppage } from "../Assets/index"
import { Link } from "react-router-dom"
// import ForgotPassword from "../../Components/forgotpassword/ForgotPassword";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

// Element Styling Starts here
const useStyles = makeStyles(theme => ({
  root: {
    color: "#fff",
    backgroundColor: "#000"
  },
  sidebar: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%"
  },
  container: {
    padding: "0.8rem 0rem"
  },

  brandlogo: {
    width: "100%"
  },

  navlink: {
    color: "#fff"
  },
  // LOGIN CONTAINER STYLING STARTS HERE
  spacing: {
    margin: "0rem "
  },
  loginbtn: {
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  logintext: {
    fontSize: "43px",
    fontWeight: "lighter",
    textTransform: "capitalize",
    lineHeight: "45px",
    marginLeft: "2rem"
  },
  /* LOGIN CONTAINER STYLING ENDS HERE */

  /* FORM CONTAINER STYLING STARTS HERE */
  formspacing: {
    margin: "0rem 0"
  },

  formlabel: {
    fontSize: "15px",
    textTransform: "capitalize",
    fontWeight: "500",
    lineHeight: "21.94px"
  },

  formfield: {
    width: "100%",
    padding: "10px",
    borderRadius: "30px",
    border: "none",
    background: "#ffffff1c",
    color: "#fff",
    fontSize: "16px"
  },

  forgetbtn: {
    textAlign: "right",
    marginTop: "10px"
  },

  forgetbtnanchor: {
    color: "#fff",
    fontSize: "14px",
    textTransform: "capitalize"
  },

  /* LOGIN BUTTON STYLING STARTS HERE */

  containerbtn: {
    margin: "2rem 0"
  },

  loginbtntwo: {
    padding: "15px 7rem",
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "capitalize",
    background: "#3399C6",
    borderRadius: "60px",
    border: "none",
    color: "#fff",
    fontStyle: "normal",
    cursor: "pointer",
    fontFamily: "Montserrat"
  },

  /* LOGIN BUTTON STYLING ENDS HERE */

  backgroundimg: {
    backgroundImage: `url(${Signuppage})`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  bggrid: {
    width: "100%"
  }
}))

function Signup() {
  const [cred, setCred] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const [snackState, setSnackState] = React.useState({
    state: false,
    severity: "",
    message: ""
  })

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      setSnackState({
        state: false,
        severity: "",
        message: ""
      })
      return
    }

    setSnackState({
      state: false,
      severity: "",
      message: ""
    })
  }

  const handleCredChange = event => {
    console.log("event.target=>", event.target.name)
    if (
      event.target.name === "password" &&
      event.target.value === cred.confirmPassword
    ) {
      setSnackState({
        state: true,
        severity: "success",
        message: "Password Matched"
      })
    } else if (
      event.target.name === "confirmPassword" &&
      event.target.value === cred.password
    ) {
      setSnackState({
        state: true,
        severity: "success",
        message: "Password Matched"
      })
    }
    setCred({
      ...cred,
      [event.target.name]: event.target.value
    })
  }

  const handleRegisterClick = () => {
    console.log("cred=>", cred)
    const registerPath = mergePath("/api/v1/auth/register/")
    // const postData = delete cred.confirmPassword
    axios
      .post(registerPath, {
        name: cred.name || "",
        username: cred.username || "",
        email: cred.email || "",
        phone: cred.phone || "",
        password: cred.password || ""
      })
      .then(res => {
        //open snack bar with success message
        console.log("res=>", res)
        setSnackState({
          state: true,
          severity: "success",
          message: "Sign Up Success"
        })

        setCred({
          name: "",
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        })
      })
      .catch(error => {
        //open snack bar with failure message
        setSnackState({
          state: true,
          severity: "error",
          message: "Sign Up Failed"
        })
        console.log("error=>", error.status)
      })
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container alignItems="flexstart">
        {/* SIDE BAR GRID */}
        <Grid item xs={12} sm={9} md={6} lg={5}>
          <div className={classes.sidebar}>
            <div className={classes.container}>
              <Grid container>
                <Grid item xs={1} sm={2} lg={1}></Grid>
                <Grid item xs={2} sm={2} lg={2}>
                  <div className={classes.logocontainer}>
                    <img
                      src={BrandLogo}
                      alt="logo"
                      className={classes.brandlogo}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
            ​{/* Signup  GRID */}​
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={classes.spacing}
            >
              <Grid item sm={12} xs={12} lg={11}>
                <button className={classes.loginbtn}>
                  <Link to="/home" className={classes.navlink}>
                    <ArrowBackIosIcon className={classes.loginarrow} />
                  </Link>
                </button>
                <span className={classes.logintext}> sign up</span>
              </Grid>
            </Grid>
            ​{/* FORM SECTION STARTS HERE */}
            <Grid container justifyContent="center">
              <Grid item sm={8} lg={10}>
                {/*  */}
                <div className={classes.container}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.formspacing}
                  >
                    <Grid item sm={12} xs={12} md={12} lg={11}>
                      <p className={classes.formlabel}>Full name</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={11}>
                      <input
                        className={classes.formfield}
                        type="text"
                        autocomplete="off"
                        nofill
                        name="name"
                        value={cred.name || ""}
                        onChange={handleCredChange}
                      />
                    </Grid>
                  </Grid>
                  ​
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.formspacing}
                  >
                    <Grid item sm={12} xs={12} md={12} lg={11}>
                      <p className={classes.formlabel}>User name</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={11}>
                      <input
                        className={classes.formfield}
                        type="text"
                        autocomplete="off"
                        nofill
                        name="username"
                        value={cred.username || ""}
                        onChange={handleCredChange}
                      />
                    </Grid>
                  </Grid>
                  ​
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.formspacing}
                  >
                    <Grid item sm={12} xs={12} md={12} lg={11}>
                      <p className={classes.formlabel}> email</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={11}>
                      <input
                        className={classes.formfield}
                        type="email"
                        autocomplete="off"
                        nofill
                        name="email"
                        value={cred.email || ""}
                        onChange={handleCredChange}
                      />
                    </Grid>
                  </Grid>
                  ​
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.formspacing}
                  >
                    <Grid item sm={12} xs={12} md={12} lg={11}>
                      <p className={classes.formlabel}> phone number</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={11}>
                      <input
                        className={classes.formfield}
                        type="number"
                        // autocomplete="off"
                        autocomplete="new-number"
                        nofill
                        name="phone"
                        value={cred.phone || ""}
                        onChange={handleCredChange}
                      />
                    </Grid>
                  </Grid>
                  ​
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.formspacing}
                  >
                    <Grid item sm={12} xs={12} md={12} lg={11}>
                      <p className={classes.formlabel}> create password</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={11}>
                      <input
                        className={classes.formfield}
                        type="password"
                        autocomplete="new-password"
                        nofill
                        name="password"
                        value={cred.password || ""}
                        onChange={handleCredChange}
                      />
                    </Grid>
                  </Grid>
                  ​
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.formspacing}
                  >
                    <Grid item sm={12} xs={12} md={12} lg={11}>
                      <p className={classes.formlabel}> Confirm Password</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={11}>
                      <input
                        className={classes.formfield}
                        type="password"
                        // autocomplete="off"
                        autocomplete="new-password"
                        nofill
                        name="confirmPassword"
                        value={cred.confirmPassword || ""}
                        onChange={handleCredChange}
                      />
                    </Grid>
                  </Grid>
                </div>
                {/*  */}
              </Grid>
            </Grid>
            ​{/* Signup BUTTON SECTION */}
            <div className={classes.containerbtn}>
              <Grid container justifyContent="center">
                <Grid item>
                  <button
                    className={classes.loginbtntwo}
                    onClick={handleRegisterClick}
                  >
                    Sign up
                  </button>
                </Grid>
              </Grid>
            </div>
            ​{/* OR LINE SECTION */}​{/* WALLET BUTTON SECTION */}
          </div>
        </Grid>
        ​{/* IMAGE GRID */}
        <Grid item sm={3} md={6} lg={7}>
          <div className={classes.backgroundimg}></div>
        </Grid>
      </Grid>

      <Snackbar
        open={snackState.state}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message="Note archived"
        //action={action}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={snackState.severity}
          sx={{ width: "100%" }}
        >
          {snackState.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Signup
