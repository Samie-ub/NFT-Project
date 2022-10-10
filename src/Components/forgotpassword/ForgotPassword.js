import React from "react"
import { Grid } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import "./ForgotPasswordstyles.css"
import { BrandLogo } from "../Assets/index"
import { Link } from "react-router-dom"

function ForgotPassword() {
  return (
    <div className="root">
      <Grid container alignItems="flex-start">
        {/* SIDE BAR GRID */}
        <Grid item xs={12} sm={9} md={6} lg={5}>
          <div className="side-bar">
            <div className="container">
              <div className="logo-container">
                <img src={BrandLogo} alt="logo" className="brand-logo" />
              </div>
            </div>
            ​{/* LOGIN GRID */}​
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className="spacing"
            >
              <Grid item sm={12} xs={12} lg={11}>
                <button className="login-btn">
                  <Link to="/login">
                    <ArrowBackIosIcon
                      // className="login-arrow"
                      className="nav-link"
                    />
                  </Link>
                </button>
                <span className="login-text"> Forgot Password</span>
              </Grid>
            </Grid>
            ​{/* FORM SECTION STARTS HERE */}
            <div className="container">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className="form-spacing"
              >
                <Grid item sm={12} xs={12} md={12} lg={11}>
                  <p className="password-text">
                    Please enter your email address below and we will send you a
                    link to reset your password
                  </p>
                </Grid>

                <Grid item sm={12} xs={12} md={12} lg={11}>
                  <p className="form-label">email</p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <input className="form-field" type="email" />
                </Grid>
              </Grid>
            </div>
            ​{/* LOGIN BUTTON SECTION */}
            <div className="container-btn">
              <Grid container justifyContent="center">
                <Grid item>
                  <button className="login-btn-two">Submit</button>
                </Grid>
              </Grid>
            </div>
            ​{/* OR LINE SECTION */}​{/* WALLET BUTTON SECTION */}
          </div>
        </Grid>
        ​{/* IMAGE GRID */}
        <Grid item sm={3} md={6} lg={7}>
          <div className="background-img"></div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ForgotPassword
