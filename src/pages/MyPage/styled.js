import styled from 'styled-components'

export const MypageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
`
export const SubjectWrap = styled.div`
  width: 100%;
  height: 14.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Subject = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const BoardWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
`

export const ContentTitle = styled.div`
  width: 100%;
  height: 4.0625rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > span {
    width: 5.625rem;
    color: #909090;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 600;
  }
`
