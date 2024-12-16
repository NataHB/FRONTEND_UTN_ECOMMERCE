import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import ValidateMail from "./Components/Registro/ValidateMail.jsx"
import { CategoryScreen, CreateScreen, DetailScreen, ForgotPasswordScreen, Home, LoginScreen, MyProductsScreen, RecoveryPasswordScreen, RegisterScreen, UpdateScreen, AllProductsScreen  } from "./Screens/index.js"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />  
        <Route path="/auth/recovery-password/:reset_token" element={<RecoveryPasswordScreen /> } />
        <Route path="/auth/verify-email/:validation_token" element={<ValidateMail /> } />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProductsScreen/>}/>
				<Route path="/product/:product_id" element={<DetailScreen/>}/>
        <Route path="/category/:category" element={<CategoryScreen/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/create" element={<CreateScreen/>}/>
        <Route path="/update/:product_id" element={<UpdateScreen/>}/>
        <Route path="/admin" element={<MyProductsScreen/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App