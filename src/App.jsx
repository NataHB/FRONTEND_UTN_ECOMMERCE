import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login, Register, ForgotPassword, RecoveryPassword } from "./Screens/Registro/index.js"
import Home from "./Screens/Productos/Home.jsx"
import ProductDetail from "./Screens/Productos/ProductDetail.jsx"
import ProductCreator from "./Screens/Productos/ProductCreator.jsx"
import ProductUpdate from "./Screens/Productos/ProductUpdate.jsx"
import "./App.css"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import MyProducts from "./Screens/Productos/MyProducts.jsx"
import ProductCategory from "./Screens/Productos/ProductCategory.jsx"
import ValidateMail from "./Screens/Registro/ValidateMail.jsx"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />  
        <Route path="/auth/recovery-password/:reset_token" element={<RecoveryPassword /> } />
        <Route path="/auth/verify-email/:validation_token" element={<ValidateMail /> } />
        <Route path="/" element={<Home />} />
				<Route path="/product/:product_id" element={<ProductDetail/>}/>
        <Route path="/category/:category" element={<ProductCategory/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/create" element={<ProductCreator/>}/>
        <Route path="/update/:product_id" element={<ProductUpdate/>}/>
        <Route path="/admin" element={<MyProducts/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App