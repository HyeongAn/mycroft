import styled from 'styled-components'

export const SignupSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrap = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.span`
  font-size: 1.2rem;
  margin: 1.5rem 0 0.5rem 0;
`

export const Input = styled.input`
  width: 20rem;
  height: 2rem;
  border: ${(props) =>
    props.borderColor ? '1px solid red' : '1px solid #d3d3d3'};
  border-radius: 5px;
  padding-left: 10px;
  font-size: 1rem;
  outline: none;
  ::placeholder {
    color: #e4e4e4;
    font-size: 0.8rem;
  }
`
export const SignupButton = styled.button`
  margin-top: 2rem;
  width: 21rem;
  height: 2.5rem;
  background-color: #ff6767;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
