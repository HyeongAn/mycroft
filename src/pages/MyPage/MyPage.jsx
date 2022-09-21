import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getInfo } from '../../reducers/mypageSlice'
import Posts from '../../components/Posts/Posts'
import useSessionStorage from '../../Hooks/useSessionStorage'
import {
  MypageSection,
  BoardWrap,
  Board,
  ContentTitle,
  SubjectWrap,
  Subject,
} from './styled'

const MyPage = () => {
  const dispatch = useDispatch()
  const myPageContent = useSelector(
    (state) => state.mypage.orderProduct.content,
  )
  // detail페이지 들어간 후 뒤로돌아갈때 현재 pagenation 유지하기
  const [currentPage, setCurrentPage] = useSessionStorage('currentPage', 0)

  useEffect(() => {
    // 세션스토리지에 해당 값이 없으면 새로 불러오기
    if (!myPageContent) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/order?page=${currentPage}`, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((result) => {
          dispatch(getInfo(result.data))
        })
        .catch((error) => console.log(error))
    }
  })

  return (
    <MypageSection>
      <SubjectWrap>
        <Subject>MyPage</Subject>
      </SubjectWrap>
      <BoardWrap>
        <Board>
          <ContentTitle>
            <span>Id</span>
            <span>ItemName</span>
          </ContentTitle>
          <Posts currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Board>
      </BoardWrap>
    </MypageSection>
  )
}
export default MyPage
