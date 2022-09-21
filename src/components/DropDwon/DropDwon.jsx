import React, { useState } from 'react'
import { Menu, Ul, Li, LinkWrapper } from './styled'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../reducers/loginSlice'

const DropDwon = ({ myPageIsOpen }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.login.isLogin)
  const [isService, setIsService] = useState(true)
  const [isMypage, setIsMypage] = useState(false)
  const [isLogout, setIsLogout] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/logout')
  }

  return (
    <Menu isDropped={myPageIsOpen}>
      <Ul>
        <Li>
          <LinkWrapper
            onClick={() => {
              navigate('/')
              setIsService(true)
              setIsMypage(false)
              setIsLogout(false)
            }}
            fontColor={isService}>
            서비스
          </LinkWrapper>
        </Li>
        <Li>
          {isLogin ? (
            <LinkWrapper
              onClick={() => {
                navigate('/mypage/order')
                setIsService(false)
                setIsMypage(true)
                setIsLogout(false)
              }}
              fontColor={isMypage}>
              마이페이지
            </LinkWrapper>
          ) : (
            <LinkWrapper
              onClick={() => {
                navigate('/sign-up')
                setIsService(false)
                setIsMypage(true)
                setIsLogout(false)
              }}
              fontColor={isMypage}>
              회원가입
            </LinkWrapper>
          )}
        </Li>
        <Li>
          {isLogin ? (
            <LinkWrapper onClick={handleLogout}>로그아웃</LinkWrapper>
          ) : (
            <LinkWrapper
              onClick={() => {
                navigate('/login')
                setIsService(false)
                setIsMypage(false)
                setIsLogout(true)
              }}
              fontColor={isLogout}>
              로그인
            </LinkWrapper>
          )}
        </Li>
      </Ul>
    </Menu>
  )
}

export default DropDwon
