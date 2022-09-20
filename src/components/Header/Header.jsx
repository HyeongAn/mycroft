import React from 'react'
import logo from '../../assets/logo.jpeg'
import { HeaderSection, MenuButton, Wrapper } from './styled'
import useDetectClose from '../../Hooks/useDetectClose'
import DropDwon from '../DropDwon/DropDwon'

const Header = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false)

  return (
    <>
      <HeaderSection>
        <img src={logo} />
        <Wrapper>
          <MenuButton onClick={myPageHandler} ref={myPageRef}>
            Menu
            <DropDwon myPageIsOpen={myPageIsOpen} />
          </MenuButton>
        </Wrapper>
      </HeaderSection>
    </>
  )
}

export default Header
