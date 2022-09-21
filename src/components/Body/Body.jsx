import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BodySection } from './styled'
import Main from '../../pages/Main/Main'
import Login from '../../pages/Login/Login'
import MyPage from '../../pages/MyPage/MyPage'
import Signup from '../../pages/Signup/Signup'
import Detail from '../../pages/Detail/Detail'
import Logout from '../../pages/Logout/Logout'

const Body = () => {
  return (
    <BodySection>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mypage/order" element={<MyPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/mypage/order/:id" element={<Detail />} />
      </Routes>
    </BodySection>
  )
}

export default Body
