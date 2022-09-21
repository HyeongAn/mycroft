import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginSlice'
import { useNavigate } from 'react-router-dom'
import {
  SignupSection,
  ContentWrap,
  Title,
  Input,
  SignupButton,
} from '../Signup/styled'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value })
  }

  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/login`,
          {
            email: loginInfo.email,
            password: loginInfo.password,
          },
          { 'Content-Type': 'application/json' },
        )
        .then((result) => {
          dispatch(login(result.data.token))
          setTimeout(() => {
            navigate('/')
          }, 50)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            alert('비밀번호를 확인해주세요.')
          }
        })
    }
  }

  return (
    <SignupSection>
      <ContentWrap>
        <Title>이메일</Title>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={handleInputValue('email')}
        />
        <Title>비밀번호</Title>
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleInputValue('password')}
        />
        <SignupButton onClick={handleLogin}>로그인</SignupButton>
      </ContentWrap>
    </SignupSection>
  )
}

export default Login
