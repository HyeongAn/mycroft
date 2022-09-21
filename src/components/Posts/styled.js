import styled from 'styled-components'

export const ContentWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 500px;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  border-top: 0.5px solid #d9d9d9;
  width: 100%;
  &:hover {
    transition: all 0.4s;
    background-color: rgba(0, 0, 0, 0.05);
  }
`
export const SpanWrap = styled.div`
  width: 5.625rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9375rem;
  line-height: 1.125rem;
`

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 20rem;
    height: 20rem;
  }

  & > span {
    font-size: 3rem;
    font-weight: 700;
  }
`
