import { CssBaseline } from "@material-ui/core"
import React from "react"
import { Routes, Route } from "react-router-dom"

import Login from "./Components/login/Login"
import ForgotPassword from "./Components/forgotpassword/ForgotPassword"
import Signup from "./Components/signup/Signup"
import "./App.css"
import Layout from "./Components/Landing Page/Layout"

function App() {
  return (
    <div>
      <CssBaseline />
      <div>
        <Routes>
          <Route path="/home" element={<Layout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
