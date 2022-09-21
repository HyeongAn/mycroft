import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContentWrap, Content, SpanWrap, ImageWrap } from './styled'
import loading from '../../assets/loading.gif'
import Pagenation from '../Pagenation/Pagenation'

const Posts = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate()
  const orderProduct = useSelector((state) => state.mypage.orderProduct)

  return (
    <>
      <ContentWrap>
        {orderProduct.content.length !== 0 ? (
          orderProduct.content.map((data, idx) => {
            return (
              <Content
                id={data.id}
                key={idx}
                onClick={() => {
                  navigate(`/mypage/order/${data.id}`)
                }}>
                <SpanWrap>{data.id}</SpanWrap>
                <SpanWrap>{data.itemName}</SpanWrap>
              </Content>
            )
          })
        ) : (
          <ImageWrap>
            <img src={loading} alt="loading img" />
            <span>Loading...</span>
          </ImageWrap>
        )}
      </ContentWrap>
      <Pagenation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Posts
