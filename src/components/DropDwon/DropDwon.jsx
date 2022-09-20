import React from 'react'
import { Menu, Ul, Li, LinkWrapper } from './styled'

const DropDwon = ({ myPageIsOpen }) => {
  return (
    <Menu isDropped={myPageIsOpen}>
      <Ul>
        <Li>
          <LinkWrapper>서비스</LinkWrapper>
        </Li>
        <Li>
          <LinkWrapper>회원가입</LinkWrapper>
        </Li>
        <Li>
          <LinkWrapper>로그인</LinkWrapper>
        </Li>
      </Ul>
    </Menu>
  )
}

export default DropDwon
