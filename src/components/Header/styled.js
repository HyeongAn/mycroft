import styled from 'styled-components'

export const HeaderSection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    width: 3.75rem;
    height: 3.75rem;
    cursor: pointer;
    margin-left: 1rem;
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const MenuButton = styled.div`
  width: 6.25rem;
  height: 100%;
  background-color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
