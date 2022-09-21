import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CardSection, ContentWrap } from './styled'

const Card = ({ info }) => {
  const navigate = useNavigate()
  const isLogin = useSelector((state) => state.login.isLogin)
  const accessToken = useSelector((state) => state.login.accessToken)

  const handleClick = () => {
    if (isLogin && accessToken) {
      alert('주문이 성공하였습니다.')
    } else {
      if (!alert('로그인이 필요합니다.')) {
        navigate('/sign-up')
      }
    }
  }

  return (
    <CardSection onClick={handleClick}>
      <img src={info.photo} alt="product img" />
      <ContentWrap>
        <h2>{info.title}</h2>
        <span>{info.content}</span>
      </ContentWrap>
    </CardSection>
  )
}

export default Card
