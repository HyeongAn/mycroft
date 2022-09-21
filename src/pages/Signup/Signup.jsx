import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginSlice'
import axios from 'axios'
import {
  SignupSection,
  ContentWrap,
  Title,
  Input,
  SignupButton,
} from './styled'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [passwordCheck, setPasswordCheck] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [samePassword, setSamePassword] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    mobile: '',
  })
  const isValidEmail =
    userInfo.email.includes('@') && userInfo.email.includes('.')
  const isValidPassword =
    userInfo.password.length >= 8 && userInfo.password.length <= 15
  const isSamePassword = userInfo.password === passwordCheck

  // 이메일 입력
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value })
  }

  // 비밀번호 확인입력 값
  const handlePWcheck = (e) => {
    setPasswordCheck(e.target.value)
  }

  // 연락처 입력
  const handleMobile = (e) => {
    const regex = /^[0-9]{0,13}$/
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value)
      setUserInfo({ ...userInfo, mobile: e.target.value })
    }
  }

  // 이메일 유효성검사
  const handleOnBlur = () => {
    if (!isValidEmail) {
      setValidEmail(true)
      alert('이메일을 확인해주세요')
    } else {
      setValidEmail(false)
    }
  }

  // 비밀번호 유효성검사
  const handleChange = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value })
    if (!isValidPassword) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }

  // 회원가입 요청
  const handleSignup = () => {
    if (isValidEmail && isValidPassword && isSamePassword) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/sign-up`,
          {
            email: userInfo.email,
            password: userInfo.password,
            mobile: userInfo.mobile,
          },
          { 'Content-Type': 'application/json' },
        )
        .then((result) => {
          dispatch(login(result.data.token))
          setTimeout(() => {
            navigate('/')
          }, 50)
        })
        .catch((error) => console.log(error))
    } else if (!isValidPassword) {
      alert('비밀번호는 8자 이상 15자 이하여야 합니다.')
    } else if (!isSamePassword) {
      alert('비밀번호가 일치하지 않습니다.')
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
          onBlur={handleOnBlur}
          borderColor={validEmail}
        />
        <Title>비밀번호</Title>
        <Input
          type="password"
          placeholder="8자리 이상 15이하의 비밀번호를 입력하세요"
          onChange={handleChange('password')}
          borderColor={validPassword}
        />
        <Title>비밀번호 확인</Title>
        <Input
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요"
          onChange={handlePWcheck}
          borderColor={samePassword}
        />
        <Title>연락처(선택)</Title>
        <Input
          type="text"
          placeholder=" ' - ' 제외한 연락처를 입력하세요"
          value={inputValue}
          onChange={handleMobile}
        />
        <SignupButton onClick={handleSignup}>회원가입하기</SignupButton>
      </ContentWrap>
    </SignupSection>
  )
}

export default Signup
