import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import WalletConnect from "@walletconnect/client"
// import QRCodeModal from "@walletconnect/qrcode-modal"
import { mergePath } from "../../Constants/utils";
import axios from "axios";
import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider"
// import Web3Modal from "web3modal"
import MetaMaskAuth from "./metamaskauth";

import "./styles.css";
import {
  BrandLogo,
  WalletConnectIcon,
  // MetaMask,
  TrustWallet,
} from "../Assets/index";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  // const dappUrl = "hom-dao-33211.botics.co/login" // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
  // const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl

  const [LoginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });

  const [snackState, setSnackState] = React.useState({
    state: false,
    severity: "",
    message: "",
  });

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      setSnackState({
        state: false,
        severity: "",
        message: "",
      });
      return;
    }

    setSnackState({
      state: false,
      severity: "",
      message: "",
    });
  };

  const connectWC = async () => {
    try {
      var provider = new WalletConnectProvider({
        // rpc: {
        //   1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
        //   137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
        //   // ...
        // },
        infuraId: "847adcaaa9bc4b708dfda2352a6f6ed1",
        bridge: "https://bridge.walletconnect.org",
      });
      await provider.enable();
      var account;

      const web3 = new Web3(provider);
      // window.w3 = web3;

      var accounts = await web3.eth.getAccounts(); // get all connected accounts
      account = accounts[0]; // get the primary account
      console.log("account=>", account);
      setSnackState({
        state: true,
        severity: "success",
        message: `Connected with account: ${account}`,
      });
    } catch (error) {
      setSnackState({
        state: true,
        severity: "error",
        message: "Failed to Connect Wallet",
      });
      console.log(error);
    }
  };

  // const connectMM = async () => {
  //   if (!window.ethereum) {
  //     setSnackState({
  //       state: true,
  //       severity: "info",
  //       message: "Install Metamask"
  //     })
  //     return
  //   }

  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts"
  //   })
  //   const account = accounts[0]

  //   // onConnected(account)
  //   console.log("metamask account=>", account)
  //   setSnackState({
  //     state: true,
  //     severity: "success",
  //     message: `Metamask Connected with: ${accounts[0]}`
  //   })
  // }

  // function isMobileDevice() {
  //   return "ontouchstart" in window || "onmsgesturechange" in window
  // }

  // var disconnect = async () => {
  //   // Close provider session
  //   await provider.disconnect()
  // }

  const handleEmailChange = (event) => {
    setLoginCred({
      ...LoginCred,
      email: event.target.value,
    });
  };

  const handleLoginClick = () => {
    console.log("LoginCred=>", LoginCred);
    //make a post request to the Login Endpoint
    const loginPath = mergePath("/api/v1/auth/login/");
    axios
      .post(loginPath, {
        email: LoginCred.email || "",
        password: LoginCred.password || "",
      })
      .then((res) => {
        //open snack bar with success message
        setSnackState({
          state: true,
          severity: "success",
          message: "Sign In Success",
        });
        console.log(res);
      })
      .catch((error) => {
        //open snack bar with failure message
        setSnackState({
          state: true,
          severity: "error",
          message: "Sign In Failure",
        });
        console.log(error);
      });
  };

  const handlePasswordChange = (event) => {
    setLoginCred({
      ...LoginCred,
      password: event.target.value,
    });
  };
  return (
    <div className="root">
      <Grid container alignItems="flex-start">
        {/* SIDE BAR GRID */}
        <Grid item xs={12} sm={7} md={5} lg={5}>
          <div className="side-bar">
            <div className="container">
              <div className="logo-container">
                <img src={BrandLogo} alt="logo" className="brand-logo" />
              </div>
            </div>

            {/* LOGIN GRID */}

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className="spacing"
            >
              <Grid item sm={12} xs={12} lg={11}>
                <button className="login-btn">
                  <Link to="/home" className="nav-link">
                    <ArrowBackIosIcon className="login-arrow" />
                  </Link>
                </button>
                <span className="login-text">log in</span>
              </Grid>
            </Grid>

            {/* FORM SECTION STARTS HERE */}
            <div className="container">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className="form-spacing"
              >
                <Grid item sm={12} xs={12} md={12} lg={11}>
                  <p className="form-label">email</p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <input
                    className="form-field"
                    type="email"
                    autocomplete="off"
                    nofill
                    onChange={handleEmailChange}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <p className="form-label">password</p>
                </Grid>
                <Grid item xs={12} md={12} lg={11}>
                  <input
                    className="form-field"
                    type="password"
                    // autocomplete="off"
                    nofill
                    autocomplete="new-password"
                    onChange={handlePasswordChange}
                  />
                  <p className="forget-btn">
                    <Link to="/forgotpassword">forgot password?</Link>
                  </p>
                </Grid>
              </Grid>
            </div>

            {/* LOGIN BUTTON SECTION */}
            <div className="container-btn">
              <Grid container justifyContent="center">
                <Grid item>
                  <button className="login-btn-two" onClick={handleLoginClick}>
                    log in
                  </button>
                </Grid>
              </Grid>
            </div>

            {/* OR LINE SECTION */}
            <div className="or-line">
              <div className="line"></div>
              <div>
                <p className="or-text">or</p>
              </div>
              <div className="line"></div>
            </div>

            {/* WALLET BUTTON SECTION */}
            <div className="container-btn">
              <Grid container justifyContent="center">
                {/* <Grid xs={10} sm={10} md={10} lg={8}>
                  {data.map((content) => (
                    <button onClick={connect} className="wallet-btn">
                      <img
                        src={content.imgSrc}
                        alt="metamask icon"
                        className="btn-img"
                      />
                      <p className="btn-text">{content.btnDes}</p>
                    </button>
                  ))}
                </Grid> */}
                <Grid xs={10} sm={10} md={10} lg={8}>
                  <MetaMaskAuth onAddressChanged={(address) => {}} />
                  {/* {!isMobileDevice ? (
                    <a
                      href={metamaskAppDeepLink}
                      style={{ textDecoration: "none" }}
                    >
                      <button className="wallet-btn">
                        <img
                          src={MetaMask}
                          alt="metamask icon"
                          className="btn-img"
                        />
                        <p className="btn-text">log in with metamask Mobile</p>
                      </button>
                    </a>
                  ) : (
                    <button onClick={connectMM} className="wallet-btn">
                      <img
                        src={MetaMask}
                        alt="metamask icon"
                        className="btn-img"
                      />
                      <p className="btn-text">log in with metamask Web</p>
                    </button>
                  )} */}
                </Grid>
                <Grid xs={10} sm={10} md={10} lg={8}>
                  <button className="wallet-btn" onClick={connectWC}>
                    <img
                      src={TrustWallet}
                      alt="Trust icon"
                      className="btn-img"
                    />
                    <p className="btn-text">log in with Trust wallet</p>
                  </button>
                </Grid>
                <Grid xs={10} sm={10} md={10} lg={8}>
                  <button
                    // onClick={openModal}
                    onClick={connectWC}
                    className="wallet-btn"
                  >
                    <img
                      src={WalletConnectIcon}
                      alt="Wallet Connect icon"
                      className="btn-img"
                    />
                    <p className="btn-text">log in with Wallet Connect</p>
                  </button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>

        {/* IMAGE GRID */}
        <Grid item sm={5} md={7} lg={7}>
          <div className="background-img"></div>
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
  );
}

export default Login;
