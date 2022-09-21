import React from 'react'
import { SignupSection } from '../Signup/styled'
import RoketLogo from '../../assets/roket_Logo.png'
import { LogoutContent } from './styled'

const Logout = () => {
  return (
    <SignupSection>
      <LogoutContent>
        <img src={RoketLogo} alt="logout img" />
        <p>로그아웃 되었습니다.</p>
      </LogoutContent>
    </SignupSection>
  )
}

export default Logout
