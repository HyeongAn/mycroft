import styled, { css } from 'styled-components'

export const Menu = styled.div`
  background: #d3d3d3;
  position: absolute;
  top: 40px;
  left: -80%;
  width: 20rem;
  text-align: center;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 90%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #d3d3d3;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: -80%;
    `};
`

export const Ul = styled.ul`
  & > li {
    margin: 10px 0;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Li = styled.li``

export const LinkWrapper = styled.span`
  font-size: 16px;
  text-decoration: none;
  color: ${({ fontColor }) => (fontColor ? '#6583ED' : 'white')};
`
