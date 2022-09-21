import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getInfo } from '../../reducers/mypageSlice'
import axios from 'axios'
import { PageSection, ButtonWrap, Button } from './styled'

const Pagenation = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch()
  const orderProduct = useSelector((state) => state.mypage.orderProduct)
  const totalPages = orderProduct.totalPages

  const handlePagenate = (e) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/order?page=${e.currentTarget.id}`,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then((result) => {
        dispatch(getInfo(result.data))
        setCurrentPage(result.data.currentPage)
      })
      .catch((error) => console.log(error))
  }

  return (
    <PageSection>
      <ButtonWrap>
        {Array(totalPages)
          .fill()
          .map((_, idx) => {
            return (
              <Button
                id={idx}
                key={idx + 1}
                aria-current={currentPage === idx ? 'page' : null}
                onClick={(e) => handlePagenate(e)}>
                {idx + 1}
              </Button>
            )
          })}
      </ButtonWrap>
    </PageSection>
  )
}

export default Pagenation
