import styled from 'styled-components'

export const DetailSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  margin-top: 5rem;

  & > img {
    width: 7rem;
    height: 7rem;
  }
`

export const SubjectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > p {
    width: 9.375rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }

  & > span {
    width: 9.375rem;
    font-size: 1.25rem;
    text-align: center;
  }
`
