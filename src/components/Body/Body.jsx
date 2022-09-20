import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/Main/Main'
import Login from '../../pages/Login/Login'
import MyPage from '../../pages/MyPage/MyPage'
import SignIn from '../../pages/SignIn/SignIn'
import Detail from '../../pages/Detail/Detail'

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage/order" element={<MyPage />} />
      <Route path="/sign-up" element={<SignIn />} />
      <Route path="/mypage/order/:id" element={<Detail />} />
    </Routes>
  )
}

export default Body
