import React, { useEffect, useState } from "react"
import "./styles.css"
import { MetaMask } from "../Assets/index"

function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!")
    return
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  })

  onConnected(accounts[0])
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts"
    })

    if (accounts.length > 0) {
      const account = accounts[0]
      onConnected(account)
      return
    }

    if (isMobileDevice()) {
      await connect(onConnected)
    }
  }
}

export default function MetaMaskAuth({ onAddressChanged }) {
  const [userAddress, setUserAddress] = useState("")

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress)
  }, [])

  useEffect(() => {
    onAddressChanged(userAddress)
  }, [userAddress, onAddressChanged])

  return userAddress ? (
    <div>
      <Address userAddress={userAddress} />
    </div>
  ) : (
    <Connect setUserAddress={setUserAddress} />
  )
}

function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "hom-dao-33211.botics.co/login" // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl
    return (
      <a href={metamaskAppDeepLink} style={{ textDecoration: "none" }}>
        <button className="wallet-btn">
          <img src={MetaMask} alt="metamask icon" className="btn-img" />
          <p className="btn-text">log in with metamask</p>
        </button>
      </a>
    )
  }

  return (
    <button className="wallet-btn" onClick={() => connect(setUserAddress)}>
      <img src={MetaMask} alt="metamask icon" className="btn-img" />
      <p className="btn-text">log in with metamask</p>
    </button>
    // <button onClick={() => connect(setUserAddress)}>Connect to MetaMask</button>
  )
}

function Address({ userAddress }) {
  return (
    <button className="wallet-btn">
      <img src={MetaMask} alt="metamask icon" className="btn-img" />
      <p className="btn-text">
        Connected with: {userAddress.substring(0, 5)}…
        {userAddress.substring(userAddress.length - 4)}
      </p>
    </button>
  )
}
