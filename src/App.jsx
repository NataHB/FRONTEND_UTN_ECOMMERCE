import React from "react"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import ValidateMail from "./Components/Registro/ValidateMail.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import { CategoryScreen, CreateScreen, DetailScreen, ForgotPasswordScreen, Home, LoginScreen, MyProductsScreen, RecoveryPasswordScreen, RegisterScreen, UpdateScreen, AllProductsScreen, ValidateEmailScreen } from "./Screens/index.js"
import Footer from "./Components/Footer/Footer.jsx"

const App = () => {

  const [ forceUpdate, setForceUpdate ] = useState(false)

  return (
    <>
      <Navbar setForceUpdate={setForceUpdate} forceUpdate={forceUpdate}/>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />  
        <Route path="/auth/recovery-password/:reset_token" element={<RecoveryPasswordScreen /> } />
        <Route path="/verify-email/:validation_token" element={<ValidateEmailScreen /> } />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProductsScreen />}/>
				<Route path="/product/:product_id" element={<DetailScreen/>}/>
        <Route path="/category/:category" element={<CategoryScreen/>}/>
        <Route path="*" element={<Home />} />
        <Route element={<ProtectedRoute/>}>
        <Route path="/create" element={<CreateScreen setForceUpdate={setForceUpdate}/>}/>
        <Route path="/update/:product_id" element={<UpdateScreen setForceUpdate={setForceUpdate}/>}/>
        <Route path="/admin" element={<MyProductsScreen setForceUpdate={setForceUpdate} />}/>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App