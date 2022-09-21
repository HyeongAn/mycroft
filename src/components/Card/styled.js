import styled from 'styled-components'

export const CardSection = styled.section`
  width: 19rem;
  height: 25rem;
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 12px;
  flex-direction: column;
  margin: 5rem 1rem 0 1rem;

  & > img {
    width: 19rem;
    height: 15rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`
export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0.5rem;
  }

  & > span {
    font-size: 1rem;
    max-height: 95px;
    margin: 0 0.5rem;
    line-height: 1.2rem;
    overflow: hidden;
  }
`
