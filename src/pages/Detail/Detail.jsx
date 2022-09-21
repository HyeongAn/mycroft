import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailSection, SubjectWrap } from './styled'
import loading from '../../assets/loading.gif'

const Detail = () => {
  const [productData, setProductData] = useState()
  const params = useParams().id
  const productDetail = useSelector(
    (state) => state.mypage.orderProduct.content,
  ).filter((data) => data.id.toString() === params)

  useEffect(() => {
    if (productDetail.length === 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/order/${params}`, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((result) => {
          setProductData(result.data)
        })
        .catch((error) => console.log(error))
    }
  })

  return (
    <DetailSection>
      <SubjectWrap>
        <p>Id</p>
        <p>itemName</p>
      </SubjectWrap>
      {productDetail.length !== 0 ? (
        <SubjectWrap>
          <span>{productDetail[0].id}</span>
          <span>{productDetail[0].itemName}</span>
        </SubjectWrap>
      ) : productData ? (
        <SubjectWrap>
          <span>{productData.id}</span>
          <span>{productData.itemName}</span>
        </SubjectWrap>
      ) : (
        <img src={loading} alt="loading img" />
      )}
    </DetailSection>
  )
}

export default Detail
